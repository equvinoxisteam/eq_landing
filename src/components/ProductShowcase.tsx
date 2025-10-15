import { Brain, Network, Zap, ArrowRight, Code2, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    icon: Brain,
    name: 'Enigma',
    tagline: 'Where Intelligence Meets Manufacturing',
    description:
      'AI-powered CNC partner matching in 60 seconds. Zero commission. 99.9% accuracy.',
    benefits: ['Zero commission fees', 'Real-time capacity tracking', '60-second match time'],
    color: 'from-blue-600 to-cyan-600',
    borderColor: 'border-blue-500/50',
    isCustom: false,
  },
  {
    icon: Network,
    name: 'Indianet',
    tagline: 'Manufacturing. Connected. Intelligent.',
    description:
      'End-to-end supply chain platform spanning raw materials, machines, logistics, compliance.',
    benefits: ['Verified suppliers', 'Real-time tracking', 'Integrated compliance'],
    color: 'from-purple-600 to-pink-600',
    borderColor: 'border-purple-500/50',
    isCustom: false,
  },
  {
    icon: Zap,
    name: 'MemoryX AI',
    tagline: 'Memory That Manufactures Excellence',
    description:
      'AI learns from every operation for constant performance improvement. Predictive, contextual analytics.',
    benefits: ['Predictive maintenance', 'Quality optimization', 'Cost reduction insights'],
    color: 'from-green-600 to-teal-600',
    borderColor: 'border-green-500/50',
    isCustom: false,
  },
  {
    icon: Code2,
    name: 'Custom AI Solutions',
    tagline: 'Built for Your Unique Needs',
    description:
      'Need something specific? We build custom AI-powered software and technology solutions tailored to your manufacturing requirements.',
    benefits: ['Bespoke AI development', 'Technology consulting', 'Integration services'],
    color: 'from-orange-600 to-red-600',
    borderColor: 'border-orange-500/50',
    isCustom: true,
  },
];

export default function ProductShowcase() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Industry 4.0
              </span>{' '}
              Ecosystem
            </h2>
            <p className="text-xl text-gray-400">
              Powerful platforms and custom solutions to transform your manufacturing
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div
                  key={index}
                  className={`group bg-gray-900/50 backdrop-blur-sm border ${product.borderColor} rounded-2xl p-8 flex flex-col justify-between hover:scale-105 transition-transform duration-300 hover:shadow-2xl`}
                >
                  {/* Top Section */}
                  <div>
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${product.color} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-400 italic mb-4">{product.tagline}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>

                    <div className="space-y-3">
                      {product.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.color}`} />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section (Button) */}
                  <div className="mt-8">
                    {product.isCustom ? (
                      <Link
                        to="/contact"
                        className={`w-full bg-gradient-to-r ${product.color} text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group-hover:gap-4`}
                      >
                        Contact Us
                        <Mail className="w-4 h-4" />
                      </Link>
                    ) : (
                      <Link
                        to={
                          product.name === 'MemoryX AI'
                            ? '/products/SuperMemory'
                            : `/products/${product.name.toLowerCase().replace(' ai', '').replace(' ', '')}`
                        }
                        className={`w-full bg-gradient-to-r ${product.color} text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group-hover:gap-4`}
                      >
                        Explore
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
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
