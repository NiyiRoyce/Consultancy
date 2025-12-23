'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-gray-900'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 border border-gray-800 group-hover:border-white transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-sm tracking-tight">AA</span>
              </div>
            </div>
            <span className="text-xs tracking-[0.2em] uppercase text-gray-600 group-hover:text-white transition-colors duration-300 hidden sm:block font-medium">
              Adeniyi Adebowale
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group px-4 py-2"
              >
                <span className={`text-xs tracking-wide font-light transition-colors duration-300 ${
                  isActive(item.href) 
                    ? 'text-white' 
                    : 'text-gray-500 group-hover:text-white'
                }`}>
                  {item.name}
                </span>
                {/* Active indicator - only show for active links */}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-white"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-500 hover:text-white p-2 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden border-t border-gray-900 bg-black transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-6 py-6 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="group relative block"
            >
              <div className={`flex items-center justify-between py-4 border-b border-gray-900 group-hover:border-gray-800 transition-all duration-300 ${
                isActive(item.href) ? 'border-gray-700' : ''
              }`}>
                <span className={`text-sm font-light transition-colors duration-300 ${
                  isActive(item.href) 
                    ? 'text-white' 
                    : 'text-gray-500 group-hover:text-white'
                }`}>
                  {item.name}
                </span>
                <span className="text-gray-700 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};