import { Factory, Package, TrendingUp, Shield, Zap, Users, Code2 } from 'lucide-react';

const solutions = [
  {
    icon: Factory,
    title: 'Manufacturing Operations',
    description: 'End-to-end digitization of your manufacturing floor',
    features: [
      'Real-time production monitoring',
      'Quality control automation',
      'Predictive maintenance',
      'OEE optimization',
    ],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Package,
    title: 'Supply Chain Management',
    description: 'Complete visibility and control over your supply chain',
    features: [
      'Supplier network management',
      'Inventory optimization',
      'Logistics tracking',
      'Demand forecasting',
    ],
    color: 'from-purple-600 to-pink-600',
  },
  {
    icon: TrendingUp,
    title: 'Business Intelligence',
    description: 'Data-driven insights for better decision making',
    features: [
      'Advanced analytics dashboards',
      'Custom reporting',
      'KPI tracking',
      'Trend analysis',
    ],
    color: 'from-green-600 to-teal-600',
  },
  {
    icon: Shield,
    title: 'Compliance & Quality',
    description: 'Ensure standards and regulatory compliance',
    features: [
      'ISO compliance tracking',
      'Quality management systems',
      'Audit trail management',
      'Documentation automation',
    ],
    color: 'from-orange-600 to-red-600',
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Automate repetitive tasks and workflows',
    features: [
      'Workflow automation',
      'Document processing',
      'Email notifications',
      'Integration with existing tools',
    ],
    color: 'from-yellow-600 to-orange-600',
  },
  {
    icon: Users,
    title: 'Workforce Management',
    description: 'Optimize your workforce productivity',
    features: [
      'Skill tracking',
      'Shift scheduling',
      'Performance management',
      'Training management',
    ],
    color: 'from-indigo-600 to-purple-600',
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailored AI-powered software solutions built to meet your specific manufacturing challenges',
    features: [
      'Bespoke AI development',
      'System integration',
      'Technology consulting',
      'API development',
    ],
    color: 'from-pink-600 to-rose-600',
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-20 bg-black text-white">
      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Solutions for Every <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Manufacturing Need</span>
            </h1>
            <p className="text-xl text-gray-400">
              Comprehensive Industry 4.0 solutions tailored to transform your manufacturing operations
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${solution.color} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                    <p className="text-gray-400 mb-6">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.color}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Schedule a consultation to discuss your specific manufacturing challenges
            </p>
            <button  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105">
              <a href="/contact">Schedule Consultation</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
