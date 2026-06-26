import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL } from '../constants/site';

const faqCategories = [
  {
    label: 'Products & Platform',
    faqs: [
      {
        question: 'What products does Equvinoxis offer?',
        answer:
          'Equvinoxis offers Enigma — an AI-powered sourcing platform with two verticals: manufacturing RFQ matching (CNC & precision partners) and Enigma Pharma for pharma CDMO sourcing (API, formulation, biologics). We also provide Indianet for connected supply chain operations, SolidXCad for text-to-manufacture-ready CAD, plus custom AI software and manufacturing research services.',
      },
      {
        question: 'What is Enigma and how do the two platforms differ?',
        answer:
          'Enigma is our RFQ-first sourcing platform. Enigma Manufacturing (enigma.equvinoxis.com) connects buyers with CNC and precision manufacturers using drawings, STL files, and capacity matching. Enigma Pharma (enigmapharma.equvinoxis.com) is built for pharmaceutical sponsors and CDMO partners — with NDA-gated PDF workflows, GMP certification filters, and AI CDMO match scoring. Both share the same buyer-free / partner-paid model.',
      },
      {
        question: 'How is Enigma different from a traditional marketplace?',
        answer:
          'Enigma is RFQ-first, not a parts catalog. Buyers and hybrid accounts publish RFQs for free; manufacturers or CDMOs browse the pool and bid based on their plan (Free, Standard, Pro, or Enterprise). AI matching ranks the best-fit partners by capabilities, capacity, and fit — replacing email RFQs and broker spreadsheets.',
      },
      {
        question: 'How does Enigma Pharma work for pharma buyers and CDMOs?',
        answer:
          'Pharma buyers register free, upload an NDA/CDA PDF with each RFQ, and publish to the project pool. CDMO partners browse by service category (API, formulation, fill-finish, biologics) and GMP certifications. Free CDMOs get view-only access; paid plans unlock bidding (20, 40, or unlimited bids per year). Admin approves upgrades — no online payment required.',
      },
      {
        question: 'How does Indianet pricing work?',
        answer:
          'Indianet offers a free supplier plan (admin-approved) plus paid tiers: Basic (₹1,65,000/yr), Plus (₹2,47,500/yr), Pro (₹3,51,000/yr), and Premium (₹11,25,000/yr). All paid plans are tax exclusive and available on annual or 6-month billing. Higher tiers add public profiles, verified badges, more RFQ responses, showcases, and advertising.',
      },
      {
        question: 'What is SolidXCad and who is it for?',
        answer:
          'SolidXCad is a cloud CAD workbench that turns engineering prompts into parametric STEP models. Engineering teams can inspect assemblies in 3D — with catalog fasteners, URDF robots, and multi-body structure — then export STL, G-code, and URDF directly from the browser.',
      },
    ],
  },
  {
    label: 'Implementation & Integration',
    faqs: [
      {
        question: 'Can Equvinoxis integrate with our existing systems?',
        answer:
          'Yes. Our platforms are designed with an API-first approach and integrate with SAP, Oracle, Tally, and most major ERP systems. We also support custom integrations for enterprise workflows.',
      },
      {
        question: 'How long does implementation typically take?',
        answer:
          'Most teams begin seeing measurable improvements within 30 days. Full rollout timelines depend on scope, but our onboarding process is structured to get you operational quickly with dedicated support.',
      },
      {
        question: 'Is training required for our team?',
        answer:
          'We provide structured onboarding, documentation, and ongoing support. Most users become comfortable with core workflows within 2–3 weeks, with our team available throughout adoption.',
      },
    ],
  },
  {
    label: 'Security, Support & Pricing',
    faqs: [
      {
        question: 'How secure is our manufacturing data?',
        answer:
          'We apply enterprise-grade security practices including encryption in transit and at rest, access controls, and regular audits. Our infrastructure is built to meet the standards expected by modern manufacturing organizations.',
      },
      {
        question: 'What support do you provide?',
        answer:
          'All plans include email support at info@equvinoxis.com. Pro and Enterprise partner plans on Enigma and Enigma Pharma include priority support, with Enterprise offering concierge deals and dedicated buyer matching.',
      },
      {
        question: 'Do you support small and mid-size manufacturers?',
        answer:
          'Absolutely. Our solutions scale from growing manufacturers to large enterprises. We offer flexible plans and can tailor product bundles based on your operational size and goals.',
      },
      {
        question: 'How does Enigma pricing work?',
        answer:
          'Buyer accounts are always free on both Enigma Manufacturing and Enigma Pharma — unlimited RFQ publishing. Partner plans range from Free (view-only pool) to Standard (₹3,42,000/yr), Pro (₹5,22,000/yr), and Enterprise (₹15,75,000/yr) with increasing bid limits and profile visibility. Manufacturing plans use RFQ requests; pharma CDMO plans use RFQ bids. Upgrades are admin-approved with no online payment.',
      },
    ],
  },
];

const allFaqs = faqCategories.flatMap((category) =>
  category.faqs.map((faq) => ({ ...faq, category: category.label }))
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredFaqs =
    activeCategory === 'All'
      ? allFaqs
      : allFaqs.filter((faq) => faq.category === activeCategory);

  return (
    <section className="bg-black text-white py-20 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-800/40 rounded-full px-4 py-2 mb-6">
              <HelpCircle className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Support Center</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Clear answers about our products, implementation, and how Equvinoxis supports modern manufacturing teams.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['All', ...faqCategories.map((c) => c.label)].map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => (
              <div
                key={`${faq.category}-${faq.question}`}
                className={`bg-gray-900/50 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'border-blue-500/50 shadow-lg shadow-blue-500/5' : 'border-gray-800 hover:border-gray-700'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-gray-900/50 transition-colors gap-4"
                >
                  <div className="flex-1">
                    <span className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-1 block">
                      {faq.category}
                    </span>
                    <span className="font-semibold text-lg text-white">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-400 flex-shrink-0 mt-1 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-5 text-gray-300 leading-relaxed border-t border-gray-800/50 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/40 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-gray-400 mb-6">
              Our team is ready to help you choose the right product or custom solution for your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Us
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="border border-gray-600 hover:border-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-900"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
