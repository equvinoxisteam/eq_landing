import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    subtitle: 'For Small Manufacturers',
    features: [
      'Enigma AI matching',
      'Basic analytics dashboard',
      'Email support',
      'Up to 10 suppliers',
      '1 user account',
    ],
    cta: 'Contact for Pricing',
    highlight: false,
  },
  {
    name: 'Professional',
    subtitle: 'For Medium Manufacturers',
    features: [
      'Full IndiaNet access',
      'SuperMemory AI',
      'Custom integrations',
      'Priority support',
      'Up to 50 suppliers',
      '5 user accounts',
      'Advanced analytics',
    ],
    cta: 'Contact for Pricing',
    highlight: true,
  },
  {
    name: 'Enterprise',
    subtitle: 'For Large Manufacturers',
    features: [
      'All modules included',
      'Custom development',
      'Dedicated success manager',
      'SLA guarantees',
      'Unlimited suppliers',
      'Unlimited users',
      'White-label options',
      'API access',
    ],
    cta: 'Custom Pricing',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-black text-white py-20 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Flexible <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-400">Plans that scale with your manufacturing needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-900/50 backdrop-blur-sm border ${
                  plan.highlight ? 'border-blue-500 scale-105' : 'border-gray-800'
                } rounded-2xl p-8 hover:border-gray-700 transition-all duration-300`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.subtitle}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700'
                      : 'bg-gray-800 hover:bg-gray-700'
                  } text-white py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg">
              All plans include onboarding support and regular platform updates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
