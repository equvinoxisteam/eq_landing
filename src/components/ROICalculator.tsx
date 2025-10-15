import { useState } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';

export default function ROICalculator() {
  const [annualSpend, setAnnualSpend] = useState(10000000);
  const [supplierCount, setSupplierCount] = useState(50);
  const [procurementTime, setProcurementTime] = useState(40);
  const [qualityIssues, setQualityIssues] = useState(10);

  const costSavings = Math.round(annualSpend * 0.35);
  const timeSaved = Math.round(procurementTime * 0.6);
  const qualityImprovement = Math.round(qualityIssues * 0.7);
  const roiMonths = 8;

  return (
    <section className="bg-black text-white py-20 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Calculator className="w-10 h-10 text-blue-400" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Calculate Your <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">ROI</span>
              </h2>
            </div>
            <p className="text-xl text-gray-400">See how much you could save with Equvinoxis</p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-6">Your Current Metrics</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Annual Procurement Spend (₹)
                  </label>
                  <input
                    type="range"
                    min="1000000"
                    max="100000000"
                    step="1000000"
                    value={annualSpend}
                    onChange={(e) => setAnnualSpend(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="text-2xl font-bold text-blue-400 mt-2">
                    ₹{(annualSpend / 10000000).toFixed(1)} Cr
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Number of Suppliers
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={supplierCount}
                    onChange={(e) => setSupplierCount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="text-2xl font-bold text-blue-400 mt-2">{supplierCount}</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Weekly Procurement Hours
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={procurementTime}
                    onChange={(e) => setProcurementTime(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="text-2xl font-bold text-blue-400 mt-2">{procurementTime} hrs/week</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Monthly Quality Issues
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={qualityIssues}
                    onChange={(e) => setQualityIssues(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="text-2xl font-bold text-blue-400 mt-2">{qualityIssues} issues/month</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold">Your Potential Results</h3>
                </div>

                <div className="space-y-6">
                  <div className="bg-black/30 rounded-xl p-6 border border-gray-700">
                    <div className="text-sm text-gray-400 mb-1">Estimated Cost Savings</div>
                    <div className="text-4xl font-bold text-green-400">
                      ₹{(costSavings / 10000000).toFixed(2)} Cr
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Per year (35% average)</div>
                  </div>

                  <div className="bg-black/30 rounded-xl p-6 border border-gray-700">
                    <div className="text-sm text-gray-400 mb-1">Time Saved</div>
                    <div className="text-4xl font-bold text-cyan-400">{timeSaved} hrs</div>
                    <div className="text-sm text-gray-500 mt-1">Per week (60% reduction)</div>
                  </div>

                  <div className="bg-black/30 rounded-xl p-6 border border-gray-700">
                    <div className="text-sm text-gray-400 mb-1">Quality Improvement</div>
                    <div className="text-4xl font-bold text-purple-400">{qualityImprovement}%</div>
                    <div className="text-sm text-gray-500 mt-1">Fewer quality issues</div>
                  </div>

                  <div className="bg-black/30 rounded-xl p-6 border border-gray-700">
                    <div className="text-sm text-gray-400 mb-1">ROI Timeline</div>
                    <div className="text-4xl font-bold text-yellow-400">{roiMonths} months</div>
                    <div className="text-sm text-gray-500 mt-1">Time to full ROI</div>
                  </div>
                </div>

                <button className="w-full mt-8 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105">
                  Get Detailed ROI Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
