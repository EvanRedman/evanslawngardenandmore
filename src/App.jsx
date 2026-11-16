import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceLawn from './pages/Services/LawnMaintenance'
import ServiceHome from './pages/Services/HomeCleaning'
import ServiceSeasonal from './pages/Services/SeasonalCare'
import ServiceHaul from './pages/Services/Hauling'
import Contact from './pages/Contact'
import Reviews from './pages/Reviews'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/lawncare" element={<ServiceLawn />} />
        <Route path="/services/home" element={<ServiceHome />} />
        <Route path="/services/seasonal" element={<ServiceSeasonal />} />
        <Route path="/services/haul" element={<ServiceHaul />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
