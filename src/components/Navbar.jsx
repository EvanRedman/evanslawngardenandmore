
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const mobileLinkClass =
    "block text-white hover:text-[var(--text-hover)] transition";

  return (
    <nav className="relative z-50 h-[70px] w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between bg-[var(--maingreen)]">
      {/* Logo */}
      <Link to="/" className="flex-shrink-0">
        <img
          src={logo}
          alt="Evan's Lawn, Garden, and More"
          className="h-14 w-auto object-contain"
        />
      </Link>

      {/* Desktop navigation */}
      <div className="hidden md:flex items-center gap-10 ml-auto">
        <ul className="flex items-center gap-10 list-none p-0 m-0 text-white">
          <li>
            <Link
              className="hover:text-[var(--text-hover)] transition"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[var(--text-hover)] transition"
              to="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[var(--text-hover)] transition"
              to="/reviews"
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[var(--text-hover)] transition"
              to="/about"
            >
              About us
            </Link>
          </li>
        </ul>

        <button
          onClick={() => navigate("/contact")}
          className="inline-flex items-center gap-2 bg-[var(--secondarygreen)] hover:bg-[var(--hovergreen)] text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Contact us
        </button>
      </div>

      {/* Mobile menu toggle */}
      <button
        type="button"
        className="md:hidden text-white text-3xl leading-none"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? "×" : "☰"}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[var(--maingreen)] shadow-lg px-6 py-6 md:hidden">
          <ul className="flex flex-col items-start gap-5 list-none p-0 m-0 text-lg">
            <li>
              <Link
                onClick={() => setOpen(false)}
                className={mobileLinkClass}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpen(false)}
                className={mobileLinkClass}
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpen(false)}
                className={mobileLinkClass}
                to="/reviews"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpen(false)}
                className={mobileLinkClass}
                to="/about"
              >
                About us
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/contact");
                }}
                className="bg-[var(--secondarygreen)] hover:bg-[var(--hovergreen)] text-white font-semibold text-sm px-6 h-11 rounded-xl transition-colors"
              >
                Contact us
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
