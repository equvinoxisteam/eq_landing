import { Brain, Network, Box, Code2, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCT_URLS } from '../constants/site';

const products = [
  {
    icon: Brain,
    name: 'Enigma AI',
    tagline: 'Where Intelligence Meets Manufacturing',
    description:
      'AI-powered CNC partner matching in 60 seconds. Zero commission. 99.9% accuracy.',
    benefits: ['Zero commission fees', 'Real-time capacity tracking', '60-second match time'],
    color: 'from-blue-600 to-cyan-600',
    borderColor: 'border-blue-500/50',
    href: PRODUCT_URLS.enigma,
    isExternal: true,
  },
  {
    icon: Network,
    name: 'Indianet',
    tagline: 'Manufacturing. Connected. Intelligent.',
    description:
      'End-to-end supply chain platform spanning raw materials, machines, logistics, and compliance.',
    benefits: ['Verified suppliers', 'Real-time tracking', 'Integrated compliance'],
    color: 'from-purple-600 to-pink-600',
    borderColor: 'border-purple-500/50',
    href: PRODUCT_URLS.indianet,
    isExternal: true,
  },
  {
    icon: Box,
    name: 'SolidXCad',
    tagline: 'Text to Manufacture-Ready CAD',
    description:
      'Generate production-grade CAD models from plain text. Create fully detailed, manufacturing-ready 3D models for CNC and tooling workflows.',
    benefits: ['Text-to-CAD generation', 'Manufacture-ready output', 'Faster design cycles'],
    color: 'from-amber-600 to-orange-600',
    borderColor: 'border-amber-500/50',
    href: PRODUCT_URLS.solidxcad,
    isExternal: true,
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
    href: '/contact',
    isExternal: false,
  },
];

export default function ProductShowcase() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              const buttonClass = `w-full bg-gradient-to-r ${product.color} text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group-hover:gap-4`;

              return (
                <div
                  key={index}
                  className={`group bg-gray-900/50 backdrop-blur-sm border ${product.borderColor} rounded-2xl p-8 flex flex-col justify-between hover:scale-105 transition-transform duration-300 hover:shadow-2xl`}
                >
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

                  <div className="mt-8">
                    {product.isExternal ? (
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonClass}
                      >
                        Launch Platform
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link to={product.href} className={buttonClass}>
                        Contact Us
                        <Mail className="w-4 h-4" />
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
