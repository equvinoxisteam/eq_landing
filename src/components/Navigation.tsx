import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { PRODUCT_TAGS } from '../constants/site';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/indianet png copy.png"
              alt="Equvinoxis"
              className="h-12 w-12"
            />
            <span className="text-2xl font-bold text-white">Equvinoxis</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>

            <div 
              className="relative group"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Products
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-72 bg-gray-900 border border-gray-800 rounded-lg shadow-xl py-2 transition-all duration-200 ${
                  productsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <Link
                  to="/products/enigma"
                  className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  <div className="font-semibold">Enigma</div>
                  <div className="text-xs text-gray-500">{PRODUCT_TAGS.enigma}</div>
                </Link>
                <Link
                  to="/products/indianet"
                  className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  <div className="font-semibold">Indianet</div>
                  <div className="text-xs text-gray-500">{PRODUCT_TAGS.indianet}</div>
                </Link>
                <Link
                  to="/products/solidxcad"
                  className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  <div className="font-semibold">SolidXCad</div>
                  <div className="text-xs text-gray-500">{PRODUCT_TAGS.solidxcad}</div>
                </Link>
              </div>
            </div>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              About
            </Link>

            
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                Home
              </Link>

              <div>
                <div className="text-sm font-medium text-gray-400 mb-2">Products</div>
                <div className="flex flex-col gap-2 pl-4">
                  <Link
                    to="/products/enigma"
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-gray-300"
                  >
                    <span className="block">Enigma</span>
                    <span className="text-xs text-gray-500">{PRODUCT_TAGS.enigma}</span>
                  </Link>
                  <Link
                    to="/products/indianet"
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-gray-300"
                  >
                    <span className="block">Indianet</span>
                    <span className="text-xs text-gray-500">{PRODUCT_TAGS.indianet}</span>
                  </Link>
                  <Link
                    to="/products/solidxcad"
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-gray-300"
                  >
                    <span className="block">SolidXCad</span>
                    <span className="text-xs text-gray-500">{PRODUCT_TAGS.solidxcad}</span>
                  </Link>
                </div>
              </div>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  isActive('/contact') ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                Contact
              </Link>

              <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm text-center"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
