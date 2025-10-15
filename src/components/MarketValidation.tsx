import { TrendingUp, Users, DollarSign, Gauge } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '$17.4B',
    label: 'India Industry 4.0 Market by 2033',
    subtext: '12.40% CAGR Growth',
    color: 'text-blue-400',
  },
  {
    icon: Users,
    value: '1,800+',
    label: 'Active Manufacturing Clients',
    subtext: 'Across India',
    color: 'text-cyan-400',
  },
  {
    icon: DollarSign,
    value: '40%',
    label: 'Average Cost Savings',
    subtext: 'For our customers',
    color: 'text-green-400',
  },
  {
    icon: Gauge,
    value: '30%',
    label: 'Efficiency Improvement',
    subtext: 'Measured results',
    color: 'text-purple-400',
  },
];

export default function MarketValidation() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 border-y border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proven Results, <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Massive Market</span>
            </h2>
            <p className="text-xl text-gray-400">Backed by Make in India, Digital India, and SAMARTH Udyog initiatives</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 hover:scale-105"
                >
                  <Icon className={`w-10 h-10 ${stat.color} mb-4`} />
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.subtext}</div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Processing Over 1 Million Parts with Industry-Leading Precision</h3>
            <p className="text-gray-300 text-lg">
              Join the manufacturing revolution transforming India's industrial landscape
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
