import { Linkedin, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, PRODUCT_URLS, PRODUCT_TAGS, INDIANET_EXPRESS_NAME } from '../constants/site';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left justify-items-center md:justify-items-stretch mb-12">
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
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-gray-300 hover:text-purple-400 transition-colors text-sm mb-4"
              >
                {CONTACT_EMAIL}
              </a>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/equvinoxis/?viewAsMember=true"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/equvinoxis?igsh=MW9hZDEyaDF4c2dlZA%3D%3D&utm_source=qr"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label="Mail"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold text-lg mb-4 text-white">Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/products/enigma"
                    className="text-gray-400 hover:text-white transition-colors block"
                  >
                    <span className="block">Enigma</span>
                    <span className="text-xs text-gray-600">{PRODUCT_TAGS.enigma}</span>
                  </Link>
                </li>
                <li>
                  <a
                    href={PRODUCT_URLS.enigmaPharma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors block"
                  >
                    <span className="block">Enigma Pharma</span>
                    <span className="text-xs text-gray-600">Pharma CDMO Sourcing</span>
                  </a>
                </li>
                <li>
                  <Link
                    to="/products/indianet"
                    className="text-gray-400 hover:text-white transition-colors block"
                  >
                    <span className="block">Indianet</span>
                    <span className="text-xs text-gray-600">{PRODUCT_TAGS.indianet}</span>
                  </Link>
                </li>
                <li>
                  <a
                    href={PRODUCT_URLS.indianetExpress}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors block"
                  >
                    <span className="block">{INDIANET_EXPRESS_NAME}</span>
                    <span className="text-xs text-gray-600">{PRODUCT_TAGS.indianetExpress}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={PRODUCT_URLS.solidxcad}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    SolidXCad
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold text-lg mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 w-full text-center">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Equvinoxis. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
