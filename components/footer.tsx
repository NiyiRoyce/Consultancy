import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-5">
            <div className="mb-6">
              <h3 className="text-2xl font-bold tracking-tight mb-3">
                Adeniyi Adebowale
              </h3>
              <div className="w-12 h-px bg-white"></div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-light max-w-sm">
              Software engineer specializing in scalable systems, machine learning, and cloud architecture.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-gray-600 font-medium mb-6">
              Navigation
            </h4>
            <ul className="space-y-1">
              <li>
                <a 
                  href="#about" 
                  className="group flex items-center justify-between py-3 border-b border-gray-900 hover:border-gray-800 transition-all duration-300"
                >
                  <span className="text-white text-sm font-light">About</span>
                  <span className="text-gray-700 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">→</span>
                </a>
              </li>
              <li>
                <a 
                  href="#work" 
                  className="group flex items-center justify-between py-3 border-b border-gray-900 hover:border-gray-800 transition-all duration-300"
                >
                  <span className="text-white text-sm font-light">Work</span>
                  <span className="text-gray-700 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">→</span>
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="group flex items-center justify-between py-3 border-b border-gray-900 hover:border-gray-800 transition-all duration-300"
                >
                  <span className="text-white text-sm font-light">Projects</span>
                  <span className="text-gray-700 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">→</span>
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="group flex items-center justify-between py-3 border-b border-gray-900 hover:border-gray-800 transition-all duration-300"
                >
                  <span className="text-white text-sm font-light">Contact</span>
                  <span className="text-gray-700 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-1 md:col-span-4">
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-gray-600 font-medium mb-6">
              Connect
            </h4>
            <ul className="space-y-1">
              <li>
                <a 
                  href="https://github.com/niyiroyce" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center justify-between py-3 border-b border-gray-900 hover:border-gray-800 transition-all duration-300"
                >
                  <span className="text-white text-sm font-light">GitHub</span>
                  <span className="text-gray-700 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">↗</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/neyfrosh" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center justify-between py-3 border-b border-gray-900 hover:border-gray-800 transition-all duration-300"
                >
                  <span className="text-white text-sm font-light">LinkedIn</span>
                  <span className="text-gray-700 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">↗</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://medium.com/@niyi.py" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center justify-between py-3 border-b border-gray-900 hover:border-gray-800 transition-all duration-300"
                >
                  <span className="text-white text-sm font-light">Medium</span>
                  <span className="text-gray-700 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">↗</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:niyi.py@gmail.com" 
                  className="group flex items-center justify-between py-3 border-b border-gray-900 hover:border-gray-800 transition-all duration-300"
                >
                  <span className="text-white text-sm font-light">Email</span>
                  <span className="text-gray-700 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs font-light tracking-wide">
            © {currentYear} Adeniyi Adebowale. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-gray-600 text-xs font-light">
              Available for new opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};