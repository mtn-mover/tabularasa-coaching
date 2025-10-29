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
      <section className="relative h-[600px] lg:h-[700px] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/karen_hero.jpg"
            alt="Karen Florence"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
            priority
          />
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-trc-blue-900/70 via-trc-blue-800/60 to-trc-blue-900/70 z-10"></div>

        {/* Decorative dot pattern overlay */}
        <div className="absolute inset-0 opacity-10 z-20" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="relative z-30 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
              Meet Karen Florence
            </h1>
            <p className="text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
              Master Coach, Founder of TRC Training Academy, and Your Guide to Transformational Impact
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content Section - Full Width */}
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6 text-lg text-trc-gray-700 leading-relaxed">
              <p>
                I am a <span className="font-semibold text-trc-blue-600">Certified Professional Coach</span> and founder of <span className="font-semibold text-trc-blue-600">Tabula Rasa Coaching</span>, a coaching firm that specializes in International Executive Transformational Coaching for individuals as well as organizations. I am also a Psychosynthesis Counselor with both a virtual and in-person private practice in Malvern, Pennsylvania.
              </p>

              {/* Highlighted Quote Box */}
              <div className="bg-gradient-to-br from-trc-blue-50 to-trc-blue-100/50 border-l-4 border-trc-blue-600 rounded-lg p-6 my-8">
                <p className="text-xl italic text-trc-gray-800 font-medium">
                  "I am passionate about helping others answer the questions that matter."
                </p>
              </div>

              <p>
                I was trained at Coaching for Transformation, a coaching school accredited by the International Coaching Federation. I hold certificates in Executive Career Coaching, Organizational Coaching, Transformational Coaching, and Spirituality Based Coaching. I hold a certificate in Immunity to Change from Harvard University and Minds at Work. In addition I recently acquired a certificate for Executive Presence and Influence from Wharton School of Business at the University of Pennsylvania. Tabula Rasa Coaching offers coach training, education, and peer support to active coaches and coaches wishing to build their practices and broaden their skills and tools through classes, workshops, and one-on-one mentoring.
              </p>

              <p>
                I am also an accredited recovery-to-wellness coach, working with people struggling with chronic illness and addictions. I served as SVP and global head of marketing for Foundation for Recovery to Wellness, a coaching school based in London for 2 years.
              </p>

              <p>
                As an International Executive Transformational Coach, I work with every level of the organizational chart in companies around the world – coaching, mentoring, and consulting. I am a Cisco certified coach and have worked with over 100 Cisco leaders around the globe. Other companies I work with include Cisco-Meraki, Samsara, Google, Pierce Global Promotions, Pinnacle Foods, GPIC, Jaguar Land Rover, The Disney Channel, BBDO Russia, New York Life, The St. Croix Foundation, Volvo Italia, Prudential Life, Intel and The Learning Channel among others, including several startups in Silicon Valley.
              </p>

              <p>
                With a background of over 20 years in luxury interior design sales to the trade, I reinvented myself to follow my passion of helping others see what is possible in their lives. While working full time, I returned to school in New York City to become a Certified Professional Coach. After graduation I continued to expand my coaching tool kit by adding career coaching, organizational coaching and spirituality coaching to my practice. Within my first year of practice, I took my practice international with clients in the UK, Russia, France, Turkey, Canada, and Italy. Today I work with clients all over the globe, including the Middle East.
              </p>

              <p>
                I am a long-time student of neuroscience and behavioral psychology. I earned a certificate from Queensland University, Australia, in the Science of Everyday Thinking. Understanding how the brain works is influential in removing many blocks and obstacles for clients and teams as they move forward.
              </p>

              <p>
                In addition, I am a Reiki Master/Teacher/Practitioner. I am Hospice certified to provide end of life palliative care with an emphasis on cancer patients. I am an experienced workshop facilitator, public speaker, columnist and radio show host.
              </p>
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
            I believe that the second half of life holds our greatest potential for impact. When we combine our accumulated wisdom with our soul's true calling, we don't just change careers—we transform lives, starting with our own.
          </blockquote>

          <p className="text-xl text-white font-semibold">
            — Karen Florence, Founder of TRC Training Academy
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
