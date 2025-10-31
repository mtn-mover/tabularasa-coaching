import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/trc_training_hero_2_d.png"
            alt="Professional coaching session"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
            priority
          />
        </div>

        {/* Dark overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/90 via-black/70 to-transparent z-10"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 lg:pb-6">
            <div className="text-left lg:text-center">
              <p className="text-xl lg:text-2xl text-white mb-4 tracking-wide" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}>
                Tabula Rasa Coaching
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 tracking-tight leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                Where the Technical and the Adaptive Come Together to Create Sustainable Change
              </h1>
              <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-3xl lg:mx-auto" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
                Professional 1:1 coaching with Karen Florence, CPC, CPRWC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section id="about" className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/trc_coaching_5_a.png"
                  alt="Professional coaching session"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-trc-gray-900 mb-8" style={{whiteSpace: 'normal', wordBreak: 'normal'}}>
                My Approach
              </h2>
              <div className="space-y-6 text-lg text-trc-gray-700 leading-relaxed">
                <p>
                  I believe in the resiliency of the human spirit. Human Beings can rise above the circumstances of their birth and overcome great trauma and hardship to become whole and resourceful contributors to our planet. Why some people soar because of their experiences and others get stuck for a lifetime has been the prevailing area of study of my life's journey, and informs the work I do with my clients.
                </p>
                <p>
                  The question is not "What is wrong with me?", the question is "What happened to me? And how has that shaped my life?". The answer to this question influences every day of your life, both personally and professionally.
                </p>
                <p>
                  The behavior we are experiencing today is always linked back to an experience in our past. My work is to help my clients discover that link, re-examine the beliefs that they have created, and evaluate if this behavior enhances their lives or creates a barrier to the life they want to live today.
                </p>
                <p>
                  I create a warm, safe, non-judgmental space to explore these important questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Services Section */}
      <section id="services" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-trc-gray-900 mb-6">
              Coaching Services
            </h2>
            <p className="text-xl text-trc-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tailored coaching services designed to meet you where you are and support you in achieving your goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Executive Coaching */}
            <div className="bg-gradient-to-br from-trc-blue-50 to-trc-blue-100/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-trc-blue-100">
              <div className="w-20 h-20 bg-gradient-to-br from-trc-blue-500 to-trc-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-trc-gray-900 mb-4 text-center">
                Executive Coaching
              </h3>
              <ul className="space-y-2.5 text-left">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-trc-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Leadership development and effectiveness</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-trc-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Executive presence and influence</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-trc-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Organizational coaching and team development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-trc-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Strategic thinking and decision-making</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-trc-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Managing complex workplace dynamics</span>
                </li>
              </ul>
            </div>

            {/* Career Coaching */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100">
              <div className="w-20 h-20 bg-gradient-to-br from-trc-gold-500 to-trc-gold-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-trc-gray-900 mb-4 text-center">
                Career Coaching
              </h3>
              <ul className="space-y-2.5 text-left">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Career transitions and reinvention</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Professional advancement strategies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Job search and interview preparation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Personal branding and networking</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Career clarity and goal setting</span>
                </li>
              </ul>
            </div>

            {/* Personal Coaching */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-100">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-trc-gray-900 mb-4 text-center">
                Personal Coaching
              </h3>
              <ul className="space-y-2.5 text-left">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Life transitions and major changes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Recovery and wellness coaching</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Personal growth and fulfillment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Work-life balance and integration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Building resilience and self-awareness</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-trc-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-trc-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* TRC Training Academy Section */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-bold text-trc-gray-900 mb-4">
                TRC Training Academy
              </h2>
              <p className="text-xl lg:text-2xl text-trc-blue-600 font-semibold mb-6">
                Where Wisdom and Experience Impacts Transformation
              </p>
              <h3 className="text-2xl font-bold text-trc-gray-900 mb-6">
                Transform Lives From Anywhere
              </h3>
              <div className="text-lg text-trc-gray-700 leading-relaxed mb-8">
                <p>
                  Join our global community of professional coaches making a difference. Our program equips you with the tools and techniques to build your coaching practice, enhance your leadership skills, or experience deep personal growth—all through our proven remote coaching methodology.
                </p>
              </div>
              <div className="mb-8">
                <Link
                  href="https://tabularasa-coaching.vercel.app/training-academy"
                  className="inline-block px-6 py-3 bg-trc-blue-600 text-white font-semibold rounded-lg hover:bg-trc-blue-700 transition-all duration-300"
                >
                  Explore Training Academy →
                </Link>
              </div>
              <blockquote className="border-l-4 border-trc-blue-600 pl-6 py-2 italic text-lg text-trc-gray-600 mt-0">
                "Your wisdom, experience, and calling converge here." — Karen
              </blockquote>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/trc_coaching_3a.png"
                  alt="TRC Training Academy"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-trc-gray-900 mb-6" style={{whiteSpace: 'normal', wordBreak: 'normal'}}>
              Recent Testimonials
            </h2>
          </div>

          <div className="max-w-5xl mx-auto mb-20">
            <div className="bg-white border-2 border-trc-blue-200 rounded-2xl p-10 lg:p-14 shadow-xl relative">
              <div className="absolute -top-8 left-10">
                <svg className="w-16 h-16 text-trc-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="mt-4">
                <p className="text-xl lg:text-2xl text-trc-gray-700 leading-relaxed mb-8 font-light italic">
                  Karen came highly recommended by a couple of my peers after I shared with them some professional challenges I was trying to overcome.
                </p>
                <p className="text-xl lg:text-2xl text-trc-gray-700 leading-relaxed mb-8 font-light italic">
                  Simply put, Karen is a godsend who helped make me a better leader and for this, I am forever grateful. I looked forward to each of our sessions which sometimes felt like therapy, but better.
                </p>
                <p className="text-xl lg:text-2xl text-trc-gray-700 leading-relaxed mb-8 font-light italic">
                  When I think of my experience with Karen <span className="font-semibold text-trc-blue-600">"small changes can make a big difference"</span> comes to mind. Highly recommend.
                </p>
                <div className="flex items-center mt-10 pt-8 border-t-2 border-trc-gray-200">
                  <div>
                    <p className="text-lg font-bold text-trc-gray-900">Nikki C.</p>
                    <p className="text-base text-trc-gray-600">Senior Regional Sales Manager at Cisco</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Organizations */}
          <div className="text-center overflow-x-auto">
            <p className="text-sm font-semibold text-trc-gray-500 uppercase tracking-wide mb-12">
              Trusted by Professionals From
            </p>
            <div className="flex justify-center items-center gap-x-12 lg:gap-x-16 min-w-max mx-auto px-4">
              <Image
                src="/images/Cisco-logo-4.png"
                alt="Cisco"
                width={160}
                height={64}
                className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/bbdo_worldwide_logo.jpeg"
                alt="BBDO Worldwide"
                width={160}
                height={64}
                className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/ford-logo.jpeg"
                alt="Ford"
                width={160}
                height={64}
                className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/samsara_logo.png"
                alt="Samsara"
                width={160}
                height={64}
                className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/Verkada-Logo-300x91.png"
                alt="Verkada"
                width={160}
                height={64}
                className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/disney-channel-logo.png"
                alt="Disney Channel"
                width={160}
                height={64}
                className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/statefarm_logo.png"
                alt="State Farm"
                width={160}
                height={64}
                className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/trc_coaching_cta.png"
            alt="Coaching session background"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)', whiteSpace: 'normal', wordBreak: 'normal'}}>
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-xl lg:text-2xl text-white max-w-4xl mx-auto mb-8 leading-relaxed" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
              Take the first step toward lasting change. Schedule a free consultation to discover
              how coaching can help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-trc-blue-600 font-bold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl text-lg"
            >
              Book a Free Sample Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
