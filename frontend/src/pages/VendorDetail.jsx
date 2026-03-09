import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const states = ['Gujarat', 'Maharashtra', 'Delhi', 'Karnataka', 'Rajasthan', 'Tamil Nadu']
const cities = {
  Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
  Delhi: ['New Delhi', 'Noida', 'Gurugram'],
  Karnataka: ['Bangalore', 'Mysore'],
  Rajasthan: ['Jaipur', 'Udaipur', 'Jodhpur'],
  'Tamil Nadu': ['Chennai', 'Coimbatore'],
}
const vendorTypes = [
  'Catering Services', 'Event Decor & Styling', 'Photography & Videography',
  'Venue & Banquet', 'Music & Entertainment', 'Beauty & Grooming',
  'Wedding Planners', 'Rentals & Logistics',
]

export default function VendorDetail() {
  const [form, setForm] = useState({
    companyName: '', contactPerson: '', state: '', city: '', email: '', vendorType: '',
  })
  const navigate = useNavigate()

  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }))

  return (
    <div className="auth-page">
      <div className="auth-bg" />
      <div className="auth-card" style={{ maxWidth: 520 }}>
        <h1>Vendor Detail</h1>
        <p className="auth-sub">Join iBento to plan, book, and manage your events with ease.</p>

        <div className="vendor-form-grid">
          <div className="form-field">
            <label>Company Name</label>
            <input
              placeholder="Enter Your Company Name"
              value={form.companyName}
              onChange={e => set('companyName', e.target.value)}
            />
          </div>
          <div className="form-field">
            <label>Contact Person Name</label>
            <input
              placeholder="Enter Your First Name"
              value={form.contactPerson}
              onChange={e => set('contactPerson', e.target.value)}
            />
          </div>
          <div className="form-field">
            <label>State</label>
            <select value={form.state} onChange={e => set('state', e.target.value)}>
              <option value="">Select state</option>
              {states.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="form-field">
            <label>City</label>
            <select value={form.city} onChange={e => set('city', e.target.value)}>
              <option value="">Select city</option>
              {(cities[form.state] || []).map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="form-field">
            <label>Email ID</label>
            <input
              type="email"
              placeholder="Enter Your mail id"
              value={form.email}
              onChange={e => set('email', e.target.value)}
            />
          </div>
          <div className="form-field">
            <label>Vendor Type</label>
            <select value={form.vendorType} onChange={e => set('vendorType', e.target.value)}>
              <option value="">Select vendor type</option>
              {vendorTypes.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
        </div>

        <button className="btn-auth" onClick={() => navigate('/vendor/services')}>
          Next
        </button>
      </div>
    </div>
  )
}
