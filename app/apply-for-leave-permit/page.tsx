"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function ApplyForLeavePermit() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    ssnLast4: "",
    requestDate: "",
    position: "",
    travelMethod: "",
    reasonForLeave: "",
    ticketStatus: "",
    paymentMethod: "",
    accurateInfo: false,
    approvalAck: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Store form data in localStorage
    const existingData = JSON.parse(localStorage.getItem("leaveApplicationData") || "{}")
    const updatedData = { ...existingData, step2: formData }
    localStorage.setItem("leaveApplicationData", JSON.stringify(updatedData))

    // Navigate to verification step
    router.push("/verify-your-id")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
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
        <div className="form-container">
          <div className="form-wrapper">
            <h1>Leave Permit Details</h1>
            <p className="form-subtitle">Please provide your detailed information for leave permit processing.</p>

            <form onSubmit={handleSubmit} className="application-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="idNumber">ID Number</label>
                  <input
                    type="text"
                    id="idNumber"
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ssnLast4">Last 4 digits of SSN</label>
                  <input
                    type="text"
                    id="ssnLast4"
                    name="ssnLast4"
                    value={formData.ssnLast4}
                    onChange={handleChange}
                    maxLength={4}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="requestDate">Date of Request</label>
                  <input
                    type="date"
                    id="requestDate"
                    name="requestDate"
                    value={formData.requestDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="position">Position</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="travelMethod">Travel Method</label>
                <select
                  id="travelMethod"
                  name="travelMethod"
                  value={formData.travelMethod}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select one...</option>
                  <option value="company-oneway">Company one-way trip</option>
                  <option value="private">Private trip</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="reasonForLeave">Reason for Leave</label>
                <select
                  id="reasonForLeave"
                  name="reasonForLeave"
                  value={formData.reasonForLeave}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select one...</option>
                  <option value="annual">Annual Leave</option>
                  <option value="emergency">Emergency Leave</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="ticketStatus">Ticket Status</label>
                <select
                  id="ticketStatus"
                  name="ticketStatus"
                  value={formData.ticketStatus}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select one...</option>
                  <option value="own">Own Ticket</option>
                  <option value="company">Company Provide</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="paymentMethod">Payment Method</label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select one...</option>
                  <option value="bank-transfer">Bank Transfer</option>
                  <option value="paypal-crypto">PayPal or Cryptocurrency</option>
                  <option value="credit-debit">Credit/Debit Card</option>
                  <option value="cash-mail">Cash Mailing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="consent-section">
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="accurateInfo"
                    name="accurateInfo"
                    checked={formData.accurateInfo}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="accurateInfo">I confirm all information is accurate</label>
                </div>
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="approvalAck"
                    name="approvalAck"
                    checked={formData.approvalAck}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="approvalAck">I acknowledge leave is subject to approval</label>
                </div>
              </div>

              <div className="system-note">
                <h4>System Note</h4>
                <p>Leave requests are subject to vessel management approval</p>
                <p>Payment processing starts after approval</p>
              </div>

              <button type="submit" className="submit-btn">
                Continue to Verification
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
