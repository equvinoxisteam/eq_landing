import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section className="bg-black text-white py-20 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-900/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl font-bold">The Challenge</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span>Off-the-shelf software rarely fits unique manufacturing needs</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span>Data exists but insights are buried without proper analysis</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span>Manual processes waste time and create bottlenecks</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span>Legacy systems don't integrate with modern tools</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span>Lack of AI expertise to leverage emerging technology</span>
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-900/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
                <h2 className="text-3xl font-bold">What We Do</h2>
              </div>
              <p className="text-xl text-gray-300 mb-6">
                Equvinoxis builds custom AI software and offers powerful products that solve real manufacturing challenges.
              </p>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span><strong className="text-white">Custom Development:</strong> Bespoke AI solutions built for your needs</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span><strong className="text-white">Ready Products:</strong> Proven solutions you can use immediately</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span><strong className="text-white">Data Research:</strong> Turn your data into actionable insights</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span><strong className="text-white">Integration:</strong> Connect everything seamlessly</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
