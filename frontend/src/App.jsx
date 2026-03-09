import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignIn from './pages/SignIn'
import Verify from './pages/Verify'
import VendorDetail from './pages/VendorDetail'
import Services from './pages/Services'
import VendorDashboard from './pages/VendorDashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/vendor/details" element={<VendorDetail />} />
        <Route path="/vendor/services" element={<Services />} />
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
