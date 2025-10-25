"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function StartLeaveApplication() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    appliedBefore: "",
    usCitizen: "",
    activeContract: "",
    leaveType: "",
    applyingForOther: "",
    email: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Store form data in localStorage
    const existingData = JSON.parse(localStorage.getItem("leaveApplicationData") || "{}")
    const updatedData = { ...existingData, step1: formData }
    localStorage.setItem("leaveApplicationData", JSON.stringify(updatedData))

    // Navigate to next step
    router.push("/apply-for-leave-permit")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

      <section>
        <div className="form-container" style={{ marginTop: "50px" }}>
          <div className="form-wrapper">
            <h1>Leave Application Form</h1>
            <p className="form-subtitle">
              Fill out our simple Navieros leave application form to ensure your request is processed quickly and
              efficiently. We value your time.
            </p>

            <form onSubmit={handleSubmit} className="application-form">
              <div className="form-group">
                <label htmlFor="appliedBefore">Have you applied for leave before?</label>
                <select
                  id="appliedBefore"
                  name="appliedBefore"
                  value={formData.appliedBefore}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select one...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="usCitizen">Are you a US citizen?</label>
                <select id="usCitizen" name="usCitizen" value={formData.usCitizen} onChange={handleChange} required>
                  <option value="">Select one...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="activeContract">Are you on an active contract?</label>
                <select
                  id="activeContract"
                  name="activeContract"
                  value={formData.activeContract}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select one...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="leaveType">Which will you be applying for?</label>
                <select id="leaveType" name="leaveType" value={formData.leaveType} onChange={handleChange} required>
                  <option value="">Select one...</option>
                  <option value="annual">Annual leave</option>
                  <option value="emergency">Emergency leave</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="applyingForOther">Are you applying for someone else?</label>
                <select
                  id="applyingForOther"
                  name="applyingForOther"
                  value={formData.applyingForOther}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select one...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address [Alternative Email]</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Continue to Next Step
              </button>
            </form>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-wrap-xzy893">
          <div className="overlay-box-qwe123">
            <h1 className="main-heading-nmn557">Stay up to date</h1>
            <p className="subtext-kel429">Get regular updates about upcoming trips.</p>
            <form className="form-area-zyx778">
              <input type="email" placeholder="Your email" className="input-email-dfa654" required />
              <button type="submit" className="btn-subscribe-mzx441">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
