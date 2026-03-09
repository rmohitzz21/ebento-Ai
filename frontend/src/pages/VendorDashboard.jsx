import { useState } from 'react'
import DashboardHome from '../components/dashboard/DashboardHome'
import DashboardServices from '../components/dashboard/DashboardServices'
import DashboardBooking from '../components/dashboard/DashboardBooking'

const navItems = [
  { icon: '⊞', label: 'Home' },
  { icon: '💼', label: 'Services' },
  { icon: '📅', label: 'Booking' },
  { icon: '👥', label: 'Leads/Inquires' },
  { icon: '🖼', label: 'Portfolio/Gallery' },
  { icon: '💬', label: 'Message' },
  { icon: '📆', label: 'Calender' },
  { icon: '⚙️', label: 'Settings' },
]

export default function VendorDashboard() {
  const [activeNav, setActiveNav] = useState('Home')

  const renderContent = () => {
    switch (activeNav) {
      case 'Services': return <DashboardServices />
      case 'Booking':  return <DashboardBooking />
      default:         return <DashboardHome />
    }
  }

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">ibento<sup>+</sup></div>
        <nav className="sidebar-nav">
          {navItems.map(item => (
            <button
              key={item.label}
              className={`nav-item ${activeNav === item.label ? 'active' : ''}`}
              onClick={() => setActiveNav(item.label)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="profile-setup-card">
          <div className="ps-header">
            <span className="ps-icon">📈</span>
            <div>
              <div className="ps-title">Profile Setup</div>
              <div className="ps-pct">60% Profile Completed</div>
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '60%' }} />
          </div>
          <p className="ps-tip">
            💡 <strong>Pro tip:</strong> Profiles with 100% completion get <strong>3× more</strong> booking requests.
          </p>
          <button className="btn-complete">Complete Profile</button>
        </div>
      </aside>

      {/* Main */}
      <main className="dashboard-main">
        <header className="dash-header">
          <h2 className="dash-welcome">Welcome Back,</h2>
          <div className="dash-actions">
            <button className="icon-btn">🔍</button>
            <button className="icon-btn notif">
              🔔
              <span className="notif-badge">3</span>
            </button>
            <div className="admin-profile">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80"
                alt="Admin"
              />
              <span>Admin</span>
              <span className="caret">▾</span>
            </div>
          </div>
        </header>
        <div className="dash-divider" />
        {renderContent()}
      </main>
    </div>
  )
}
