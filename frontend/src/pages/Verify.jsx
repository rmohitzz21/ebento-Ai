import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Verify() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputs = useRef([])
  const navigate = useNavigate()

  const handleChange = (val, idx) => {
    if (!/^\d*$/.test(val)) return
    const next = [...otp]
    next[idx] = val.slice(-1)
    setOtp(next)
    if (val && idx < 5) inputs.current[idx + 1]?.focus()
  }

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      inputs.current[idx - 1]?.focus()
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-bg" />
      <div className="auth-card">
        <h1>Verification</h1>
        <p className="auth-sub">Enter the code sent to you Contact number</p>
        <p className="phone-display">+91- *******189</p>

        <div className="otp-container">
          {otp.map((val, i) => (
            <input
              key={i}
              ref={el => inputs.current[i] = el}
              className="otp-input"
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={val}
              onChange={e => handleChange(e.target.value, i)}
              onKeyDown={e => handleKeyDown(e, i)}
            />
          ))}
        </div>

        <p className="resend-text">
          Haven't received any Code? <a href="#">Resend OTP</a> 25s
        </p>

        <button
          className="btn-auth"
          onClick={() => navigate('/vendor/details')}
        >
          Verify
        </button>
      </div>
    </div>
  )
}
