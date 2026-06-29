import { PRODUCT_URLS, PRODUCT_TAGS, INDIANET_EXPRESS_NAME } from '../constants/site';

const offerings = [
  {
    title: 'Enigma',
    subtitle: PRODUCT_TAGS.enigma,
    description:
      'Buyers publish RFQs for free on manufacturing and pharma verticals. Partners browse the pool and bid on tiered plans — Free, Standard, Pro, and Enterprise — with AI-powered matching.',
    features: ['Free buyer RFQ publishing', 'Manufacturer plans from ₹0–₹15.75L/yr', 'Admin-approved upgrades'],
    href: PRODUCT_URLS.enigma,
    external: true,
  },
  {
    title: 'Indianet',
    subtitle: PRODUCT_TAGS.indianet,
    description:
      'India\'s B2B supplier marketplace — list catalogues, run storefronts, and respond to buyer RFQs. Plans from Free to Premium with annual or 6-month billing.',
    features: ['Supplier store & catalogue', 'Buyer RFQ responses', 'Verified badges & ads'],
    href: PRODUCT_URLS.indianet,
    external: true,
  },
  {
    title: INDIANET_EXPRESS_NAME,
    subtitle: PRODUCT_TAGS.indianetExpress,
    description:
      'India\'s industrial e-commerce store — browse machinery and parts, order online with secure payment, track deliveries, and shop from verified sellers worldwide.',
    features: ['Browse & buy online', 'Secure checkout & tracking', 'Verified sellers & worldwide delivery'],
    href: PRODUCT_URLS.indianetExpress,
    external: true,
  },
  {
    title: 'SolidXCad',
    subtitle: 'Cloud CAD Workbench',
    description:
      'Sign in to generate parametric STEP geometry from prompts, inspect assemblies in 3D, and export STL, G-code, and URDF.',
    features: ['Text-to-STEP parametric models', 'Orbit, measure & section in-browser', 'Assemblies, fasteners & URDF robots'],
    href: PRODUCT_URLS.solidxcad,
    external: true,
  },
  {
    title: 'Custom Industry Solutions',
    subtitle: 'Built for Your Sector',
    description:
      'When off-the-shelf products are not enough, we build tailored software for your industry — addressing specific workflows, integrations, compliance needs, and production bottlenecks.',
    features: ['Industry-specific development', 'ERP and shop-floor integration', 'Workflow automation'],
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
              const card = (
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 h-full flex flex-col">
                  <p className="text-sm text-gray-500 mb-1">{offering.subtitle}</p>
                  <h3 className="text-2xl font-bold mb-4">{offering.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow leading-relaxed">{offering.description}</p>

                  <ul className="space-y-2 text-sm text-gray-300">
                    {offering.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              );

              return offering.external === false ? (
                <a key={index} href={offering.href} className="block">
                  {card}
                </a>
              ) : (
                <a
                  key={index}
                  href={offering.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
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
