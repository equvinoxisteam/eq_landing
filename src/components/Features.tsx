import { Brain, Link2, Lightbulb, Target } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Intelligence',
    description: 'AI-powered decision-making for manufacturing excellence',
    details: [
      'Machine learning algorithms',
      'Predictive analytics',
      'Real-time optimization',
      'Automated insights',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Link2,
    title: 'Integration',
    description: 'Seamless platform that connects all vendor and client systems',
    details: [
      'SAP & Oracle compatible',
      'Tally integration',
      'API-first architecture',
      'Custom connectors',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Latest Industry 4.0 technology built for Indian/global environments',
    details: [
      'IoT sensor integration',
      'Cloud-native platform',
      'Edge computing support',
      'Continuous updates',
    ],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'Real operational improvements—measured, tracked, and repeated',
    details: [
      '40% cost reduction',
      '30% efficiency gains',
      '99.9% accuracy',
      'Guaranteed ROI',
    ],
    color: 'from-green-500 to-teal-500',
  },
];

export default function Features() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Manufacturing Excellence</span>
            </h2>
            <p className="text-xl text-gray-400">Four pillars of transformation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-r ${feature.color}`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-400 mb-4">{feature.description}</p>

                      <ul className="space-y-2">
                        {feature.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-300">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color}`} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
