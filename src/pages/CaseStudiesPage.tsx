import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';

const caseStudies = [
  {
    challenge: 'High procurement costs and quality inconsistencies across multiple suppliers',
    solution: 'Implemented AI-driven supplier matching and quality tracking solutions',
    results: [
      { icon: DollarSign, label: 'Cost Savings', value: '42%' },
      { icon: TrendingUp, label: 'Quality Improvement', value: '65%' },
      { icon: Clock, label: 'Time Saved', value: '30 hrs/week' },
    ],
    testimonial: 'The platform transformed operations completely, with ROI visible within weeks.',
  },
  {
    challenge: 'Manual processes causing production delays and high rejection rates',
    solution: 'Full platform integration with real-time monitoring and predictive analytics',
    results: [
      { icon: DollarSign, label: 'Cost Reduction', value: '38%' },
      { icon: TrendingUp, label: 'Efficiency Gain', value: '50%' },
      { icon: Clock, label: 'Faster Delivery', value: '40%' },
    ],
    testimonial: 'Predictive analytics alone saved significant downtime costs.',
  },
  {
    challenge: 'Fragmented supplier network and lack of supply chain visibility',
    solution: 'AI-powered supply chain platform with supplier recommendations',
    results: [
      { icon: DollarSign, label: 'Procurement Savings', value: '35%' },
      { icon: TrendingUp, label: 'Supplier Quality', value: '70%' },
      { icon: Clock, label: 'Lead Time Reduction', value: '45%' },
    ],
    testimonial: 'The platform provided complete visibility across the supply chain. Game changer.',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-20 bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
           <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Insights from Industry Research</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Based on our <span className="font-semibold text-green-400">internal research</span>, manufacturers using our platforms achieved significant gains in efficiency, quality, and cost savings. Here’s what we observed.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 md:p-12"
              >
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Left Column: Challenge & Solution */}
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Case Study</h2>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-400 mb-2">Challenge</h3>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-400 mb-2">Solution Implemented</h3>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                  </div>

                  {/* Right Column: Results */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-400 mb-4">Impact (Internal Research)</h3>
                    <p className="text-gray-400 mb-4">
                      Metrics below are based on our internal research and demonstrate measurable improvements within a short period of platform adoption.
                    </p>
                    <div className="space-y-4">
                      {study.results.map((result, i) => {
                        const Icon = result.icon;
                        return (
                          <div
                            key={i}
                            className="bg-black/30 rounded-xl p-4 border border-gray-700 flex items-center gap-4"
                          >
                            <Icon className="w-8 h-8 text-green-400" />
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

                {/* Testimonial */}
                <div className="bg-blue-900/20 border border-blue-800/50 rounded-xl p-6">
                  <p className="text-lg italic text-gray-300 mb-3">"{study.testimonial}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Achieve Transformational Results?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Our <span className="font-semibold text-green-400">internal research</span> confirms that manufacturers using our platforms see measurable ROI in a matter of weeks. Join the growing list of successful partners.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105 flex items-center gap-2 mx-auto">
              <a href="/contact">Start Your Transformation</a> 
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
