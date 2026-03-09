import { useState } from 'react'

export default function AddServiceModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    title: '', price: '', location: '', description: '', image: null,
  })
  const [dragOver, setDragOver] = useState(false)

  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }))

  const handleFile = (file) => {
    if (file) set('image', file)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    handleFile(e.dataTransfer.files[0])
  }

  const handleSubmit = () => {
    if (!form.title || !form.price || !form.location) return
    onAdd(form)
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <h3 className="modal-title">Add New Service</h3>

        <div className="modal-grid">
          <div className="modal-field">
            <label>Service Title <span className="req">*</span></label>
            <input
              placeholder="e.g., Wedding Photography Package"
              value={form.title}
              onChange={e => set('title', e.target.value)}
            />
          </div>
          <div className="modal-field">
            <label>Price (₹) <span className="req">*</span></label>
            <input
              placeholder="25000"
              type="number"
              value={form.price}
              onChange={e => set('price', e.target.value)}
            />
          </div>
          <div className="modal-field">
            <label>Location <span className="req">*</span></label>
            <input
              placeholder="Ahmedabad"
              value={form.location}
              onChange={e => set('location', e.target.value)}
            />
          </div>
          <div className="modal-field">
            <label>Description</label>
            <input
              placeholder="What's included in this service..."
              value={form.description}
              onChange={e => set('description', e.target.value)}
            />
          </div>
        </div>

        <div className="modal-field" style={{ marginTop: 8 }}>
          <label>Service image</label>
          <div
            className={`upload-zone ${dragOver ? 'drag-over' : ''}`}
            onDragOver={e => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-input').click()}
          >
            <input
              id="file-input"
              type="file"
              accept="image/png, image/jpeg"
              style={{ display: 'none' }}
              onChange={e => handleFile(e.target.files[0])}
            />
            {form.image ? (
              <p className="upload-filename">✅ {form.image.name}</p>
            ) : (
              <>
                <div className="upload-icon">↑</div>
                <p className="upload-label">Click to upload or drag and drop</p>
                <p className="upload-hint">PNG, JPG up to 10MB</p>
              </>
            )}
          </div>
        </div>

        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-add-service" onClick={handleSubmit}>Add Service</button>
        </div>
      </div>
    </div>
  )
}
