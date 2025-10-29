'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trc-blue-700 via-trc-blue-800 to-trc-blue-900 text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">Begin Your Journey</h1>
          <p className="text-xl lg:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
            Take the first step toward discovering your soul's work. We're here to guide you on your transformation path.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-trc-gray-900 mb-4 text-center">
              Schedule Your Consultation
            </h2>
            <p className="text-lg text-trc-gray-600 mb-8 text-center">
              Complete the form below and we'll connect with you within 24 hours to discuss your coaching journey.
            </p>

            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-trc-gray-900 mb-4">Thank You!</h3>
                <p className="text-lg text-trc-gray-600 mb-6">
                  Your message has been received. We'll be in touch with you shortly to schedule your consultation.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="px-6 py-3 bg-trc-blue-600 text-white font-semibold rounded-lg hover:bg-trc-blue-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-trc-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trc-blue-500 focus:border-transparent transition-all text-trc-gray-900"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-trc-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trc-blue-500 focus:border-transparent transition-all text-trc-gray-900"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-trc-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trc-blue-500 focus:border-transparent transition-all text-trc-gray-900"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-trc-gray-900 mb-2">
                    Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trc-blue-500 focus:border-transparent transition-all text-trc-gray-900"
                  >
                    <option value="">Select an option...</option>
                    <option value="professional-coach-certification">Professional Coach Certification</option>
                    <option value="general-consultation">General Consultation</option>
                    <option value="more-information">More Information</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-trc-gray-900 mb-2">
                    Tell Us About Your Journey
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trc-blue-500 focus:border-transparent transition-all text-trc-gray-900"
                    placeholder="Share your goals, challenges, or what brings you here..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-trc-blue-600 to-trc-blue-700 text-white font-bold rounded-lg hover:from-trc-blue-700 hover:to-trc-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                <p className="text-xs text-trc-gray-500 text-center pt-2">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-trc-blue-600 hover:underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-trc-blue-600 hover:underline">
                    Terms of Service
                  </a>{' '}
                  apply.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/trc_coaching_cta.png"
            alt="Contact background"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70 z-10"></div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
              Contact us directly via email or phone to schedule your consultation and take the first step toward discovering your soul's work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-trc-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-trc-gray-900 mb-1">Email</h3>
                  <a href="mailto:karen@tabularasacoaching.com" className="text-trc-blue-600 hover:text-trc-blue-700 break-words">
                    karen@tabularasacoaching.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-trc-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-trc-gray-900 mb-1">Phone</h3>
                  <a href="tel:+16102284145" className="text-trc-blue-600 hover:text-trc-blue-700">
                    +1 610 228 4145
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
