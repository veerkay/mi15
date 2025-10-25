import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { otp, storedOtp, timestamp } = body

    if (!otp || !storedOtp || !timestamp) {
      return NextResponse.json({ success: false, message: "Missing required verification data" }, { status: 400 })
    }

    // Check if OTP has expired (30 minutes = 1800000 milliseconds)
    const currentTime = Date.now()
    const otpAge = currentTime - timestamp
    const thirtyMinutes = 30 * 60 * 1000

    if (otpAge > thirtyMinutes) {
      return NextResponse.json(
        { success: false, message: "OTP has expired. Please request a new one." },
        { status: 400 },
      )
    }

    // Verify OTP
    if (storedOtp && otp === storedOtp) {
      return NextResponse.json({ success: true, message: "OTP verified successfully" })
    } else {
      return NextResponse.json({ success: false, message: "Invalid OTP" }, { status: 400 })
    }
  } catch (error) {
    console.error("Error verifying OTP:", error)
    return NextResponse.json({ success: false, message: "Failed to verify OTP" }, { status: 500 })
  }
}
