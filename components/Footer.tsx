import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-leora-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-leora-green-500 text-sm">🌿</span>
              </div>
              <span className="text-2xl font-serif font-bold">Leora</span>
            </div>
            <p className="text-leora-green-100 text-sm leading-relaxed">
              Holistic Ayurvedic healing in Aberdeen, Scotland. 
              Bringing ancient wisdom to modern wellness.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-leora-green-100">
              <div className="flex items-start space-x-2">
                <span className="flex-shrink-0 mt-1">📍</span>
                <span>Leora Ayurveda Wellness Clinic<br />Aberdeen, Scotland, UK</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <a 
                  href="tel:+447378686559" 
                  className="hover:text-white transition-colors duration-200"
                  aria-label="Call Leora Wellness Clinic"
                >
                  +44 7378 686 559
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>🌐</span>
                <a 
                  href="https://www.leoraayurveda.co.uk" 
                  className="hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Leora Wellness website"
                >
                  www.leoraayurveda.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <Link 
                href="/about" 
                className="block text-sm text-leora-green-100 hover:text-white transition-colors duration-200"
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="block text-sm text-leora-green-100 hover:text-white transition-colors duration-200"
              >
                Services
              </Link>
              <Link 
                href="/programs" 
                className="block text-sm text-leora-green-100 hover:text-white transition-colors duration-200"
              >
                Programs
              </Link>
              <Link 
                href="/contact" 
                className="block text-sm text-leora-green-100 hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Services & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold">Services</h3>
            <div className="space-y-2 text-sm text-leora-green-100">
              <div>Ayurvedic Consultation</div>
              <div>Herbal Medicine</div>
              <div>Women&apos;s Health</div>
              <div>Detox Programs</div>
            </div>
            
            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/LeoraAyurveda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-leora-green-100 hover:text-white transition-colors duration-200"
                  aria-label="Follow us on Instagram"
                >
                  <span className="text-xl">📷</span>
                </a>
                <a
                  href="https://facebook.com/LeoraAyurveda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-leora-green-100 hover:text-white transition-colors duration-200"
                  aria-label="Follow us on Facebook"
                >
                  <span className="text-xl">📘</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-leora-green-600 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-leora-green-100">
              © {currentYear} Leora Ayurveda Wellness Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-leora-green-100">
              <Link 
                href="/privacy" 
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="mt-4 text-xs text-leora-green-200">
            <p>Consultations available both online and in-person</p>
            <p className="mt-1">
              <em>&quot;True wellness begins with balance&quot;</em>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
