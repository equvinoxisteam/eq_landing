import { BarChart3, TrendingUp, Brain, Database, FileText, Target } from 'lucide-react';

const researchAreas = [
  {
    icon: BarChart3,
    title: 'Manufacturing Analytics',
    description: 'Deep dive analysis of production data, identifying patterns, bottlenecks, and optimization opportunities.',
    insights: [
      'Production efficiency metrics',
      'Quality trend analysis',
      'Resource utilization patterns',
      'Predictive maintenance indicators',
    ],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    icon: TrendingUp,
    title: 'Market Intelligence',
    description: 'Comprehensive market research and competitive analysis for strategic decision-making.',
    insights: [
      'Industry trends and forecasts',
      'Competitive benchmarking',
      'Supply chain dynamics',
      'Pricing intelligence',
    ],
    color: 'from-purple-600 to-pink-600',
  },
  {
    icon: Database,
    title: 'Data Mining & Patterns',
    description: 'Extract valuable insights from large datasets using advanced analytics and machine learning.',
    insights: [
      'Customer behavior patterns',
      'Operational inefficiencies',
      'Cost optimization opportunities',
      'Risk identification',
    ],
    color: 'from-green-600 to-teal-600',
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Leverage artificial intelligence to uncover hidden correlations and predictive insights.',
    insights: [
      'Demand forecasting',
      'Quality prediction models',
      'Anomaly detection',
      'Automated recommendations',
    ],
    color: 'from-orange-600 to-red-600',
  },
];

const caseStudies = [
  {
    title: 'Production Optimization Study',
    client: 'Large Auto Component Manufacturer',
    challenge: 'High rejection rates and unclear root causes',
    research: 'Analyzed 6 months of production data across 50+ machines',
    outcome: '65% reduction in defects by identifying 3 critical process parameters',
    metric: '65% Improvement',
  },
  {
    title: 'Supply Chain Analysis',
    client: 'Electronics Manufacturing Unit',
    challenge: 'Frequent delays and inventory issues',
    research: 'Studied supplier performance data and logistics patterns',
    outcome: '40% reduction in lead times through strategic supplier consolidation',
    metric: '40% Faster',
  },
  {
    title: 'Cost Reduction Research',
    client: 'Industrial Equipment Manufacturer',
    challenge: 'Rising operational costs',
    research: 'Deep analysis of energy consumption and resource utilization',
    outcome: 'Identified $2M annual savings in energy and material optimization',
    metric: 'Save $2M ',
  },
];

export default function ResearchPage() {
  return (
    <div className="pt-20 bg-black text-white">
      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Data Research & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Turn your manufacturing data into strategic advantage. We conduct deep research and provide actionable insights that drive real business outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Research Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300"
                  >
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${area.color} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{area.title}</h3>
                    <p className="text-gray-400 mb-6">{area.description}</p>
                    <div className="space-y-2">
                      {area.insights.map((insight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${area.color}`} />
                          {insight}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Research Process</h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div className="flex-1 bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">Data Collection & Preparation</h3>
                  <p className="text-gray-400">We gather and clean your data from various sources, ensuring quality and completeness.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div className="flex-1 bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">Deep Analysis</h3>
                  <p className="text-gray-400">Apply statistical methods, machine learning, and domain expertise to uncover patterns and insights.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div className="flex-1 bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">Insight Generation</h3>
                  <p className="text-gray-400">Transform findings into clear, actionable recommendations with projected business impact.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center font-bold text-lg">4</div>
                <div className="flex-1 bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">Presentation & Support</h3>
                  <p className="text-gray-400">Deliver comprehensive reports and visualizations, with ongoing support for implementation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Research Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6"
                >
                  <div className="text-3xl font-bold text-green-400 mb-4">{study.metric}</div>
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-gray-500 mb-1">Client</div>
                      <div className="text-gray-300">{study.client}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Challenge</div>
                      <div className="text-gray-300">{study.challenge}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Research</div>
                      <div className="text-gray-300">{study.research}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Outcome</div>
                      <div className="text-gray-300">{study.outcome}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Unlock Your Data's Potential?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how data research can drive your business forward
            </p>
            <a
              href="tel:8008030203"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
