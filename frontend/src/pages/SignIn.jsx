import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function SignIn() {
  const [phone, setPhone] = useState('')
  const navigate = useNavigate()

  const handleRequestOtp = () => {
    if (phone.length >= 10) {
      navigate('/verify')
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-bg" />
      <div className="auth-card">
        <h1>Sign In</h1>
        <p className="auth-sub">Plan, manage, or continue your event journey all in one place.</p>

        <div className="form-group">
          <label>Login with your contact number</label>
          <div className="phone-input">
            <span className="country-code">+91</span>
            <input
              type="tel"
              placeholder="Enter your contact Number"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              maxLength={10}
            />
          </div>
        </div>

        <button className="btn-auth" onClick={handleRequestOtp}>
          Request OTP
        </button>

        <div className="divider"><span>Or Sign In Using</span></div>

        <button className="btn-google">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width={18} />
          Sign-in with Google
        </button>

        <p className="auth-footer">
          Register yourself as Vendor?{' '}
          <Link to="/vendor/details" className="link-primary">Sign up</Link>
        </p>
      </div>
    </div>
  )
}
