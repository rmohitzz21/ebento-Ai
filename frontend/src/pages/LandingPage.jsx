import { useState } from 'react'
import { Link } from 'react-router-dom'

const serviceCategories = [
  { label: 'Catering', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=300&q=80' },
  { label: 'Decor & Styling', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&q=80' },
  { label: 'Entertainment & Music', img: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=300&q=80' },
  { label: 'Mehendi & Flower', img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&q=80' },
  { label: 'Photography', img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=300&q=80' },
]

const packages = [
  { title: 'Classic Mehendi Package', desc: 'Per-plate catering + décor + live music for an intimate mehendi.', location: 'C.G. Road, Ahmedabad', price: '₹499', unit: '/plate', rating: 4.5 },
  { title: 'Royal Wedding Feast', desc: 'Grand catering spread + premium décor + photography for weddings.', location: 'C.G. Road, Ahmedabad', price: '₹899', unit: '/plate', rating: 4.5 },
  { title: 'Birthday Bash Bundle', desc: 'Cakes, snacks & entertainment for kids or adult birthday parties.', location: 'C.G. Road, Ahmedabad', price: '₹399', unit: '/plate', rating: 4.8 },
  { title: 'Classic Mehendi Package', desc: 'Per-plate catering + décor + live music for an intimate mehendi.', location: 'C.G. Road, Ahmedabad', price: '₹499', unit: '/plate', rating: 4.5 },
  { title: 'Royal Wedding Feast', desc: 'Grand catering spread + premium décor + photography for weddings.', location: 'C.G. Road, Ahmedabad', price: '₹899', unit: '/plate', rating: 4.5 },
  { title: 'Birthday Bash Bundle', desc: 'Cakes, snacks & entertainment for kids or adult birthday parties.', location: 'C.G. Road, Ahmedabad', price: '₹399', unit: '/plate', rating: 4.8 },
]

const faqs = [
  'What is iBento?',
  'How does the per-plate pricing work?',
  'Are the vendors verified?',
  'Can I customize my event package?',
]

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const [email, setEmail] = useState('')

  return (
    <div className="landing">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">ibento</div>
        <ul className="navbar-links">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Packages</a></li>
        </ul>
        <div className="navbar-right">
          <span className="location-pill">📍 Ahmedabad</span>
          <Link to="/signin" className="btn-signin">Sign In</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>Celebrate better<br />with 🎊🎉 iBento</h1>
          <div className="hero-search">
            <input type="text" placeholder="🔍 Search" />
            <button className="btn-primary">Book Now</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80"
            alt="Wedding celebration"
          />
        </div>
      </section>

      {/* Services We Offer */}
      <section className="section services-section">
        <h2>Services We Offer</h2>
        <p className="section-sub">
          From intimate family functions to grand weddings and corporate events, iBento connects<br />
          you with trusted vendors for every occasion.
        </p>
        <button className="btn-outline">Check Services</button>
        <div className="services-grid">
          {serviceCategories.map((s, i) => (
            <div key={i} className="service-card">
              <img src={s.img} alt={s.label} />
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Inspiration */}
      <section className="section packages-section">
        <h2>Inspiration For Your First Event</h2>
        <p className="section-sub">
          From intimate family functions to grand weddings and corporate events, iBento connects you<br />
          with trusted vendors for every occasion.
        </p>
        <button className="btn-outline">View All Services</button>
        <div className="packages-grid">
          {packages.map((pkg, i) => (
            <div key={i} className="package-card">
              <div className="pkg-img-wrap">
                <img
                  src={`https://images.unsplash.com/photo-${i % 2 === 0 ? '1583391733956-3750e0ff4e8b' : '1519741497674-611481863552'}?w=400&q=80`}
                  alt={pkg.title}
                />
                <span className="pkg-rating">⭐ {pkg.rating}</span>
              </div>
              <div className="pkg-info">
                <h4>{pkg.title}</h4>
                <p>{pkg.desc}</p>
                <small>📍 {pkg.location}</small>
                <div className="pkg-footer">
                  <span className="pkg-price">{pkg.price}<small>{pkg.unit}</small></span>
                  <button className="btn-add">+ Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-overlay">
          <h2>Inspiration For Your First Event</h2>
          <p>From intimate family functions to grand weddings and corporate events, iBento<br />connects you with trusted vendors for every celebration.</p>
          <div className="cta-form">
            <input
              type="email"
              placeholder="Enter Your Mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button className="btn-primary">Stay Connected</button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section faqs-section">
        <h2>FAQs?</h2>
        <p className="section-sub">
          From intimate family functions to grand weddings and corporate events, iBento connects<br />
          you with trusted vendors for every occasion.
        </p>
        <div className="faqs-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <span>{faq}</span>
              <button className="faq-toggle">{openFaq === i ? '−' : '+'}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">ibento<sup>+</sup></div>
            <p className="footer-tagline">"Seamless Events, Transparent Pricing."</p>
            <div className="footer-contact">
              <p>✉ support@ibento.in</p>
              <p>📞 +91 98765-43210</p>
            </div>
            <p className="footer-desc">Every event deserves clarity and ease. With iBento, book verified vendors, compare packages, and celebrate stress-free.</p>
          </div>
          <div className="footer-links">
            <div>
              <h5>Quick Links</h5>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Packages</a></li>
              </ul>
            </div>
            <div>
              <h5>Support</h5>
              <ul>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
              <div className="social-icons">
                <span>f</span>
                <span>in</span>
                <span>▶</span>
                <span>𝕏</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 iBento. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Security</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
        <div className="footer-watermark">MAKE IT WITH</div>
        <div className="footer-jp">iBento(イベント)← Japanese word for "event". Your event, simplified.</div>
      </footer>
    </div>
  )
}
