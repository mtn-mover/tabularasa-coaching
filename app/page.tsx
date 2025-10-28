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
            src="/images/trc_coaching.png"
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 lg:pb-12">
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
                  src="/images/trc_coaching_2.png"
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
      <section id="services" className="py-20 lg:py-24 bg-gradient-to-b from-white via-trc-blue-50/30 to-white">
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
        </div>
      </section>

      {/* TRC Training Academy Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-trc-blue-50/30 to-white">
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
              <div className="space-y-4 text-lg text-trc-gray-700 leading-relaxed mb-8">
                <p>
                  Join our global community of professional coaches making a difference. Our program equips you with the tools and techniques to build your coaching practice, enhance your leadership skills, or experience deep personal growth—all through our proven remote coaching methodology.
                </p>
              </div>
              <Link
                href="https://tabularasa-coaching.vercel.app/training-academy"
                className="inline-block px-6 py-3 bg-trc-blue-600 text-white font-semibold rounded-lg hover:bg-trc-blue-700 transition-all duration-300 mb-6"
              >
                Explore Training Academy →
              </Link>
              <blockquote className="border-l-4 border-trc-blue-600 pl-6 py-2 italic text-lg text-trc-gray-600">
                "Your wisdom, experience, and calling converge here." — Karen
              </blockquote>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/trc_coaching_3.png"
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
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-trc-gray-900 mb-6" style={{whiteSpace: 'normal', wordBreak: 'normal'}}>
              What Clients Say
            </h2>
            <p className="text-xl text-trc-gray-600 max-w-3xl mx-auto leading-relaxed" style={{whiteSpace: 'normal', wordBreak: 'normal'}}>
              Real experiences from clients who have transformed their lives through coaching
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-trc-blue-500 to-trc-blue-600 rounded-2xl p-8 shadow-lg text-white">
              <div className="mb-6">
                <svg className="w-12 h-12 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                Karen's sessions were both therapeutic and practical. She helped me develop better leadership skills
                and become a more effective leader. Simply put, Karen is a godsend who helped make me a better leader,
                and for this I am forever grateful.
              </p>
              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold">Senior Regional Sales Manager</p>
                <p className="text-sm text-white/80">Cisco</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 shadow-lg text-white">
              <div className="mb-6">
                <svg className="w-12 h-12 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                Karen is a game changer that has helped make me a better leader and person. She is organized,
                thoughtful, and challenges you exactly when you need it. Her guidance has been instrumental
                in my professional and personal growth.
              </p>
              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold">People Operations</p>
                <p className="text-sm text-white/80">Google</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 shadow-lg text-white">
              <div className="mb-6">
                <svg className="w-12 h-12 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                Karen has helped me immeasurably. She is a great coach. My consulting practice has tripled
                within 6 months of starting to work with her. Her insights and support have been transformative
                for my business.
              </p>
              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold">Founding Partner</p>
                <p className="text-sm text-white/80">Sapiens Advisors</p>
              </div>
            </div>
          </div>

          {/* Client Organizations */}
          <div className="mt-16 text-center">
            <p className="text-sm font-semibold text-trc-gray-500 uppercase tracking-wide mb-6">
              Trusted by Professionals From
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-trc-gray-400">
              <span className="text-lg font-medium">Cisco</span>
              <span className="text-lg font-medium">Google</span>
              <span className="text-lg font-medium">BBDO Worldwide</span>
              <span className="text-lg font-medium">Ford</span>
              <span className="text-lg font-medium">Samsara</span>
              <span className="text-lg font-medium">Verkada</span>
              <span className="text-lg font-medium">Disney Channel</span>
              <span className="text-lg font-medium">State Farm</span>
            </div>
          </div>
        </div>
      </section>

      {/* Training Academy Teaser - MINIMAL */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-trc-gray-900 mb-4" style={{whiteSpace: 'normal', wordBreak: 'normal'}}>
            Interested in Becoming a Coach?
          </h3>
          <p className="text-lg text-trc-gray-600 mb-6 max-w-2xl mx-auto">
            Karen Florence also leads the TRC Training Academy, where she trains the next generation
            of professional coaches.
          </p>
          <a
            href="https://www.trctrainingacademy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-trc-gray-200 text-trc-gray-800 font-semibold rounded-lg hover:bg-trc-gray-300 transition-all duration-300"
          >
            Visit TRC Training Academy →
          </a>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-trc-blue-700 to-trc-blue-900"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
