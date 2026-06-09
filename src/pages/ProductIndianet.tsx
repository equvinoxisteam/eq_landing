import { Network, Package, TrendingUp, Shield, ArrowRight } from 'lucide-react';
import { PRODUCT_URLS } from '../constants/site';

export default function ProductIndianet() {
  return (
    <div className="pt-20 bg-black text-white">
      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-purple-900/30 border border-purple-800/50 rounded-full px-6 py-3 mb-6">
              <Network className="w-6 h-6 text-purple-400" />
              <span className="text-purple-400 font-semibold">Indianet</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Manufacturing. Connected. <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Intelligent.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              End-to-end supply chain platform spanning raw materials, machines, logistics, and compliance.
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

      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
                <Package className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-purple-400 mb-2">Worldwide</div>
                <p className="text-gray-400">Verified Suppliers</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
                <TrendingUp className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-pink-400 mb-2">Real-Time</div>
                <p className="text-gray-400">Supply Chain Tracking</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
                <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                <p className="text-gray-400">Compliance Coverage</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
                <Network className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-400 mb-2">Seamless</div>
                <p className="text-gray-400">Integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Complete Manufacturing Ecosystem</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Raw Materials',
                  desc: 'Access to verified raw material suppliers with quality guarantees',
                  color: 'from-purple-900/30 to-pink-900/30',
                  border: 'border-purple-800/50',
                  dot: 'bg-purple-400',
                  items: ['Real-time pricing', 'Quality certifications', 'Inventory management'],
                },
                {
                  title: 'Machinery & Equipment',
                  desc: 'Connect with machine suppliers and maintenance services',
                  color: 'from-blue-900/30 to-cyan-900/30',
                  border: 'border-blue-800/50',
                  dot: 'bg-blue-400',
                  items: ['Equipment marketplace', 'Maintenance scheduling', 'Spare parts sourcing'],
                },
                {
                  title: 'Logistics & Tracking',
                  desc: 'End-to-end logistics management and real-time tracking',
                  color: 'from-green-900/30 to-teal-900/30',
                  border: 'border-green-800/50',
                  dot: 'bg-green-400',
                  items: ['Multi-modal logistics', 'Live shipment tracking', 'Automated documentation'],
                },
                {
                  title: 'Compliance & Standards',
                  desc: 'Automated compliance management and certification tracking',
                  color: 'from-orange-900/30 to-red-900/30',
                  border: 'border-orange-800/50',
                  dot: 'bg-orange-400',
                  items: ['ISO tracking', 'Audit management', 'Documentation automation'],
                },
              ].map((block) => (
                <div
                  key={block.title}
                  className={`bg-gradient-to-br ${block.color} border ${block.border} rounded-2xl p-8`}
                >
                  <h3 className="text-2xl font-bold mb-4">{block.title}</h3>
                  <p className="text-gray-300 mb-4">{block.desc}</p>
                  <ul className="space-y-2 text-gray-400">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${block.dot}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
