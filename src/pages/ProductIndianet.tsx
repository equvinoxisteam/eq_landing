import { useState } from 'react';
import { Network, Package, Store, MessageSquare, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCT_URLS, PRODUCT_TAGS } from '../constants/site';
import ProductScreenshot from '../components/ProductScreenshot';

type BillingPeriod = 'annual' | 'semi-annual';

type SupplierPlan = {
  name: string;
  annualPrice: number | null;
  semiAnnualPrice: number | null;
  includesLabel?: string;
  features: string[];
  bestFor: string;
  highlight: boolean;
  badge: string | null;
  cta: string;
  isFree: boolean;
};

const supplierPlans: SupplierPlan[] = [
  {
    name: 'Free',
    annualPrice: null,
    semiAnnualPrice: null,
    features: [
      'Unlimited product uploads',
      '1 product showcase (locked when used)',
      'See & respond to 2 buyer RFQs per month',
      'Store page (products & contacts only — no company profile)',
      'Draft & publish catalogue',
    ],
    bestFor: 'Start selling with no upfront cost (activated when admin approves your account).',
    highlight: false,
    badge: null,
    cta: 'Get Started Free',
    isFree: true,
  },
  {
    name: 'Basic',
    annualPrice: 165000,
    semiAnnualPrice: 90750,
    features: [
      'Unlimited product uploading',
      'Business registration verified',
      '5 product showcases',
      "Access to buyers' purchase requests (RFQ)",
      'See & respond to 20 RFQs per month',
      'Store page without public company profile',
    ],
    bestFor: 'New suppliers starting their B2B journey.',
    highlight: false,
    badge: null,
    cta: 'Select Plan',
    isFree: false,
  },
  {
    name: 'Plus',
    annualPrice: 247500,
    semiAnnualPrice: 136125,
    includesLabel: 'Everything in Basic, plus:',
    features: [
      'Public company profile on your store',
      'Verified vendor badge on profile & products',
      '20 product showcases',
      'See & respond to 40 RFQs per month',
      'Basic advertisement support',
    ],
    bestFor: 'Growing businesses seeking greater product visibility and more buyer inquiries.',
    highlight: true,
    badge: 'Most Popular',
    cta: 'Select Plan',
    isFree: false,
  },
  {
    name: 'Pro',
    annualPrice: 351000,
    semiAnnualPrice: 193050,
    includesLabel: 'Everything in Plus, plus:',
    features: [
      'Public company profile + verified vendor badge',
      '20 product showcases',
      'See & respond to 60 RFQs per month',
      'Change showcased products anytime',
      'Product advertisements',
      '2-Star supplier rating (6 months)',
    ],
    bestFor: 'Suppliers who need more RFQ volume and flexible showcase control.',
    highlight: false,
    badge: null,
    cta: 'Select Plan',
    isFree: false,
  },
  {
    name: 'Premium',
    annualPrice: 1125000,
    semiAnnualPrice: 618750,
    includesLabel: 'Everything in Pro, plus:',
    features: [
      'Public company profile + verified vendor badge',
      'Product & branded advertisements',
      'Verified supplier badge (Premium)',
      '4-Star supplier rating (direct for 6 months)',
      'Third-party assessment report',
      'Verified video shooting service',
      'Indianet manufacturers exclusive promotion',
      'Unlimited product showcases',
      'Unlimited RFQ visibility & responses',
      'Keyword ads ranking service',
    ],
    bestFor: 'Established manufacturers seeking maximum visibility, trust, and buyer reach.',
    highlight: false,
    badge: null,
    cta: 'Select Plan',
    isFree: false,
  },
];

function formatInr(amount: number) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export default function ProductIndianet() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('annual');

  return (
    <div className="pt-20 bg-black text-white">
      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex flex-col items-center gap-1 bg-purple-900/30 border border-purple-800/50 rounded-full px-6 py-3 mb-6">
              <div className="inline-flex items-center gap-3">
                <Network className="w-6 h-6 text-purple-400" />
                <span className="text-purple-400 font-semibold">Indianet</span>
              </div>
              <span className="text-xs text-purple-300/80">{PRODUCT_TAGS.indianet}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              India's B2B{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Supplier Marketplace</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Like Alibaba for Indian manufacturing — list products, build your supplier store, and respond to buyer RFQs. From free discovery to premium visibility.
            </p>
            <a
              href={PRODUCT_URLS.indianet}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              Launch Indianet
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <ProductScreenshot
        src="/image.png"
        alt="Indianet B2B industrial marketplace homepage with product search, categories, and verified supplier sourcing"
        title="Indianet — B2B industrial marketplace"
        description="Source CNC machines, packaging lines, and heavy equipment from verified suppliers across India with RFQs, bulk orders, and worldwide delivery."
        accentClass="from-purple-400 to-pink-400"
      />

      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <Store className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Supplier Store</h3>
                <p className="text-gray-400 text-sm">Launch your B2B store with product catalogues, showcases, and contact details</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <MessageSquare className="w-12 h-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Buyer RFQs</h3>
                <p className="text-gray-400 text-sm">See and respond to buyer purchase requests based on your plan limits</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <Package className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Product Showcases</h3>
                <p className="text-gray-400 text-sm">Highlight your best products with tiered showcase slots from 1 to unlimited</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <Network className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Verified Trust</h3>
                <p className="text-gray-400 text-sm">Vendor badges, supplier ratings, and premium promotions build buyer confidence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">How Indianet Works</h2>
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Create Your Supplier Account',
                  text: 'Register and get admin approval to activate your free plan and start building your catalogue',
                },
                {
                  step: '2',
                  title: 'Upload Products & Publish Store',
                  text: 'Draft your catalogue, upload unlimited products, and launch your store page for buyers to discover',
                },
                {
                  step: '3',
                  title: 'Respond to Buyer RFQs',
                  text: 'Access buyer purchase requests and respond within your monthly RFQ limit for your plan',
                },
                {
                  step: '4',
                  title: 'Upgrade for Visibility',
                  text: 'Move to Basic, Plus, Pro, or Premium for public profiles, verified badges, ads, and unlimited reach',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold">
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

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Supplier Plans & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
                Choose annual or 6-month billing. All paid plans are tax exclusive. Free accounts activate after admin approval.
              </p>

              <div className="inline-flex items-center gap-1 p-1 bg-gray-900 border border-gray-800 rounded-full">
                <button
                  type="button"
                  onClick={() => setBillingPeriod('annual')}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    billingPeriod === 'annual'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  1 Year
                </button>
                <button
                  type="button"
                  onClick={() => setBillingPeriod('semi-annual')}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    billingPeriod === 'semi-annual'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  6 Months
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {supplierPlans.map((plan) => {
                const isAnnual = billingPeriod === 'annual';
                const displayPrice = plan.isFree
                  ? '₹0'
                  : isAnnual
                    ? formatInr(plan.annualPrice!)
                    : formatInr(plan.semiAnnualPrice!);
                const periodLabel = plan.isFree ? '' : isAnnual ? '/ Year' : '/ 6 Months';

                return (
                  <div
                    key={plan.name}
                    className={`relative flex flex-col bg-gray-900/50 backdrop-blur-sm border ${
                      plan.highlight ? 'border-purple-500 ring-1 ring-purple-500/30 xl:scale-[1.02]' : 'border-gray-800'
                    } rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 ${
                      plan.name === 'Premium' ? 'xl:col-span-1' : ''
                    }`}
                  >
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                        {plan.badge}
                      </div>
                    )}

                    <div className="mb-5">
                      <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                      <div className="flex items-baseline gap-1 flex-wrap">
                        <span className="text-3xl font-bold">{displayPrice}</span>
                        {periodLabel && <span className="text-gray-500 text-sm">{periodLabel}</span>}
                      </div>
                      {!plan.isFree && (
                        <>
                          <p className="text-xs text-gray-500 mt-2">Tax Exclusive</p>
                          {!isAnnual && plan.annualPrice && (
                            <p className="text-xs text-purple-400 mt-1">
                              Annual equivalent: {formatInr(plan.annualPrice)}/year
                            </p>
                          )}
                        </>
                      )}
                    </div>

                    {plan.includesLabel && (
                      <p className="text-sm text-purple-300 font-medium mb-3">{plan.includesLabel}</p>
                    )}

                    <ul className="space-y-2.5 mb-6 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-xs text-gray-500 mb-5 leading-relaxed">
                      <span className="text-gray-400 font-medium">Best for: </span>
                      {plan.bestFor}
                    </p>

                    {plan.isFree ? (
                      <a
                        href={PRODUCT_URLS.indianet}
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
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                            : 'bg-gray-800 hover:bg-gray-700 text-white'
                        }`}
                      >
                        {plan.cta}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="text-center text-sm text-gray-500 mt-10">
              Plan upgrades are processed through Indianet. Contact our team for billing questions or enterprise arrangements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
