const features = [
  {
    title: 'Intelligence',
    description: 'Data-driven decision-making for manufacturing excellence',
    details: [
      'Machine learning algorithms',
      'Predictive analytics',
      'Real-time optimization',
      'Automated insights',
    ],
  },
  {
    title: 'Integration',
    description: 'A platform that connects vendor, client, and shop-floor systems',
    details: [
      'SAP and Oracle compatible',
      'Tally integration',
      'API-first architecture',
      'Custom connectors',
    ],
  },
  {
    title: 'Innovation',
    description: 'Industry 4.0 technology built for Indian and global manufacturing environments',
    details: [
      'IoT sensor integration',
      'Cloud-native platform',
      'Edge computing support',
      'Continuous updates',
    ],
  },
  {
    title: 'Impact',
    description: 'Operational improvements that are measured, tracked, and repeatable',
    details: [
      '40% cost reduction',
      '30% efficiency gains',
      '99.9% accuracy',
      'Measurable ROI',
    ],
  },
];

export default function Features() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Manufacturing Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-400">Four pillars of transformation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-5 leading-relaxed">{feature.description}</p>

                <ul className="space-y-2 text-gray-300">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="text-sm">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
