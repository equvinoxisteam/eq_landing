import { Shield, Lock, FileCheck, Globe } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    title: 'ISO 27001',
    description: 'International standard for information security management',
  },
  {
    icon: Lock,
    title: 'SOC 2 Type II',
    description: 'Rigorous security and privacy compliance',
  },
  {
    icon: FileCheck,
    title: 'GDPR Compliant',
    description: 'Full compliance with data protection regulations',
  },
  {
    icon: Globe,
    title: 'Indian Standards',
    description: 'Meets all national and international requirements',
  },
];

const securityFeatures = [
  '256-bit end-to-end encryption',
  'Multi-factor authentication (MFA)',
  'Regular third-party security audits',
  'Role-based access control',
  'Data backup and disaster recovery',
  'Secure API integrations',
  'Compliance monitoring',
  '24/7 security operations',
];

export default function Security() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 border-y border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Enterprise-Grade <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Security</span>
            </h2>
            <p className="text-xl text-gray-400">Your data is protected by industry-leading security standards</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-400">{cert.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Security Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-black/30 rounded-lg p-4 border border-gray-800"
                >
                  <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg">
              Trusted by 100+ manufacturers to protect their critical manufacturing data
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
