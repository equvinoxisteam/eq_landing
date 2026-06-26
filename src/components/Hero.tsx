import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCT_URLS } from '../constants/site';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/vid_1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black/60 to-purple-900/40" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Software That Powers{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Modern Manufacturing
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Enigma AI, Enigma Pharma, Indianet, and SolidXCad — plus custom solutions built for your industry
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-12 animate-fade-in-up delay-300 max-w-3xl mx-auto">
            From sourcing partner matching and connected supply chains to text-to-manufacture-ready CAD, Equvinoxis
            helps manufacturers move faster. We also build custom software for industry-specific challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-400">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in-up delay-500">
            <a
              href={PRODUCT_URLS.enigma}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-blue-400 mb-2">Enigma AI</div>
              <div className="text-gray-400">CNC Partner Matching</div>
            </a>
            <a
              href={PRODUCT_URLS.enigmaPharma}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-emerald-400 mb-2">Enigma Pharma</div>
              <div className="text-gray-400">Pharma CDMO Sourcing</div>
            </a>
            <a
              href={PRODUCT_URLS.indianet}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-purple-400 mb-2">Indianet</div>
              <div className="text-gray-400">Connected Supply Chain</div>
            </a>
            <a
              href={PRODUCT_URLS.solidxcad}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-amber-400 mb-2">SolidXCad</div>
              <div className="text-gray-400">Cloud CAD Workbench</div>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
