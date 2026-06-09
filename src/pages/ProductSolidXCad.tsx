import { Box, FileText, Layers, ArrowRight, Ruler, Factory } from 'lucide-react';
import { PRODUCT_URLS } from '../constants/site';

export default function ProductSolidXCad() {
  return (
    <div className="pt-20 bg-black text-white">
      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-amber-900/30 border border-amber-800/50 rounded-full px-6 py-3 mb-6">
              <Box className="w-6 h-6 text-amber-400" />
              <span className="text-amber-400 font-semibold">SolidXCad</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Text to <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Manufacture-Ready</span> CAD
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Generate production-grade CAD models from plain text. SolidXCad turns design intent into
              fully detailed, manufacturing-ready 3D models — ready for CNC, tooling, and shop-floor workflows.
            </p>
            <a
              href={PRODUCT_URLS.solidxcad}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/30"
            >
              Launch SolidXCad
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
                <FileText className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Text-to-CAD Generation</h3>
                <p className="text-gray-400">
                  Describe parts, assemblies, or design requirements in natural language and receive structured CAD output in minutes.
                </p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <Ruler className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Manufacturing-Ready Models</h3>
                <p className="text-gray-400">
                  Models are built with tolerances, features, and geometry suited for real production — not just visual prototypes.
                </p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <Factory className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Shop-Floor Ready</h3>
                <p className="text-gray-400">
                  Export and use outputs across CNC programming, tooling design, and downstream manufacturing workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">How SolidXCad Works</h2>
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Describe Your Design',
                  text: 'Enter specifications, dimensions, materials, and functional requirements in plain text.',
                },
                {
                  step: '2',
                  title: 'AI Builds the CAD Model',
                  text: 'SolidXCad interprets your intent and generates precise 3D geometry with manufacturing-aware features.',
                },
                {
                  step: '3',
                  title: 'Review & Refine',
                  text: 'Inspect the model, iterate with updated prompts, and validate design intent before production.',
                },
                {
                  step: '4',
                  title: 'Export for Manufacturing',
                  text: 'Download manufacture-ready CAD files and move directly into machining, tooling, or production planning.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center font-bold">
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

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Built for Real Manufacturing</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-800/50 rounded-2xl p-8">
                <Layers className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">From Concept to CAD</h3>
                <p className="text-gray-300 mb-4">
                  Accelerate early-stage design by converting ideas into editable CAD without starting from a blank canvas.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Rapid design iteration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Parametric-ready geometry
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Reduced design cycle time
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-800/50 rounded-2xl p-8">
                <Factory className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Production-Grade Output</h3>
                <p className="text-gray-300 mb-4">
                  Every model is oriented toward manufacturability — so engineering and shop teams can act on outputs immediately.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    CNC-ready deliverables
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    Tooling and fixture support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    Consistent manufacturing standards
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
