import Image from "next/image"
import Link from "next/link"

export default function ThankYou() {
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

      <div className="confirmation-section" style={{ margin: "50px" }}>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mx-auto mb-4">
            <Image src="/check.jpg" alt="Success Check" width={50} height={50} className="mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-green-700 mb-2">Application Submission Confirmation</h2>
          <p className="mb-2">Thank You for Your Application!</p>
          <p className="mb-2">Your application has been successfully submitted.</p>
          <p className="mb-2">Our team is currently reviewing your information to ensure all requirements are met.</p>
          <p className="text-sm text-gray-600">
            Please note: The final review and result may take 3 to 7 business days. Updates will be sent directly to
            your email.
          </p>
        </div>
      </div>

      <div className="details-section">
        <Image src="/ds.jpg" alt="Diana Smorodina" width={220} height={220} className="rounded" />
        <div className="applicant-details">
          <h3 className="text-lg font-semibold mb-4">Application Status</h3>
          <ul className="space-y-2">
            <li>Name: Diana Smorodina</li>
            <li>Total Contract Completed: 47</li>
            <li>Sail Location: International</li>
            <li>Total Sails Looged: 148</li>
          </ul>
        </div>
      </div>

      <div className="footer-note">
        Important Note: For any inquiries or additional assistance during the review process,
        <br />
        {/* 🔧 IMPORTANT: You can also update the support email below if needed */}
        please contact us at <strong>kontactnavieros@outlook.com</strong>
      </div>
    </div>
  )
}
