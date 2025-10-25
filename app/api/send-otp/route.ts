import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { RESEND_CONFIG, validateConfig } from "@/lib/config"

const resend = new Resend(RESEND_CONFIG.API_KEY)

// Generate a random 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export async function POST(request: NextRequest) {
  try {
    // Validate configuration
    const configValidation = validateConfig()
    if (!configValidation.isValid) {
      console.error("Configuration errors:", configValidation.errors)
      return NextResponse.json(
        {
          success: false,
          message: "Email service not configured properly",
          errors: configValidation.errors,
        },
        { status: 500 },
      )
    }

    const body = await request.json()
    const { email, userData } = body

    if (!email || !userData) {
      return NextResponse.json({ success: false, message: "Missing required data" }, { status: 400 })
    }

    // Generate OTP
    const otp = generateOTP()

    // Format user data for the email
    const userSummary = `
      <p><strong>Name:</strong> ${userData.step2?.firstName || ""} ${userData.step2?.lastName || ""}</p>
      <p><strong>ID Number:</strong> ${userData.step2?.idNumber || "N/A"}</p>
      <p><strong>Email:</strong> ${userData.step3?.verifyEmail || "N/A"}</p>
    `

    // Send OTP via email
    const { data, error } = await resend.emails.send({
      from: RESEND_CONFIG.FROM_EMAIL,
      // ⚠️ EMAIL CONFIGURATION POINT #1 ⚠️
      // This is where OTP verification codes will be sent
      // The email parameter should be your verified Resend email address
      to: [email], // This should be the email passed from verify-your-id page
      subject: "Verification Code for Navieros Leave Application",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Verification Code</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #2c3e50; color: white; padding: 20px; text-align: center; }
              .code-box { font-size: 32px; font-weight: bold; text-align: center; 
                          padding: 20px; margin: 20px 0; background: #f8f9fa; 
                          border: 1px dashed #ddd; letter-spacing: 5px; }
              .user-info { background: #ecf0f1; padding: 15px; margin: 20px 0; }
              .footer { font-size: 12px; text-align: center; margin-top: 30px; color: #7f8c8d; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🔐 Verification Code</h1>
                <p>Navieros Leave Application System</p>
              </div>
              
              <p>A user has completed the leave application form and is waiting for verification.</p>
              
              <div class="code-box">${otp}</div>
              
              <p>Please provide this code to the applicant to complete their submission.</p>
              
              <div class="user-info">
                <h3>Applicant Information:</h3>
                ${userSummary}
              </div>
              
              <p><strong>Note:</strong> This code will expire in 30 minutes for security purposes.</p>
              
              <div class="footer">
                <p>This is an automated message from the Navieros Transportation leave application system.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ success: false, message: "Failed to send verification code" }, { status: 500 })
    }

    // Return success with OTP (for client-side storage)
    return NextResponse.json({
      success: true,
      message: "Verification code sent successfully",
      otp: otp, // We'll store this on client side
      timestamp: Date.now(), // For expiration checking
    })
  } catch (error) {
    console.error("Error in send-otp route:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
