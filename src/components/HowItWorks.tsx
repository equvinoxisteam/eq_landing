import { Brain, Code2, Database, Rocket, Network, Sparkles } from 'lucide-react';

const offerings = [
  {
    icon: Brain,
    title: 'Enigma AI',
    subtitle: 'Intelligent CNC Matching',
    description: 'AI-powered platform that matches your CNC requirements with the perfect manufacturing partners in 60 seconds. Zero commission, 99.9% accuracy.',
    features: ['Instant partner matching', 'Real-time capacity tracking', 'Quality assurance'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Network,
    title: 'Indianet',
    subtitle: 'Connected Manufacturing',
    description: 'End-to-end supply chain platform connecting raw materials, machines, logistics, and compliance in one integrated ecosystem.',
    features: ['Verified suppliers', 'Real-time tracking', 'Compliance management'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'MemoryX AI',
    subtitle: 'Intelligence Engine',
    description: 'AI that learns from every operation to provide predictive insights, optimize processes, and drive continuous improvement.',
    features: ['Predictive maintenance', 'Quality optimization', 'Cost reduction'],
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Code2,
    title: 'Custom Software Solutions',
    subtitle: 'Built for You',
    description: 'Bespoke AI-powered software tailored to your unique manufacturing challenges. We build what you need, exactly how you need it.',
    features: ['Custom AI development', 'System integration', 'Technology consulting'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Database,
    title: 'Data Research & Insights',
    subtitle: 'Turn Data into Action',
    description: 'Deep analysis of your manufacturing data to uncover patterns, identify inefficiencies, and provide actionable recommendations.',
    features: ['Manufacturing analytics', 'Market intelligence', 'Pattern recognition'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Rocket,
    title: 'API Integration',
    subtitle: 'Seamless Connectivity',
    description: 'RESTful APIs for all our products, enabling seamless integration with your existing systems and workflows.',
    features: ['RESTful APIs', 'Webhook support', 'Comprehensive docs'],
    color: 'from-pink-500 to-rose-500',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-400">Products, custom software, and services that power modern manufacturing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <div key={index} className="relative group">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 h-full flex flex-col">
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${offering.color} blur-xl opacity-50 group-hover:opacity-70 transition-opacity`} />
                      <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-r ${offering.color}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-1">{offering.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{offering.subtitle}</p>
                    <p className="text-gray-400 mb-4 flex-grow">{offering.description}</p>

                    <div className="space-y-2">
                      {offering.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${offering.color}`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Whether you need one of our products, a custom solution, or research services, we're here to help transform your manufacturing operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8008030203"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Call Us
              </a>
              <a
                href="/contact"
                className="border-2 border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-900"
              >
                Request Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
