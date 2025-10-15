import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        <source
          src="/vid_1.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black/60 to-purple-900/40" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
         

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Building Intelligence Into{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Manufacturing
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Custom AI Software Solutions & Intelligent Products for Modern Manufacturing
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-12 animate-fade-in-up delay-300">
            We build custom AI software tailored to your needs and offer powerful products that transform operations. From data research to actionable insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-400">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            {/* 
            <a
              href="tel:8008030203"
              className="group border-2 border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 hover:bg-gray-900"
            >
              Call Us
            </a>
            */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up delay-500">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400 mb-2">Custom AI</div>
              <div className="text-gray-400">Software Development</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2">3 Products</div>
              <div className="text-gray-400">Ready-to-Use Solutions</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-400 mb-2">Data Research</div>
              <div className="text-gray-400">Insights & Analytics</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
