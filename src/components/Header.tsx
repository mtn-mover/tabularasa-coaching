'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-pink-500 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">Tabula Rasa Coaching</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-white hover:text-pink-100 font-medium transition-colors">
              About Karen
            </Link>
            <Link href="/#services" className="text-white hover:text-pink-100 font-medium transition-colors">
              Services
            </Link>
            <Link href="/#testimonials" className="text-white hover:text-pink-100 font-medium transition-colors">
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-trc-blue-600 to-trc-blue-700 text-white font-semibold rounded-lg hover:from-trc-blue-700 hover:to-trc-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-pink-600 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink-400">
            <div className="flex flex-col space-y-4">
              <Link
                href="/#about"
                className="text-white hover:text-pink-100 font-medium transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Karen
              </Link>
              <Link
                href="/#services"
                className="text-white hover:text-pink-100 font-medium transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#testimonials"
                className="text-white hover:text-pink-100 font-medium transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-trc-blue-600 to-trc-blue-700 text-white font-semibold rounded-lg text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
