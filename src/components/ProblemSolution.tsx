import { Link } from 'react-router-dom';
import { PRODUCT_URLS, PRODUCT_TAGS, INDIANET_EXPRESS_NAME } from '../constants/site';

const products = [
  {
    name: 'Enigma',
    tag: PRODUCT_TAGS.enigma,
    summary: 'AI RFQ sourcing for CNC manufacturing and pharma CDMO partners — buyers publish free, partners bid on tiered plans.',
    href: '/products/enigma',
    external: false,
  },
  {
    name: 'Indianet',
    tag: PRODUCT_TAGS.indianet,
    summary: 'List products, run supplier stores, and win buyer RFQs — India\'s B2B marketplace for industrial sourcing.',
    href: PRODUCT_URLS.indianet,
    external: true,
  },
  {
    name: INDIANET_EXPRESS_NAME,
    tag: PRODUCT_TAGS.indianetExpress,
    summary: 'Browse machinery and parts, order online with secure payment, and track deliveries from verified sellers worldwide.',
    href: PRODUCT_URLS.indianetExpress,
    external: true,
  },
  {
    name: 'SolidXCad',
    tag: PRODUCT_TAGS.solidxcad,
    summary: 'Cloud CAD workbench — from prompt to STEP with in-browser 3D inspection and export to STL, G-code, and URDF.',
    href: PRODUCT_URLS.solidxcad,
    external: true,
  },
];

export default function ProblemSolution() {
  return (
    <section className="bg-black text-white py-20 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-900/50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <ul className="space-y-4 text-gray-300 list-disc list-inside marker:text-red-400">
                <li>Finding reliable CNC partners and suppliers takes weeks of manual outreach</li>
                <li>Supply chains stay fragmented across materials, logistics, and compliance</li>
                <li>Design-to-production cycles are slow when CAD work becomes a bottleneck</li>
                <li>Generic software does not address industry-specific manufacturing workflows</li>
                <li>Legacy systems and shop-floor tools operate in silos</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-900/50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">What We Do</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Equvinoxis builds software for modern manufacturing — with ready-to-use products for sourcing,
                supply chain, and CAD, plus custom solutions shaped around your industry and operational challenges.
              </p>

              <div className="space-y-5 mb-6">
                {products.map((product) => {
                  const content = (
                    <>
                      <strong className="text-white group-hover:text-blue-300 transition-colors block">
                        {product.name}
                      </strong>
                      <span className="text-xs text-gray-500 block mt-0.5">{product.tag}</span>
                      <p className="text-gray-300 mt-1">{product.summary}</p>
                    </>
                  );

                  return product.external ? (
                    <a
                      key={product.name}
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group border-l-2 border-green-700/60 pl-4 hover:border-green-400 transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <Link
                      key={product.name}
                      to={product.href}
                      className="block group border-l-2 border-green-700/60 pl-4 hover:border-green-400 transition-colors"
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>

              <div className="border-t border-green-900/40 pt-5">
                <p className="text-gray-300">
                  <strong className="text-white">Custom Industry Solutions</strong>
                  <span className="block mt-1">
                    We also design and build tailored software for specific sectors — automotive, aerospace,
                    precision machining, electronics, and more — addressing the exact workflows, integrations,
                    and production challenges your team faces.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
