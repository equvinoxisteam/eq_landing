import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long until we see results?',
    answer: 'Most customers see measurable improvements within 30 days of implementation. Full ROI is typically achieved within 6-12 months, depending on your operation size and complexity.',
  },
  {
    question: 'Can Equvinoxis integrate with our existing systems?',
    answer: 'Yes! We integrate seamlessly with SAP, Oracle, Tally, and most major ERP systems. Our API-first architecture allows custom integrations with any system you use.',
  },
  {
    question: 'What makes Equvinoxis different from other platforms?',
    answer: 'While others focus on marketplace functionality, we provide complete manufacturing transformation. Our platform combines AI intelligence, supply chain networking, and enterprise software for end-to-end Industry 4.0 capabilities.',
  },
  {
    question: 'Is training required for our team?',
    answer: 'Yes, we provide comprehensive onboarding and ongoing support. Our team works with yours to ensure smooth adoption. Most users become proficient within 2-3 weeks.',
  },
  {
    question: 'What is the minimum contract period?',
    answer: 'We offer flexible contracts starting from 12 months. Enterprise clients can discuss custom terms with our sales team.',
  },
  {
    question: 'How secure is our data?',
    answer: 'We employ enterprise-grade security with ISO 27001, SOC 2 Type II certifications, 256-bit encryption, and regular security audits. Your data is protected by industry-leading standards.',
  },
  {
    question: 'Do you support small manufacturers?',
    answer: 'Absolutely! Our Starter plan is designed specifically for small manufacturers. We scale with your business as you grow.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'All plans include email support. Professional and Enterprise plans get priority support and dedicated success managers. We also provide 24/7 technical assistance for critical issues.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-400">Everything you need to know about Equvinoxis</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-900/50 transition-colors"
                >
                  <span className="font-semibold text-lg pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-5 text-gray-400">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  );
}
