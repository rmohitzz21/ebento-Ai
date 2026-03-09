import { useState } from 'react'
import AddServiceModal from './AddServiceModal'

const initialServices = [
  {
    id: 1,
    title: 'Photography Package',
    price: '₹45,000',
    location: 'Mumbai',
    description: 'Full day coverage, 500+ edited photos, online gallery',
    bookings: 18,
    rating: 4.8,
    status: 'active',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80',
  },
  {
    id: 2,
    title: 'Photography Package',
    price: '₹45,000',
    location: 'Mumbai',
    description: 'Full day coverage, 500+ edited photos, online gallery',
    bookings: 18,
    rating: 4.8,
    status: 'active',
    img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&q=80',
  },
  {
    id: 3,
    title: 'Photography Package',
    price: '₹45,000',
    location: 'Mumbai',
    description: 'Full day coverage, 500+ edited photos, online gallery',
    bookings: 18,
    rating: 4.8,
    status: 'active',
    img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80',
  },
]

export default function DashboardServices() {
  const [services, setServices] = useState(initialServices)
  const [showModal, setShowModal] = useState(false)

  const handleAdd = (form) => {
    setServices(prev => [
      ...prev,
      {
        id: Date.now(),
        title: form.title,
        price: `₹${Number(form.price).toLocaleString('en-IN')}`,
        location: form.location,
        description: form.description || 'No description provided.',
        bookings: 0,
        rating: 0,
        status: 'active',
        img: form.image ? URL.createObjectURL(form.image) : 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80',
      },
    ])
  }

  const handleDelete = (id) => {
    setServices(prev => prev.filter(s => s.id !== id))
  }

  return (
    <div className="ds-container">
      <div className="ds-header">
        <div>
          <h2 className="ds-title">My Services</h2>
          <p className="ds-sub">Manage your service listings</p>
        </div>
        <button className="btn-add-svc" onClick={() => setShowModal(true)}>
          + Add Service
        </button>
      </div>

      <div className="svc-grid">
        {services.map(svc => (
          <div key={svc.id} className="svc-card">
            <div className="svc-img-wrap">
              <img src={svc.img} alt={svc.title} />
              <span className={`svc-badge ${svc.status}`}>{svc.status}</span>
            </div>
            <div className="svc-info">
              <div className="svc-info-top">
                <h4>{svc.title}</h4>
                <div className="svc-actions">
                  <button className="icon-action" title="Edit">✏️</button>
                  <button className="icon-action" title="Delete" onClick={() => handleDelete(svc.id)}>🗑️</button>
                </div>
              </div>
              <div className="svc-price">{svc.price}</div>
              <div className="svc-location">📍 {svc.location}</div>
              <p className="svc-desc">{svc.description}</p>
              <div className="svc-footer">
                <span className="svc-bookings">📋 {svc.bookings} bookings</span>
                {svc.rating > 0 && <span className="svc-rating">⭐ {svc.rating}</span>}
              </div>
            </div>
          </div>
        ))}

        {/* Add New Service card */}
        <div className="svc-card svc-add-card" onClick={() => setShowModal(true)}>
          <div className="add-card-inner">
            <span className="add-card-icon">+</span>
            <span className="add-card-label">Add New Service</span>
          </div>
        </div>
      </div>

      {showModal && (
        <AddServiceModal onClose={() => setShowModal(false)} onAdd={handleAdd} />
      )}
    </div>
  )
}
