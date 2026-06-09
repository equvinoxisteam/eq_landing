import { PRODUCT_URLS } from '../constants/site';

const products = [
  {
    name: 'Enigma AI',
    summary: 'Find the right CNC manufacturing partners in seconds — with zero commission and precise capability matching.',
    href: PRODUCT_URLS.enigma,
  },
  {
    name: 'Indianet',
    summary: 'Connect raw materials, machinery, logistics, and compliance in one supply chain platform built for manufacturers.',
    href: PRODUCT_URLS.indianet,
  },
  {
    name: 'SolidXCad',
    summary: 'Turn design descriptions into manufacture-ready CAD models — production-grade output for CNC and tooling workflows.',
    href: PRODUCT_URLS.solidxcad,
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
                {products.map((product) => (
                  <a
                    key={product.name}
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group border-l-2 border-green-700/60 pl-4 hover:border-green-400 transition-colors"
                  >
                    <strong className="text-white group-hover:text-blue-300 transition-colors">
                      {product.name}
                    </strong>
                    <p className="text-gray-300 mt-1">{product.summary}</p>
                  </a>
                ))}
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
