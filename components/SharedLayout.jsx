"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import Link from 'next/link';

const SharedLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const WHATSAPP_NUMBER = "8801234567890";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800' : 'bg-transparent'
      }`}>
        <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-[1400px]">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">ALFAIIT</h1>
                <p className="text-xs text-slate-400 font-mono">Alfa Institute of IT</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/#courses" className="text-slate-300 hover:text-white transition-colors">Courses</Link>
              <Link href="/#about" className="text-slate-300 hover:text-white transition-colors">About</Link>
              <Link href="/#contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link href="/#contact" className="px-4 py-2 text-slate-300 hover:text-white transition-colors">
                Get in Touch
              </Link>
              <Link href="/#courses" className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all shine">
                Browse Courses
              </Link>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-6 py-6 space-y-4">
              <Link href="/#courses" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-white transition-colors">Courses</Link>
              <Link href="/#about" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-white transition-colors">About</Link>
              <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <div className="pt-20">
        {children}
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-16 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold gradient-text">ALFAIIT</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Alfa Institute of Information Technology - Learn programming from industry experts.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-5">Courses</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="/#courses" className="hover:text-white transition-colors">iOS Development</Link></li>
                <li><Link href="/#courses" className="hover:text-white transition-colors">Python</Link></li>
                <li><Link href="/#courses" className="hover:text-white transition-colors">Django</Link></li>
                <li><Link href="/#courses" className="hover:text-white transition-colors">PHP & Laravel</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5">Quick Links</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5">Contact</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>Dhaka, Bangladesh</li>
                <li>+880 1234-567890</li>
                <li>info@alfaiit.com</li>
                <li>
                  <button 
                    onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    WhatsApp Support
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-800 text-center text-sm text-slate-400">
            <p>&copy; 2026 ALFAIIT - Alfa Institute of Information Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SharedLayout;