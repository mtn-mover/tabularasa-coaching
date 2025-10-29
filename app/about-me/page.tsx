import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Me - Karen Florence | Tabula Rasa Coaching',
  description: 'Meet Karen Florence, CPC, CPRWC - Master Coach and Founder specializing in transformational coaching through technical and adaptive approaches.',
};

export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-trc-blue-600 via-trc-blue-700 to-trc-blue-800 text-white py-24 lg:py-32 overflow-hidden">
        {/* Decorative dot pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
            Meet Karen Florence
          </h1>
          <p className="text-2xl lg:text-3xl text-white/95 max-w-4xl mx-auto font-semibold" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.2)'}}>
            Master Coach, Founder of TRC Training Academy, and Your Guide to Transformational Impact
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/karen_new.jpg"
                  alt="Karen Florence - Professional Coach"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Gradient overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-trc-blue-900/20 to-transparent"></div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div className="space-y-6 text-lg text-trc-gray-700 leading-relaxed">
                <p>
                  Karen Florence is a <span className="font-semibold text-trc-blue-600">Certified Professional Coach (CPC)</span>, <span className="font-semibold text-trc-blue-600">Certified Professional Recovery and Wellness Coach (CPRWC)</span>, and <span className="font-semibold text-trc-blue-600">Professional Coach (PC)</span> with a passion for helping individuals unlock their full potential and create lasting transformation.
                </p>

                <p>
                  With years of experience coaching executives, professionals, and individuals through significant life transitions, Karen has developed a unique approach that bridges the gap between technical skills and adaptive mindsets—where sustainable change truly happens.
                </p>

                {/* Highlighted Quote Box */}
                <div className="bg-gradient-to-br from-trc-blue-50 to-trc-blue-100/50 border-l-4 border-trc-blue-600 rounded-lg p-6 my-8">
                  <p className="text-xl italic text-trc-gray-800 font-medium">
                    "I believe in the resiliency of the human spirit. Human Beings can rise above the circumstances of their birth and overcome great trauma and hardship to become whole and resourceful contributors to our planet."
                  </p>
                </div>

                <p>
                  Karen's coaching philosophy centers on a fundamental shift in perspective: moving from "What is wrong with me?" to "What happened to me? And how has that shaped my life?" This paradigm shift creates space for deep exploration, understanding, and ultimately, transformation.
                </p>

                <p>
                  Her methodology involves creating a warm, safe, non-judgmental space where clients can discover the links between past experiences and current behaviors, then evaluate whether these patterns enhance or obstruct their desired life. Through this process, clients develop resilience, self-awareness, and the tools needed for sustainable personal and professional growth.
                </p>

                <p>
                  As the founder of <span className="font-semibold text-trc-blue-600">TRC Training Academy</span>, Karen also trains the next generation of professional coaches, sharing her expertise and passion for transformational coaching with aspiring practitioners worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact & Recognition Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-gray-50 via-gray-100/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-trc-gray-900 mb-6">
              Global Impact & Recognition
            </h2>
            <p className="text-xl text-trc-gray-600 max-w-3xl mx-auto leading-relaxed">
              Karen's expertise and dedication have earned recognition across industries and continents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* International Workshops */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-trc-blue-600">
              <div className="w-20 h-20 bg-gradient-to-br from-trc-blue-500 to-trc-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-trc-gray-900 mb-4 text-center">
                International Workshops
              </h3>
              <p className="text-lg text-trc-gray-600 leading-relaxed text-center">
                Leading transformational coaching workshops and training programs for professionals across the globe
              </p>
            </div>

            {/* Elite Clientele */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-trc-gold-500">
              <div className="w-20 h-20 bg-gradient-to-br from-trc-gold-500 to-trc-gold-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-trc-gray-900 mb-4 text-center">
                Elite Clientele
              </h3>
              <p className="text-lg text-trc-gray-600 leading-relaxed text-center">
                Trusted by senior executives and professionals from Fortune 500 companies and leading organizations
              </p>
            </div>

            {/* Corporate Excellence */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-teal-500">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-trc-gray-900 mb-4 text-center">
                Corporate Excellence
              </h3>
              <p className="text-lg text-trc-gray-600 leading-relaxed text-center">
                Partnering with organizations like Cisco, Google, Ford, and Disney to develop exceptional leaders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-trc-blue-700 via-trc-blue-800 to-trc-blue-900"></div>

        {/* Decorative dot pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <svg className="w-20 h-20 text-white/30 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <blockquote className="text-2xl lg:text-3xl text-white font-light italic leading-relaxed mb-8" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.3)'}}>
            When I think of my experience with Karen, "small changes can make a big difference" comes to mind. She helped me discover that the behavior we experience today is always linked back to an experience in our past. Through her guidance, I learned to re-examine the beliefs I had created and evaluate whether they enhance my life or create barriers to the life I want to live.
          </blockquote>

          <p className="text-xl text-white/90 font-semibold">
            — Client Testimonial
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60 z-10"></div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
            Ready to Begin Your<br />Transformation Journey?
          </h2>
          <p className="text-xl lg:text-2xl text-white max-w-3xl mx-auto mb-10 leading-relaxed" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
            Take the first step toward lasting change. Schedule a free consultation to discover how coaching can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-white text-trc-blue-600 font-bold text-lg rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
