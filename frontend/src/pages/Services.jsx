import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const serviceOptions = [
  { label: 'Catering Services', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=200&q=80' },
  { label: 'Event Decor & Styling', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=200&q=80' },
  { label: 'Photography & Videography', img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=200&q=80' },
  { label: 'Venue & Banquet', img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=200&q=80' },
  { label: 'Music & Entertainment', img: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=200&q=80' },
  { label: 'Beauty & Grooming', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&q=80' },
  { label: 'Gifting & Invitations', img: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=200&q=80' },
  { label: 'Rentals & Logistics', img: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=200&q=80' },
  { label: 'Wedding Planners', img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=200&q=80' },
  { label: 'Event Security', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=200&q=80' },
  { label: 'Cleaning Services', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200&q=80' },
  { label: 'Event Catering Staff', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&q=80' },
  { label: 'Event Host', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=200&q=80' },
  { label: 'Stage Performer', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=200&q=80' },
]

export default function Services() {
  const [selected, setSelected] = useState([])
  const navigate = useNavigate()

  const toggle = (label) => {
    setSelected(prev =>
      prev.includes(label) ? prev.filter(s => s !== label) : [...prev, label]
    )
  }

  return (
    <div className="services-page">
      <div className="auth-bg" />
      <div className="services-card">
        <h1>Tell Us What You Offer</h1>
        <p className="auth-sub">
          Help customers find you easily by selecting your service categories.<br />
          Choose the options that best describe your business.
        </p>

        <div className="services-icons-grid">
          {serviceOptions.map((s) => (
            <div
              key={s.label}
              className={`service-icon-item ${selected.includes(s.label) ? 'selected' : ''}`}
              onClick={() => toggle(s.label)}
            >
              <div className="service-icon-circle">
                <img src={s.img} alt={s.label} />
              </div>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        <button
          className="btn-auth"
          style={{ maxWidth: 320, margin: '0 auto' }}
          onClick={() => navigate('/vendor/dashboard')}
        >
          Next
        </button>
      </div>
    </div>
  )
}
