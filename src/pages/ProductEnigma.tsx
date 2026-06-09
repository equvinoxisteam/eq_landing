import { Brain, Zap, Target, CheckCircle2, ArrowRight } from 'lucide-react';
import { PRODUCT_URLS } from '../constants/site';

export default function ProductEnigma() {
  return (
    <div className="pt-20 bg-black text-white">
      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-blue-900/30 border border-blue-800/50 rounded-full px-6 py-3 mb-6">
              <Brain className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 font-semibold">Enigma AI</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Where Intelligence Meets <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Manufacturing</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              AI-powered CNC partner matching in 60 seconds. Zero commission. 99.9% accuracy.
            </p>
            <a
              href={PRODUCT_URLS.enigma}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              Launch Enigma AI
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <Zap className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">60-Second Matching</h3>
                <p className="text-gray-400">AI analyzes your requirements and matches you with the perfect CNC partners instantly</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <Target className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">99.9% Accuracy</h3>
                <p className="text-gray-400">Machine learning ensures precise matching based on capabilities, capacity, and quality</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <CheckCircle2 className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Zero Commission</h3>
                <p className="text-gray-400">No hidden fees. Direct connections with manufacturers at transparent pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">How Enigma Works</h2>
            <div className="space-y-8">
              {[
                { step: '1', title: 'Upload Your Requirements', text: 'Share your technical drawings, specifications, and requirements' },
                { step: '2', title: 'AI Analyzes & Matches', text: 'Our AI engine evaluates thousands of manufacturers in seconds' },
                { step: '3', title: 'Get Perfect Matches', text: 'Receive ranked recommendations with pricing and lead times' },
                { step: '4', title: 'Connect & Order', text: 'Connect directly with manufacturers and place orders' },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center font-bold">
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
    </div>
  );
}
