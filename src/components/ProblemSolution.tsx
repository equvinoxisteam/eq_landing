import { AlertTriangle, CheckCircle2, Brain, Network, Box, Code2 } from 'lucide-react';
import { PRODUCT_URLS } from '../constants/site';

const products = [
  {
    icon: Brain,
    name: 'Enigma AI',
    summary: 'Find the right CNC manufacturing partners in seconds — with zero commission and precise capability matching.',
    href: PRODUCT_URLS.enigma,
    color: 'text-blue-400',
  },
  {
    icon: Network,
    name: 'Indianet',
    summary: 'Connect raw materials, machinery, logistics, and compliance in one supply chain platform built for manufacturers.',
    href: PRODUCT_URLS.indianet,
    color: 'text-purple-400',
  },
  {
    icon: Box,
    name: 'SolidXCad',
    summary: 'Turn design descriptions into manufacture-ready CAD models — production-grade output for CNC and tooling workflows.',
    href: PRODUCT_URLS.solidxcad,
    color: 'text-amber-400',
  },
];

export default function ProblemSolution() {
  return (
    <section className="bg-black text-white py-20 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-900/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl font-bold">The Challenge</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span>Finding reliable CNC partners and suppliers takes weeks of manual outreach</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span>Supply chains stay fragmented across materials, logistics, and compliance</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span>Design-to-production cycles are slow when CAD work becomes a bottleneck</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span>Generic software does not address industry-specific manufacturing workflows</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span>Legacy systems and shop-floor tools operate in silos</span>
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-900/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
                <h2 className="text-3xl font-bold">What We Do</h2>
              </div>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Equvinoxis builds software for modern manufacturing — with ready-to-use products for sourcing,
                supply chain, and CAD, plus custom solutions shaped around your industry and operational challenges.
              </p>

              <div className="space-y-5 mb-6">
                {products.map((product) => {
                  const Icon = product.icon;
                  return (
                    <a
                      key={product.name}
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="flex items-start gap-3">
                        <Icon className={`w-5 h-5 mt-1 flex-shrink-0 ${product.color}`} />
                        <div>
                          <strong className="text-white group-hover:text-blue-300 transition-colors">
                            {product.name}:
                          </strong>{' '}
                          <span className="text-gray-300">{product.summary}</span>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="border-t border-green-900/40 pt-5">
                <div className="flex items-start gap-3">
                  <Code2 className="w-5 h-5 mt-1 flex-shrink-0 text-orange-400" />
                  <p className="text-gray-300">
                    <strong className="text-white">Custom Industry Solutions:</strong> We also design and build
                    tailored software for specific sectors — automotive, aerospace, precision machining, electronics,
                    and more — addressing the exact workflows, integrations, and production challenges your team faces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
