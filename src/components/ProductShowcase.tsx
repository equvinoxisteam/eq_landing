import { Link } from 'react-router-dom';
import { INDIANET_EXPRESS_NAME, PRODUCT_URLS, PRODUCT_TAGS } from '../constants/site';

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
    variant: 'launch' as const,
  },
  {
    name: 'Indianet',
    tagline: PRODUCT_TAGS.indianet,
    description:
      'List products, build supplier stores, and respond to buyer RFQs — India\'s B2B industrial marketplace for manufacturers and distributors.',
    benefits: ['Free supplier onboarding', 'Annual & 6-month billing', 'Tiered RFQ & showcase limits'],
    borderColor: 'border-purple-500/50',
    accent: 'text-purple-400',
    href: PRODUCT_URLS.indianet,
    isExternal: true,
    variant: 'indianet' as const,
  },
  {
    name: INDIANET_EXPRESS_NAME,
    tagline: PRODUCT_TAGS.indianetExpress,
    description:
      'Browse machinery, parts, and industrial equipment from verified sellers. Order online with secure payment, track deliveries, and shop worldwide.',
    benefits: ['Browse all categories', 'Secure checkout & order tracking', 'Verified sellers & worldwide shipping'],
    borderColor: 'border-rose-500/50',
    accent: 'text-rose-400',
    href: PRODUCT_URLS.indianetExpress,
    isExternal: true,
    variant: 'indianetExpress' as const,
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
    variant: 'launch' as const,
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
    variant: 'contact' as const,
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const buttonClass =
                'w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-500 text-white py-3 rounded-lg font-semibold text-center transition-all duration-300';

              return (
                <div
                  key={product.name}
                  className={`bg-gray-900/50 backdrop-blur-sm border ${product.borderColor} rounded-2xl p-8 flex flex-col justify-between hover:border-gray-600 transition-colors duration-300`}
                >
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${product.accent}`}>
                      {product.tagline}
                    </p>
                    <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>

                    <ul className="space-y-2 text-sm text-gray-400">
                      {product.benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    {product.variant === 'indianet' ? (
                      <div className="flex flex-col gap-3">
                        <a
                          href={product.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold text-center transition-all duration-300"
                        >
                          Launch Platform
                        </a>
                        <Link
                          to="/products/indianet"
                          className={buttonClass}
                        >
                          View Plans
                        </Link>
                      </div>
                    ) : product.variant === 'indianetExpress' ? (
                      <div className="flex flex-col gap-3">
                        <a
                          href={product.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 text-white py-3 rounded-lg font-semibold text-center transition-all duration-300"
                        >
                          Shop Products
                        </a>
                        <a
                          href={PRODUCT_URLS.indianetExpressVendorRegister}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonClass}
                        >
                          Register as Vendor
                        </a>
                      </div>
                    ) : product.isExternal ? (
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
