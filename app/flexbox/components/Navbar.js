"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">MySite</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">About</a></li>
        <li><a href="#" className="hover:text-gray-300">Services</a></li>
        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" /> // X icon when open
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-blue-700 flex flex-col md:hidden">
          <li>
            <a href="#" className="block px-6 py-3 hover:bg-blue-800">Home</a>
          </li>
          <li>
            <a href="#" className="block px-6 py-3 hover:bg-blue-800">About</a>
          </li>
          <li>
            <a href="#" className="block px-6 py-3 hover:bg-blue-800">Services</a>
          </li>
          <li>
            <a href="#" className="block px-6 py-3 hover:bg-blue-800">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
