import { Target, Users, Zap, Award } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Transform Indian manufacturing through intelligent automation and Industry 4.0 solutions.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your success is our success. We build lasting partnerships, not just transactions.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Constantly pushing boundaries with cutting-edge AI and manufacturing technology.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering world-class quality in every product and service.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20 bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transforming{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Manufacturing
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              We're building the future of Indian manufacturing with AI-powered solutions that make
              Industry 4.0 accessible to every manufacturer.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-300 mb-6">
                  Founded in 2025, Equvinoxis was born from a simple observation: Indian manufacturers had world-class capability but lacked the digital tools to compete globally.
                </p>
                <p className="text-gray-300 mb-6">
                  Our founders, veterans of both manufacturing and technology, saw an opportunity to bridge this gap. They envisioned a platform that could bring AI, automation, and Industry 4.0 capabilities to manufacturers of all sizes.
                </p>
                <p className="text-gray-300">
                  Today, we serve over 100 manufacturers across India, processing millions of parts and driving real operational improvements through intelligent automation.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-blue-400 mb-2">AI-Driven</div>
                    <div className="text-sm text-gray-400">Smart automation solutions</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">Global Ready</div>
                    <div className="text-sm text-gray-400">Manufacturing with international standards</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-green-400 mb-2">Eco-Friendly</div>
                    <div className="text-sm text-gray-400">Sustainable and efficient operations</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">Trusted</div>
                    <div className="text-sm text-gray-400">By leading Indian manufacturers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <Icon className="w-10 h-10 text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
