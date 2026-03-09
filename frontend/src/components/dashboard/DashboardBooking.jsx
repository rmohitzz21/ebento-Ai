import { useState } from 'react'

const initialBookings = [
  {
    id: 1,
    name: 'Sneha Verma',
    status: 'Confirmed',
    service: 'Wedding Photography Package',
    date: '2026-03-25',
    location: 'Mumbai',
    price: '₹45,000',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
  },
  {
    id: 2,
    name: 'Karan Malhotra',
    status: 'Pending',
    service: 'Wedding Photography Package',
    date: '2026-03-25',
    location: 'Mumbai',
    price: '₹45,000',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
  },
  {
    id: 3,
    name: 'Karan Malhotra',
    status: 'Pending',
    service: 'Wedding Photography Package',
    date: '2026-03-25',
    location: 'Mumbai',
    price: '₹45,000',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
  },
  {
    id: 4,
    name: 'Rohan Gupta',
    status: 'Completed',
    service: 'Wedding Photography Package',
    date: '2026-03-25',
    location: 'Mumbai',
    price: '₹45,000',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
  },
]

const TABS = ['All', 'Pending', 'Confirmed', 'Completed', 'Cancelled']

const statusColors = {
  Confirmed: { bg: '#dcfce7', color: '#166534' },
  Pending:   { bg: '#fef9c3', color: '#854d0e' },
  Completed: { bg: '#e0f2fe', color: '#0369a1' },
  Cancelled: { bg: '#fee2e2', color: '#991b1b' },
}

export default function DashboardBooking() {
  const [activeTab, setActiveTab] = useState('All')
  const [bookings, setBookings] = useState(initialBookings)

  const updateStatus = (id, newStatus) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b))
  }

  const filtered = activeTab === 'All'
    ? bookings
    : bookings.filter(b => b.status === activeTab)

  return (
    <div className="booking-container">
      <h2 className="booking-title">Booking</h2>

      {/* Filter Tabs */}
      <div className="booking-tabs">
        {TABS.map(tab => {
          const count = tab === 'All' ? bookings.length : bookings.filter(b => b.status === tab).length
          return (
            <button
              key={tab}
              className={`booking-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}{tab === 'All' ? ` (${count})` : count > 0 ? ` (${count})` : ''}
            </button>
          )
        })}
      </div>

      {/* Booking List */}
      <div className="booking-list">
        {filtered.length === 0 && (
          <div className="booking-empty">No {activeTab.toLowerCase()} bookings found.</div>
        )}
        {filtered.map(b => {
          const sc = statusColors[b.status] || statusColors.Pending
          return (
            <div key={b.id} className="booking-row">
              <div className="booking-left">
                <img src={b.avatar} alt={b.name} className="booking-avatar" />
                <div className="booking-info">
                  <div className="booking-name-row">
                    <span className="booking-name">{b.name}</span>
                    <span
                      className="booking-status-badge"
                      style={{ background: sc.bg, color: sc.color }}
                    >
                      {b.status}
                    </span>
                  </div>
                  <div className="booking-service">{b.service}</div>
                  <div className="booking-meta">
                    <span>📅 {b.date}</span>
                    <span>📍 {b.location}</span>
                    <span className="booking-price">{b.price}</span>
                  </div>
                </div>
              </div>

              <div className="booking-right">
                {b.status === 'Confirmed' && (
                  <>
                    <button
                      className="btn-mark-complete"
                      onClick={() => updateStatus(b.id, 'Completed')}
                    >
                      ✅ Mark Complete
                    </button>
                    <button className="btn-view">👁 View</button>
                  </>
                )}
                {b.status === 'Pending' && (
                  <>
                    <button
                      className="btn-accept"
                      onClick={() => updateStatus(b.id, 'Confirmed')}
                    >
                      ✅ Accept
                    </button>
                    <button
                      className="btn-reject"
                      onClick={() => updateStatus(b.id, 'Cancelled')}
                    >
                      ✖ Reject
                    </button>
                    <button className="btn-view">👁 View</button>
                  </>
                )}
                {(b.status === 'Completed' || b.status === 'Cancelled') && (
                  <button className="btn-view">👁 View</button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
