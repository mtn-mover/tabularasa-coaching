import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Coaching Services | Tabula Rasa Coaching',
  description: 'Professional coaching services including Executive Coaching, Professional Development, and Personal Transformation with Karen Florence.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/trc_service_hero_a.png"
            alt="Coaching Services"
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
                Coaching Services
              </h1>
              <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-3xl lg:mx-auto" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
                Tailored coaching services designed to meet you where you are and support you in achieving your goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {/* Organizational/Corporate Coaching */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl lg:text-4xl font-bold text-trc-gray-900 mb-6">
                  Organizational/Corporate Coaching
                </h2>
                <div className="space-y-4 text-lg text-trc-gray-700 leading-relaxed">
                  <p>
                    My corporate clients include some of the largest tech companies on the planet, such as Cisco, Samsara, and Ford. By the time an organization offers executive coaching to their leaders, those leaders have demonstrated the ability to be excellent independent contributors, and most likely good managers. Think about what makes a great leader: good communication, great decision making, independently motivated, thoughtful about risk taking, the ability to get people to follow them, and many others. These attributes rely on a common denominator: behavior. How a leader shows up, how she/he listens to the team, engages with the team, develops, and supports the team, is all based on personal behavior. Business decisions, strategy, risk taking, and forward visioning and movement are also dependent upon personal behavior.
                  </p>
                  <p>
                    In my 15 years of international executive leadership coaching, I have seen brilliant minds at work innovating and creating amazing processes and products. I have also seen brilliant minds create chaos within organizations. Not because they do not care about their teams, but because of their lack of self-awareness about what is driving their behavior. This is my area of expertise. In hindsight, we all know when we have handled a situation poorly. In my work with clients, I help clients recognize unhealthy reactions, identify what the triggers are that cause them, and then shift into a new way of responding. This is the kind of growth and development that can strengthen organizations and the people within them as they move forward to the next level.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
                  <Image
                    src="/images/trc_service_corp.png"
                    alt="Organizational/Corporate Coaching"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Psychosynthesis Counseling */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
                  <Image
                    src="/images/trc_service_psyco.png"
                    alt="Psychosynthesis Counseling"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
              <div className="order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-trc-gray-900 mb-6">
                  Psychosynthesis Counseling
                </h2>
                <div className="space-y-4 text-lg text-trc-gray-700 leading-relaxed">
                  <p>
                    Psychosynthesis is a psychology of hope, with its eye not only on history, but also on a purposeful future giving individuals the capacity to reorient their lives in the direction of meaning and values. Psychosynthesis has also been described as a psychology of the Self, in that the realms of human experience also include matters of soul and spirit, alongside physical and emotional experiences and thoughts, and mental processes. In weekly, one-hour sessions, I aid my clients in exploring challenges on all levels in order to bring balance and satisfaction in their lives. Gaining personal perspective into their own personality helps my client to see the "why" of their behavior and opens the door to well-informed decision making and life choices.
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Transformational Coaching */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl lg:text-4xl font-bold text-trc-gray-900 mb-6">
                  Personal Transformational Coaching
                </h2>
                <div className="space-y-4 text-lg text-trc-gray-700 leading-relaxed">
                  <p>
                    From the moment we take our first breath, we learn how to be in the world and the circumstances into which we are born. We are born into Earth School. Our challenge is to learn how to navigate our lives and circumstances in order to create the lives we want to live. Whether are we are born into affluence, poverty, or somewhere in between, no one gets out unscathed. The journey of our lives is filled with many bends and turns, many highs and lows, many hurts, and joys. We get the whole wonderful catastrophe whether we like it or not. In personal transformational coaching we embark on a journey of deep self-examination to transform your relationships, career, health, and spiritual life, so that you can begin to be aware of what you believe, how those beliefs influence how you show up in the world, and if your beliefs and behaviors enhance or detract from the life you want to live. When I work with clients, I offer explanations as to how we are hardwired to behave. My belief is, if we understand the way our brains are hardwired, we can let ourselves off the hook for many things we beat ourselves up over. This is a marvelous journey of self-discovery, which will boost your confidence, self-esteem, and life decision-making.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
                  <Image
                    src="/images/trc_service_personal.png"
                    alt="Personal Transformational Coaching"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
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
