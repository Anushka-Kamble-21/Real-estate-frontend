import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-wide">
          <span className="text-blue-600">RealEstate</span>
          <span className="text-gray-800">Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-lg font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/listings" className="hover:text-blue-600 transition">Properties</Link>
          <Link to="/projects" className="hover:text-blue-600 transition">Projects</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About Us</Link>
          <Link to="/inquiry" className="hover:text-blue-600 transition">Inquiry</Link>
        </div>

        {/* Desktop Buttons 
        <div className="hidden md:flex items-center gap-6">
          <button className="text-gray-700 hover:text-blue-600 transition font-medium">
            Login
          </button>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition font-semibold shadow-md">
            Register
          </button>
        </div> */}

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg py-4 px-6 space-y-4 text-gray-800 text-lg">

          <Link to="/" className="block hover:text-blue-600 transition" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/listings" className="block hover:text-blue-600 transition" onClick={() => setOpen(false)}>Properties</Link>
          <Link to="/projects" className="block hover:text-blue-600 transition" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/about" className="block hover:text-blue-600 transition" onClick={() => setOpen(false)}>About Us</Link>
          <Link to="/inquiry" className="block hover:text-blue-600 transition" onClick={() => setOpen(false)}>Inquiry</Link>

          <hr className="border-gray-300" />
          {/*
          <button className="block w-full text-left hover:text-blue-600 transition">Login</button>
          <button className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition font-semibold">
            Register
          </button> */}

        </div>
      )}
    </header>
  );
}
