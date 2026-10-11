import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import logo from '../assets/logo.svg'

function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="h-[70px] w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between background-color: var(--bg)">

      <Link to="/" className="flex-shrink-0">
        <img src={logo} alt="Logo" className="h-17 w-auto" />
      </Link>

      <div className="hidden md:flex items-center gap-10 ml-auto">

        <ul className="flex items-center gap-10">
          <Link className="hover:text-[var(--text-hover)] transition" to="/">Home</Link>
          <Link className="hover:text-[var(--text-hover)] transition" to="/services">Services</Link>
          <Link className="hover:text-[var(--text-hover)] transition" to="/about">About us</Link>
        </ul>

            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact us
            </button>

      </div>

      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && (
        <div className="absolute top-[70px] left-0 w-full bg-gradient-to-r from-indigo-700 to-violet-500 p-6 md:hidden">
          <ul className="flex flex-col space-y-4 text-white text-lg">
            <Link onClick={() => setOpen(false)} to="/">Home</Link>
            <Link onClick={() => setOpen(false)} to="/about">About me</Link>
            <Link onClick={() => setOpen(false)} to="/services">Services</Link>

            <button className="bg-white text-gray-700 text-sm w-40 h-11 rounded-full">
              Book now
            </button>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
