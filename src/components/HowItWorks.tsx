import { Brain, Code2, Network, Box } from 'lucide-react';
import { PRODUCT_URLS } from '../constants/site';

const offerings = [
  {
    icon: Brain,
    title: 'Enigma AI',
    subtitle: 'CNC Partner Matching',
    description:
      'Match CNC requirements with the right manufacturing partners in about 60 seconds. Cut sourcing time, reduce commission costs, and connect with verified capabilities.',
    features: ['60-second partner matching', 'Zero commission', 'Verified manufacturer network'],
    color: 'from-blue-500 to-cyan-500',
    href: PRODUCT_URLS.enigma,
  },
  {
    icon: Network,
    title: 'Indianet',
    subtitle: 'Connected Supply Chain',
    description:
      'Unify raw materials, machinery, logistics, and compliance in one platform. Gain visibility across suppliers, shipments, and production dependencies.',
    features: ['End-to-end supply chain view', 'Verified supplier network', 'Compliance tracking'],
    color: 'from-purple-500 to-pink-500',
    href: PRODUCT_URLS.indianet,
  },
  {
    icon: Box,
    title: 'SolidXCad',
    subtitle: 'Text-to-Manufacture-Ready CAD',
    description:
      'Generate production-grade CAD models from plain text. Accelerate design cycles and deliver outputs ready for CNC, tooling, and shop-floor workflows.',
    features: ['Text-to-CAD generation', 'Manufacturing-ready models', 'Faster design-to-production'],
    color: 'from-amber-500 to-orange-500',
    href: PRODUCT_URLS.solidxcad,
  },
  {
    icon: Code2,
    title: 'Custom Industry Solutions',
    subtitle: 'Built for Your Sector',
    description:
      'When off-the-shelf products are not enough, we build tailored software for your industry — addressing specific workflows, integrations, compliance needs, and production bottlenecks.',
    features: ['Industry-specific development', 'ERP & shop-floor integration', 'Workflow automation'],
    color: 'from-orange-500 to-red-500',
    href: '/contact',
    external: false,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How Our{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Products Help
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Purpose-built platforms for sourcing, supply chain, and CAD — with custom development when your
              industry needs something more specific.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              const card = (
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 h-full flex flex-col">
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${offering.color} blur-xl opacity-50 group-hover:opacity-70 transition-opacity`} />
                    <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-r ${offering.color}`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-1">{offering.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{offering.subtitle}</p>
                  <p className="text-gray-400 mb-4 flex-grow leading-relaxed">{offering.description}</p>

                  <div className="space-y-2">
                    {offering.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${offering.color}`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              );

              return offering.external === false ? (
                <a key={index} href={offering.href} className="relative group block">
                  {card}
                </a>
              ) : (
                <a
                  key={index}
                  href={offering.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group block"
                >
                  {card}
                </a>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Not sure which product fits?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Tell us about your manufacturing challenge — we will recommend the right product or design a
              custom solution for your industry.
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
