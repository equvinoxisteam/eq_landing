import { Network, Package, TrendingUp, Shield } from 'lucide-react';

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
            <div className="inline-flex items-center gap-3 bg-gray-800 border border-gray-700 rounded-lg px-8 py-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold text-gray-300">Coming Soon</span>
            </div>
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
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-800/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Raw Materials</h3>
                <p className="text-gray-300 mb-4">Access to verified raw material suppliers with quality guarantees</p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Real-time pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Quality certifications
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Inventory management
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-800/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Machinery & Equipment</h3>
                <p className="text-gray-300 mb-4">Connect with machine suppliers and maintenance services</p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Equipment marketplace
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Maintenance scheduling
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Spare parts sourcing
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 border border-green-800/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Logistics & Tracking</h3>
                <p className="text-gray-300 mb-4">End-to-end logistics management and real-time tracking</p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Multi-modal logistics
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Live shipment tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Automated documentation
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-800/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Compliance & Standards</h3>
                <p className="text-gray-300 mb-4">Automated compliance management and certification tracking</p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    ISO tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    Audit management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    Documentation automation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
