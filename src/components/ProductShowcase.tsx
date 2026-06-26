import { Link } from 'react-router-dom';
import { PRODUCT_URLS, PRODUCT_TAGS } from '../constants/site';

const products = [
  {
    name: 'Enigma',
    tagline: PRODUCT_TAGS.enigma,
    description:
      'RFQ marketplace with AI matching for manufacturing and pharma. Buyers publish free — partners browse and bid on plans from Free to Enterprise.',
    benefits: ['Free buyer RFQ publishing', 'Tiered manufacturer plans', 'AI-powered partner matching'],
    borderColor: 'border-blue-500/50',
    accent: 'text-blue-400',
    href: PRODUCT_URLS.enigma,
    isExternal: true,
  },
  {
    name: 'Indianet',
    tagline: PRODUCT_TAGS.indianet,
    description:
      'List products, build supplier stores, and respond to buyer RFQs — India\'s B2B industrial marketplace for manufacturers and buyers.',
    benefits: ['Free supplier onboarding', 'Annual & 6-month billing', 'Tiered RFQ & showcase limits'],
    borderColor: 'border-purple-500/50',
    accent: 'text-purple-400',
    href: PRODUCT_URLS.indianet,
    isExternal: true,
  },
  {
    name: 'SolidXCad',
    tagline: 'Cloud CAD Workbench',
    description:
      'From prompt to STEP in one workspace. Generate parametric geometry, inspect assemblies in 3D, and export STL, G-code, and URDF.',
    benefits: ['Text-to-STEP B-rep models', 'In-browser 3D workbench', 'STL, G-code & URDF export'],
    borderColor: 'border-amber-500/50',
    accent: 'text-amber-400',
    href: PRODUCT_URLS.solidxcad,
    isExternal: true,
  },
  {
    name: 'Custom Industry Solutions',
    tagline: 'Built for Your Unique Needs',
    description:
      'Need something specific? We build custom software and technology solutions tailored to your manufacturing requirements.',
    benefits: ['Industry-specific development', 'Technology consulting', 'Integration services'],
    borderColor: 'border-orange-500/50',
    accent: 'text-orange-400',
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
              const buttonClass =
                'w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-500 text-white py-3 rounded-lg font-semibold text-center transition-all duration-300';

              return (
                <div
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-sm border ${product.borderColor} rounded-2xl p-8 flex flex-col justify-between hover:border-gray-600 transition-colors duration-300`}
                >
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${product.accent}`}>
                      {product.tagline}
                    </p>
                    <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>

                    <ul className="space-y-2 text-sm text-gray-400">
                      {product.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
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
                      </a>
                    ) : (
                      <Link to={product.href} className={buttonClass}>
                        Contact Us
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
