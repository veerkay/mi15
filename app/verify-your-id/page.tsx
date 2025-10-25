"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { RESEND_CONFIG } from "@/lib/config"

export default function VerifyYourId() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    verifyEmail: "",
    verifyIdNumber: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Get all stored form data
      const existingData = JSON.parse(localStorage.getItem("leaveApplicationData") || "{}")
      const updatedData = {
        ...existingData,
        step3: formData,
      }

      // Store the updated data
      localStorage.setItem("leaveApplicationData", JSON.stringify(updatedData))

      // Generate and send OTP
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // ⚠️ EMAIL CONFIGURATION POINT #2 ⚠️
          // This is the admin email that will receive OTP verification codes
          // IMPORTANT: This must be your verified Resend email address
          // This value comes from the shared config file: lib/config.ts
          email: RESEND_CONFIG.ADMIN_EMAIL, // Your verified Resend email address
          userData: updatedData,
        }),
      })

      let result
      try {
        result = await response.json()
      } catch (jsonError) {
        console.error("Failed to parse JSON response:", jsonError)
        throw new Error("Server returned invalid response")
      }

      if (response.ok && result.success) {
        // Store OTP data in localStorage for verification
        localStorage.setItem(
          "otpData",
          JSON.stringify({
            otp: result.otp,
            timestamp: result.timestamp,
          }),
        )

        // Navigate to OTP verification page
        router.push("/verify-code")
      } else {
        throw new Error(result.message || "Failed to send verification code")
      }
    } catch (error) {
      console.error("Error sending verification code:", error)
      alert(`There was an error sending the verification code: ${error.message}. Please try again.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
          <h1>Account Verification</h1>
          <p className="form-subtitle">To proceed, verify your account using your email and ID number.</p>

          <form onSubmit={handleSubmit} className="application-form">
            <div className="form-group">
              <label htmlFor="verifyEmail">Email Address</label>
              <input
                type="email"
                id="verifyEmail"
                name="verifyEmail"
                value={formData.verifyEmail}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="verifyIdNumber">ID Number</label>
              <input
                type="text"
                id="verifyIdNumber"
                name="verifyIdNumber"
                value={formData.verifyIdNumber}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending Verification Code..." : "Continue to Verification"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
