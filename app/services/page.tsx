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
      <section className="bg-gradient-to-r from-trc-blue-600 to-trc-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Coaching Services</h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            Tailored coaching services designed to meet you where you are and support you in achieving your goals
          </p>
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
                {/* Image placeholder - will be added */}
                <div className="bg-trc-blue-100 rounded-2xl h-[400px] lg:h-[500px] flex items-center justify-center">
                  <p className="text-trc-gray-400 text-lg">Image: Organizational Coaching</p>
                </div>
              </div>
            </div>

            {/* Psychosynthesis Counseling */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                {/* Image placeholder - will be added */}
                <div className="bg-trc-gold-100 rounded-2xl h-[400px] lg:h-[500px] flex items-center justify-center">
                  <p className="text-trc-gray-400 text-lg">Image: Psychosynthesis Counseling</p>
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
                {/* Image placeholder - will be added */}
                <div className="bg-teal-100 rounded-2xl h-[400px] lg:h-[500px] flex items-center justify-center">
                  <p className="text-trc-gray-400 text-lg">Image: Personal Transformation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Organizations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-trc-blue-600 to-trc-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book a free sample session to discover which coaching service is right for you.
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
