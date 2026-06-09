import { ArrowRight, TrendingUp, Clock, DollarSign, Brain, Network, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCT_URLS } from '../constants/site';

const caseStudies = [
  {
    product: 'Enigma AI',
    icon: Brain,
    color: 'from-blue-600 to-cyan-600',
    badge: 'CNC Sourcing',
    industry: 'Precision Components Manufacturer',
    challenge:
      'A mid-size precision parts manufacturer spent 2–3 weeks manually shortlisting CNC vendors for each new job — leading to delayed quotes and inconsistent quality across suppliers.',
    solution:
      'Deployed Enigma AI to match CNC requirements with verified partners based on capability, capacity, and quality history — replacing manual outreach with instant ranked recommendations.',
    results: [
      { icon: Clock, label: 'Sourcing Time', value: '60 sec avg match' },
      { icon: DollarSign, label: 'Commission Savings', value: 'Zero fees' },
      { icon: TrendingUp, label: 'Supplier Quality', value: '65% improvement' },
    ],
    outcome:
      'The team moved from weeks of vendor hunting to same-day partner selection, with clearer pricing and faster production starts.',
    href: PRODUCT_URLS.enigma,
  },
  {
    product: 'Indianet',
    icon: Network,
    color: 'from-purple-600 to-pink-600',
    badge: 'Supply Chain',
    industry: 'Multi-Site Manufacturing Group',
    challenge:
      'Operations ran across fragmented supplier lists, manual purchase tracking, and disconnected logistics — making it difficult to see material availability and shipment status in real time.',
    solution:
      'Implemented Indianet to connect raw material suppliers, machinery vendors, and logistics partners on a single platform with live tracking and compliance documentation.',
    results: [
      { icon: DollarSign, label: 'Procurement Savings', value: '35%' },
      { icon: TrendingUp, label: 'Supply Visibility', value: 'End-to-end' },
      { icon: Clock, label: 'Lead Time Reduction', value: '45%' },
    ],
    outcome:
      'Procurement and production teams gained a shared view of the supply chain — reducing stockouts, delays, and manual follow-ups across sites.',
    href: PRODUCT_URLS.indianet,
  },
  {
    product: 'SolidXCad',
    icon: Box,
    color: 'from-amber-600 to-orange-600',
    badge: 'Design & CAD',
    industry: 'Custom Fabrication & Tooling Shop',
    challenge:
      'Engineering backlog slowed new product launches. Designers spent days translating briefs into CAD before parts could reach the shop floor or CNC programming.',
    solution:
      'Adopted SolidXCad to generate manufacture-ready CAD models from text descriptions — allowing faster iteration from concept to production-ready geometry.',
    results: [
      { icon: Clock, label: 'Design Cycle', value: '70% faster' },
      { icon: TrendingUp, label: 'CAD Throughput', value: '3× increase' },
      { icon: DollarSign, label: 'Engineering Cost', value: '40% reduction' },
    ],
    outcome:
      'The shop reduced design-to-production time significantly, with CAD outputs ready for CNC and tooling workflows without starting from scratch each time.',
    href: PRODUCT_URLS.solidxcad,
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-20 bg-black text-white">
      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Customer Success Stories
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            See how manufacturers use Enigma AI, Indianet, and SolidXCad to solve real production challenges —
            from faster CNC sourcing to connected supply chains and accelerated CAD workflows.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {caseStudies.map((study, index) => {
              const ProductIcon = study.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 md:p-12"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${study.color}`}>
                      <ProductIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {study.badge}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold">{study.product}</h2>
                      <p className="text-gray-400 text-sm">{study.industry}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-400 mb-2">Challenge</h3>
                        <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-400 mb-2">Solution</h3>
                        <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-400 mb-4">Results</h3>
                      <div className="space-y-4">
                        {study.results.map((result, i) => {
                          const Icon = result.icon;
                          return (
                            <div
                              key={i}
                              className="bg-black/30 rounded-xl p-4 border border-gray-700 flex items-center gap-4"
                            >
                              <Icon className="w-8 h-8 text-green-400 flex-shrink-0" />
                              <div>
                                <div className="text-sm text-gray-400">{result.label}</div>
                                <div className="text-2xl font-bold text-green-400">{result.value}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-800/50 rounded-xl p-6 mb-6">
                    <p className="text-lg text-gray-300 leading-relaxed">{study.outcome}</p>
                  </div>

                  <a
                    href={study.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${study.color} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105`}
                  >
                    Explore {study.product}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to solve your manufacturing challenge?</h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Whether you need Enigma AI, Indianet, SolidXCad, or a custom solution for your industry — our team
              can help you get started.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105"
            >
              Talk to Our Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
