export default function DashboardHome() {
  return (
    <div className="verification-container">
      <div className="verification-card">
        <div className="verify-badge">
          <span className="verify-clock">🕐</span>
          Verification in Progress
        </div>
        <h2 className="verify-title">Your Application is Under Review</h2>
        <p className="verify-desc">
          Thank you for submitting your details! Our team is carefully reviewing<br />
          your application and documents.
        </p>
        <div className="verify-steps">
          <h4>What happens next?</h4>
          <p>1. Our verification team reviews your business and bank details</p>
          <p>2. We verify your uploaded documents (PAN, Aadhaar, License)</p>
          <p>3. You'll receive an email notification with the verification result</p>
        </div>
        <p className="verify-eta">Estimated Review Time 24 - 48 Hours</p>
      </div>
    </div>
  )
}
