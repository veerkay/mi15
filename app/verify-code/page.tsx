"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { RESEND_CONFIG } from "@/lib/config"

export default function VerifyCode() {
  const router = useRouter()
  const [otpCode, setOtpCode] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [otpData, setOtpData] = useState<{ otp: string; timestamp: number } | null>(null)

  // ⚠️ EMAIL CONFIGURATION POINT #4 ⚠️
  // This should match the pattern of the admin email
  // This value comes from the shared config file: lib/config.ts
  const maskedEmail = RESEND_CONFIG.MASKED_EMAIL

  useEffect(() => {
    // Get OTP data from localStorage
    const storedOtpData = localStorage.getItem("otpData")
    if (storedOtpData) {
      setOtpData(JSON.parse(storedOtpData))
    } else {
      // If no OTP data, redirect back to verification
      router.push("/verify-your-id")
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    if (!otpData) {
      setError("No verification data found. Please start over.")
      setIsSubmitting(false)
      return
    }

    try {
      // Verify OTP code
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          otp: otpCode,
          storedOtp: otpData.otp,
          timestamp: otpData.timestamp,
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        // Get all stored form data
        const applicationData = JSON.parse(localStorage.getItem("leaveApplicationData") || "{}")

        // Add submission date to the data
        applicationData.submissionDate = new Date().toISOString()

        // Send the complete application data
        const emailResponse = await fetch("/api/send-application", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(applicationData),
        })

        if (emailResponse.ok) {
          // Clear stored data
          localStorage.removeItem("leaveApplicationData")
          localStorage.removeItem("otpData")
          // Navigate to thank you page
          router.push("/thank-you")
        } else {
          throw new Error("Failed to submit application")
        }
      } else {
        setError(result.message || "Invalid verification code. Please try again.")
      }
    } catch (error) {
      console.error("Error verifying code:", error)
      setError("There was an error verifying your code. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!otpData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p>Loading verification data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/">
              <Image src="/logo.jpg" alt="Navieros Logo" width={120} height={40} />
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="/" className="nav-button text-black hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/start-leave-application" className="nav-button bg-black text-white px-5 py-2 rounded">
              Leave Application
            </Link>
          </div>
        </div>
      </nav>

      <div className="form-container">
        <div className="form-wrapper">
          <h1 style={{ color: "#e74c3c" }}>We are almost done</h1>
          <p className="form-subtitle">To proceed, enter the 6 digit code sent to your Email {maskedEmail}</p>

          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="application-form">
            <div className="form-group">
              <label htmlFor="otpCode">Verification Code</label>
              <input
                type="text"
                id="otpCode"
                name="otpCode"
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="Enter 6-digit code"
                maxLength={6}
                required
                className="text-center text-2xl tracking-widest"
                style={{ letterSpacing: "0.5em" }}
              />
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting || otpCode.length !== 6}>
              {isSubmitting ? "Verifying..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
