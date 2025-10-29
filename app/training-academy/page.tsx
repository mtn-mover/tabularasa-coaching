import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'TRC Training Academy | Professional Coach Certification',
  description: 'Professional coach certification programs led by Karen Florence. Learn more about the TRC Training Academy.',
};

export default function TrainingAcademyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/trc_training_hero.png"
            alt="TRC Training Academy"
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
                TRC Training Academy
              </h1>
              <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-3xl lg:mx-auto" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
                Professional coach certification programs for aspiring coaches
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-trc-gray-900 mb-6">
              Interested in Becoming a Coach?
            </h2>
            <p className="text-xl text-trc-gray-600 leading-relaxed mb-8">
              Karen Florence also leads the TRC Training Academy, where she trains the next generation
              of professional coaches through comprehensive certification programs.
            </p>
          </div>

          <div className="bg-gradient-to-br from-trc-blue-50 to-trc-blue-100/50 rounded-2xl p-8 lg:p-12 shadow-xl border border-trc-blue-200">
            <h3 className="text-2xl font-bold text-trc-gray-900 mb-6 text-center">
              TRC Training Academy Programs
            </h3>
            <div className="space-y-4 text-lg text-trc-gray-700 leading-relaxed mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-trc-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Comprehensive coach certification programs</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-trc-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Professional development for aspiring coaches</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-trc-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Training grounded in Psychosynthesis methodology</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-trc-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Expert instruction from Karen Florence and certified trainers</span>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://www.trctrainingacademy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-trc-blue-600 to-trc-blue-700 text-white font-bold rounded-lg hover:from-trc-blue-700 hover:to-trc-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Visit TRC Training Academy Website →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Distinction Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-trc-gray-900 mb-4">
                1:1 Coaching Services
              </h3>
              <p className="text-lg text-trc-gray-600 leading-relaxed mb-4">
                Work directly with Karen Florence for personalized coaching in:
              </p>
              <ul className="space-y-2 text-trc-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-trc-blue-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Executive Coaching
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-trc-blue-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professional Development
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-trc-blue-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personal Transformation
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/services"
                  className="text-trc-blue-600 font-semibold hover:text-trc-blue-700"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-trc-gray-900 mb-4">
                Coach Training Programs
              </h3>
              <p className="text-lg text-trc-gray-600 leading-relaxed mb-4">
                Join TRC Training Academy for comprehensive coach certification:
              </p>
              <ul className="space-y-2 text-trc-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professional Coach Certification
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced Training Programs
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mentorship and Supervision
                </li>
              </ul>
              <div className="mt-6">
                <a
                  href="https://www.trctrainingacademy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 font-semibold hover:text-orange-700"
                >
                  Visit Academy →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-trc-blue-600 to-trc-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Questions About Our Programs?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us to learn more about 1:1 coaching or coach training opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-trc-blue-600 font-bold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
