import { Zap, Brain, TrendingUp, Target } from 'lucide-react';

export default function ProductSuperMemory() {
  return (
    <div className="pt-20 bg-black text-white">
      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-green-900/30 border border-green-800/50 rounded-full px-6 py-3 mb-6">
              <Zap className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-semibold">MemoryX AI</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Memory That Manufactures <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Excellence</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              AI learns from every operation for constant performance improvement. Predictive, contextual analytics.
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
            <h2 className="text-4xl font-bold mb-12 text-center">Intelligent Learning System</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <Brain className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Continuous Learning</h3>
                <p className="text-gray-400">AI analyzes every operation, learning patterns and optimizing processes automatically</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <TrendingUp className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Predictive Analytics</h3>
                <p className="text-gray-400">Forecast issues before they occur with advanced machine learning models</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <Target className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Contextual Insights</h3>
                <p className="text-gray-400">Get actionable recommendations based on your specific manufacturing context</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Key Capabilities</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 border border-green-800/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Predictive Maintenance</h3>
                <p className="text-gray-300 mb-4">
                  Prevent costly breakdowns by predicting when equipment needs maintenance. SuperMemory analyzes machine data, usage patterns, and historical failures to schedule maintenance before issues occur.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">90%</div>
                    <div className="text-sm text-gray-400">Fewer Breakdowns</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-teal-400 mb-1">50%</div>
                    <div className="text-sm text-gray-400">Reduced Downtime</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400 mb-1">30%</div>
                    <div className="text-sm text-gray-400">Lower Maintenance Costs</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Quality Optimization</h3>
                <p className="text-gray-300 mb-4">
                  Automatically identify quality issues and their root causes. Learn from every defect to continuously improve manufacturing processes and reduce rejection rates.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400 mb-1">75%</div>
                    <div className="text-sm text-gray-400">Fewer Defects</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-400 mb-1">60%</div>
                    <div className="text-sm text-gray-400">Faster Root Cause Analysis</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">85%</div>
                    <div className="text-sm text-gray-400">Quality Consistency</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-900/30 to-yellow-900/30 border border-orange-800/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Cost Reduction Insights</h3>
                <p className="text-gray-300 mb-4">
                  Discover hidden cost-saving opportunities through intelligent analysis of your operations. Get specific, actionable recommendations to reduce waste and optimize resource usage.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-400 mb-1">35%</div>
                    <div className="text-sm text-gray-400">Average Cost Savings</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">40%</div>
                    <div className="text-sm text-gray-400">Waste Reduction</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">25%</div>
                    <div className="text-sm text-gray-400">Energy Savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
