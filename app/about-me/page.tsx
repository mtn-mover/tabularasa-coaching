import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Me - Karen Florence | Tabula Rasa Coaching',
  description: 'Meet Karen Florence, CPC, CPRWC - Professional coach specializing in sustainable change through technical and adaptive approaches.',
};

export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trc-blue-600 to-trc-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Karen Florence</h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            Professional coach committed to your transformation and sustainable change
          </p>
        </div>
      </section>

      {/* About Karen Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-trc-blue-100 h-96">
                {/* Placeholder for Karen's image */}
                <div className="w-full h-full flex items-center justify-center text-trc-blue-600">
                  <p className="text-lg font-medium">Karen Florence Photo</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-trc-gray-900 mb-6">Your Coach</h2>
              <div className="space-y-4 text-lg text-trc-gray-700 leading-relaxed">
                <p className="font-semibold text-trc-blue-600">
                  CPC (Certified Professional Coach)<br />
                  CPRWC (Certified Professional Recovery and Wellness Coach)<br />
                  PC (Professional Coach)
                </p>
                <p className="text-xl font-medium text-trc-gray-900 italic">
                  "I believe in the resiliency of the human spirit."
                </p>
                <p>
                  Karen's approach centers on human resilience and the belief that individuals can overcome trauma
                  and hardship to become whole contributors. Her central question shifts the paradigm from
                  "What is wrong with me?" to "What happened to me? And how has that shaped my life?"
                </p>
                <p>
                  Her methodology involves creating a safe, non-judgmental space to help clients discover links
                  between past experiences and current behaviors, then evaluate whether these patterns enhance
                  or obstruct their desired life.
                </p>
                <p>
                  Karen combines technical expertise with adaptive strategies to create sustainable personal
                  and professional change. With an office in Malvern, PA and remote options available, she
                  works with clients worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Philosophy Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-trc-gray-900 mb-6">My Coaching Philosophy</h2>
            <p className="text-lg text-trc-gray-600 max-w-3xl mx-auto leading-relaxed">
              True transformation happens when we address both the technical skills and the adaptive mindsets
              that drive sustainable change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-trc-blue-50 to-trc-blue-100/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-trc-blue-100">
              <div className="w-20 h-20 bg-gradient-to-br from-trc-blue-500 to-trc-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-trc-gray-900 mb-4 text-center">
                Technical + Adaptive
              </h3>
              <p className="text-lg text-trc-gray-600 leading-relaxed text-center">
                Combining practical skills with deep adaptive work ensures that changes stick and growth continues
                long after our sessions end.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-trc-gray-900 mb-4 text-center">
                Resilience & Development
              </h3>
              <p className="text-lg text-trc-gray-600 leading-relaxed text-center">
                Your experiences have shaped you, but they don't define your future. We build on your inherent
                resilience to create new possibilities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-100">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-trc-gray-900 mb-4 text-center">
                Sustainable Change
              </h3>
              <p className="text-lg text-trc-gray-600 leading-relaxed text-center">
                Real transformation isn't about quick fixes. It's about creating lasting change through
                understanding and integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-trc-blue-600 to-trc-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a free sample session to experience my coaching approach firsthand.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-trc-blue-600 font-bold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl text-lg"
          >
            Book a Free Sample Session
          </Link>
        </div>
      </section>
    </div>
  );
}
