import {
  Layers,
  ArrowRight,
  FileCode,
  Rotate3d,
  Download,
  Wrench,
  Bot,
} from 'lucide-react';
import { PRODUCT_URLS } from '../constants/site';
import ProductScreenshot from '../components/ProductScreenshot';

const exportFormats = ['STEP', 'STL', 'G-code', 'URDF'];

export default function ProductSolidXCad() {
  return (
    <div className="pt-20 bg-black text-white">
      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              From Prompt to <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">STEP</span> in One Engineering Workspace
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Sign in to generate parametric geometry, inspect assemblies in 3D, and export STL, G-code, and URDF — all in your browser.
            </p>
            <a
              href={PRODUCT_URLS.solidxcad}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/30"
            >
              Sign In to SolidXCad
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <ProductScreenshot
        src="/solidxcad.PNG"
        alt="SolidXCad cloud CAD workbench showing a parametric spur gear model with STEP export and in-browser 3D inspection tools"
        title="SolidXCad — cloud CAD workbench"
        description="Generate parametric STEP models, tune dimensions in real time, and inspect assemblies with orbit, measure, and section tools — all in the browser."
        accentClass="from-amber-400 to-orange-400"
      />

      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <FileCode className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Text-to-STEP</h3>
                <p className="text-gray-400">
                  Generate parametric B-rep models from engineering descriptions — precise solid geometry, not just meshes.
                </p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <Layers className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Assemblies & Robots</h3>
                <p className="text-gray-400">
                  Build assemblies with catalog fasteners, URDF robots, and multi-body structure for real engineering workflows.
                </p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <Rotate3d className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">In-Browser CAD Workbench</h3>
                <p className="text-gray-400">
                  Orbit, measure, section, and export directly in the browser — no desktop install required.
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
                  title: 'Sign In & Describe Your Design',
                  text: 'Enter engineering descriptions, dimensions, and functional requirements as a natural-language prompt.',
                },
                {
                  step: '2',
                  title: 'Generate Parametric Geometry',
                  text: 'SolidXCad produces parametric B-rep STEP models with manufacturing-aware features from your prompt.',
                },
                {
                  step: '3',
                  title: 'Inspect in the 3D Workbench',
                  text: 'Orbit assemblies, take measurements, apply section views, and validate structure before export.',
                },
                {
                  step: '4',
                  title: 'Export for Production & Robotics',
                  text: 'Download STEP, STL, G-code, or URDF for machining, 3D printing, simulation, and robot deployment.',
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
            <h2 className="text-4xl font-bold mb-12 text-center">Engineering Workspace Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-800/50 rounded-2xl p-8">
                <Wrench className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Parametric B-Rep & Assemblies</h3>
                <p className="text-gray-300 mb-4">
                  Go beyond visual meshes with true solid modeling — assemblies, fasteners from catalog, and multi-body structure.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Text-to-STEP parametric B-rep generation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Catalog fasteners and assembly hierarchy
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Multi-body structure inspection
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-800/50 rounded-2xl p-8">
                <Bot className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Robotics & Export Pipeline</h3>
                <p className="text-gray-300 mb-4">
                  From CAD to shop floor or simulation — export formats for machining, printing, and robotic systems.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    URDF robot model generation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    STL and G-code for additive & CNC
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    STEP for downstream CAD/CAM tools
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center">
              <Download className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Export Formats</h3>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {exportFormats.map((format) => (
                  <span
                    key={format}
                    className="px-4 py-2 bg-amber-900/30 border border-amber-800/50 rounded-full text-amber-300 font-semibold text-sm"
                  >
                    {format}
                  </span>
                ))}
              </div>
              <a
                href={PRODUCT_URLS.solidxcad}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Open Cloud CAD Workbench
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
