'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center py-1">
              <Image
                src="/images/logo.jpg"
                alt="Tabula Rasa Coaching"
                width={220}
                height={90}
                className="h-18 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-trc-gray-700 hover:text-trc-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about-me" className="text-trc-gray-700 hover:text-trc-blue-600 font-medium transition-colors">
              About Me
            </Link>
            <Link href="/services" className="text-trc-gray-700 hover:text-trc-blue-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/training-academy" className="text-trc-gray-700 hover:text-trc-blue-600 font-medium transition-colors">
              Training Academy
            </Link>
            <Link href="/contact" className="text-trc-gray-700 hover:text-trc-blue-600 font-medium transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-trc-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-trc-gray-700 hover:text-trc-blue-600 font-medium transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about-me"
                className="text-trc-gray-700 hover:text-trc-blue-600 font-medium transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </Link>
              <Link
                href="/services"
                className="text-trc-gray-700 hover:text-trc-blue-600 font-medium transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/training-academy"
                className="text-trc-gray-700 hover:text-trc-blue-600 font-medium transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Training Academy
              </Link>
              <Link
                href="/contact"
                className="text-trc-gray-700 hover:text-trc-blue-600 font-medium transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
