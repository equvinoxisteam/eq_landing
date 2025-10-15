import { Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* === Top Section === */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left justify-items-center md:justify-items-stretch mb-12">
            
            {/* Logo and About */}
            <div className="flex flex-col items-center md:items-start">
              <img
                src="/indianet png.png"
                alt="Equvinoxis"
                className="h-14 mb-4"
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
                Transforming Indian manufacturing through intelligent automation
                and Industry 4.0 solutions.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/equvinoxis/?viewAsMember=true"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/equvinoxis?igsh=MW9hZDEyaDF4c2dlZA%3D%3D&utm_source=qr"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="mailto:team@equvinoxis.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label="Mail"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Products */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold text-lg mb-4 text-white">Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="products/enigma"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Enigma AI
                  </a>
                </li>
                <li>
                  <a
                    href="products/indianet"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Indianet Platform
                  </a>
                </li>
                <li>
                  <a
                    href="/products/SuperMemory"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    MemoryX AI
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold text-lg mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/case-studies"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* === Resources (Commented for later use) === */}
            {/*
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            */}
          </div>

          {/* === Bottom Section === */}
          <div className="border-t border-gray-800 pt-6 w-full text-center">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Equvinoxis. All rights reserved.
            </p>
            {/*
            <div className="flex justify-center gap-6 mt-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
            */}
          </div>
        </div>
      </div>
    </footer>
  );
}
