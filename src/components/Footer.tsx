import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-trc-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Tabula Rasa Coaching</h3>
            <p className="text-trc-gray-300 leading-relaxed">
              Where the Technical and the Adaptive Come Together to Create Sustainable Change
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-trc-gray-300 hover:text-white transition-colors">
                  About Karen
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-trc-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-trc-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-trc-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-trc-gray-300">
              <li>
                <a href="mailto:karen@tabularasacoaching.com" className="hover:text-white transition-colors">
                  karen@tabularasacoaching.com
                </a>
              </li>
              <li>
                <a href="tel:+16102284145" className="hover:text-white transition-colors">
                  +1 (610) 228-4145
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-trc-gray-700 mt-8 pt-8 text-center text-trc-gray-400">
          <p>&copy; {new Date().getFullYear()} Tabula Rasa Coaching. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Professional coaching services with Karen Florence, CPC, CPRWC
          </p>
        </div>
      </div>
    </footer>
  );
}
