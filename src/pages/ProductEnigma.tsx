import { Brain, Zap, Target, CheckCircle2, ArrowRight, Check, Users, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCT_URLS } from '../constants/site';
import ProductScreenshot from '../components/ProductScreenshot';

const manufacturerPlans = [
  {
    name: 'Free',
    subtitle: 'Discovery and view-only access',
    price: '₹0',
    period: '/yr',
    summary: 'View RFQ pool only — cannot send requests',
    features: [
      'Basic search rank',
      'Enigma-only public profile (identity hidden)',
      'Limited AI matching (2 results)',
      'No capacity, images, PPT or PDF shown',
      'Browse RFQ Pool (view-only)',
      'View buyer invitations (accept requires paid plan)',
    ],
    cta: 'Get Started Free',
    highlight: false,
    badge: null,
  },
  {
    name: 'Standard',
    subtitle: 'Essential access for active manufacturers',
    price: '₹3,42,000',
    period: '/yr',
    summary: 'Up to 20 RFQ requests / year',
    features: [
      'Send up to 20 RFQ requests per year',
      'Full company profile with images',
      'Capacity display on profile',
      'Full AI matching',
      'PPT & PDF documents visible',
      'Request & accept RFQs',
    ],
    cta: 'Request Upgrade',
    highlight: false,
    badge: null,
  },
  {
    name: 'Pro',
    subtitle: 'High visibility and verified trust',
    price: '₹5,22,000',
    period: '/yr',
    summary: 'Up to 40 RFQ requests / year',
    features: [
      'Send up to 40 RFQ requests per year',
      'Verified badge on profile',
      'Enhanced profile with gallery, PPT & PDF',
      'High search rank in manufacturer pool',
      'Full AI matching + STL search',
      'Priority support',
    ],
    cta: 'Request Upgrade',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    subtitle: 'Top placement and concierge support',
    price: '₹15,75,000',
    period: '/yr',
    summary: 'Unlimited RFQ requests',
    features: [
      'Unlimited RFQ requests',
      'Top slot in manufacturer search (#1 rank)',
      'Verified + highlighted badge',
      'Full gallery, PPT, PDF & capacity',
      'Exclusive corporate RFQs',
      'Concierge deals & priority buyer matching',
    ],
    cta: 'Request Upgrade',
    highlight: false,
    badge: null,
  },
];

const buyerFeatures = [
  'Unlimited RFQ publishing',
  'Full AI matching',
  'Manufacturer discovery & invites',
  'RFQ management & chat',
  'Edit/delete RFQs before acceptance',
  'No subscription fee',
];

export default function ProductEnigma() {
  return (
    <div className="pt-20 bg-black text-white">
      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-blue-900/30 border border-blue-800/50 rounded-full px-6 py-3 mb-6">
              <Brain className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 font-semibold">Enigma AI</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Where Intelligence Meets <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Manufacturing</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              AI-powered RFQ matching for buyers and manufacturers. Buyers publish RFQs free — manufacturers browse, request, and upgrade for full access.
            </p>
            <a
              href={PRODUCT_URLS.enigma}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              Launch Enigma AI
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <ProductScreenshot
        src="/enigma.PNG"
        alt="Enigma AI dashboard showing buyer and seller RFQ activity, AI matchmaking, and hybrid account workflows"
        title="Enigma AI — hybrid buyer & seller workspace"
        description="Run buyer and seller workflows from one account — create RFQs, browse the pool, and use AI matchmaking to find the right partners."
        accentClass="from-blue-400 to-cyan-400"
      />

      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <Users className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Buyers Create RFQs</h3>
                <p className="text-gray-400">Buyers and hybrid accounts publish RFQs for free with unlimited publishing and full AI matching</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <Factory className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Manufacturers Request Bids</h3>
                <p className="text-gray-400">Pure manufacturers browse the RFQ pool and request bids based on their plan — no RFQ creation</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <Zap className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">AI-Powered Matching</h3>
                <p className="text-gray-400">Intelligent matching connects the right manufacturers to each RFQ in seconds with ranked results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">How Enigma Works</h2>
            <div className="space-y-8">
              {[
                { step: '1', title: 'Buyers Publish RFQs', text: 'Buyers and hybrid accounts create and publish RFQs with specs, drawings, and requirements' },
                { step: '2', title: 'Manufacturers Browse & Request', text: 'Manufacturers explore the RFQ pool and send requests based on their subscription plan' },
                { step: '3', title: 'AI Matches & Ranks', text: 'Enigma AI evaluates capabilities, capacity, and fit to surface the best manufacturer matches' },
                { step: '4', title: 'Connect & Close Deals', text: 'Buyers and manufacturers chat, negotiate, and finalize orders directly on the platform' },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Plans & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Buyers and hybrid accounts create RFQs. Pure manufacturers browse and request RFQs based on their plan.
                Admin approves upgrades — downgrades include a 24-hour grace period.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {manufacturerPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col bg-gray-900/50 backdrop-blur-sm border ${
                    plan.highlight ? 'border-blue-500 ring-1 ring-blue-500/30' : 'border-gray-800'
                  } rounded-2xl p-6 hover:border-gray-700 transition-all duration-300`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                      {plan.badge}
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.subtitle}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-gray-500 text-sm">{plan.period}</span>
                    </div>
                    <p className="text-blue-400 text-sm font-medium mt-3">{plan.summary}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.name === 'Free' ? (
                    <a
                      href={PRODUCT_URLS.enigma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold text-center transition-all duration-300"
                    >
                      {plan.cta}
                    </a>
                  ) : (
                    <Link
                      to="/contact"
                      className={`w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                        plan.highlight
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white'
                          : 'bg-gray-800 hover:bg-gray-700 text-white'
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-800/40 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold">Buyer Plan — Always Free</h2>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Buyers create and publish RFQs. Manufacturers cannot create RFQs — they request bids on buyer RFQs.
                Hybrid accounts get buyer powers plus manufacturer plan features.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                {buyerFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={PRODUCT_URLS.enigma}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Start as a Buyer
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
