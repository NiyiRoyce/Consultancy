import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-white mb-3">Adeniyi Adebowale</h3>
            <p className="text-zinc-500 text-sm max-w-md leading-relaxed">
              Software engineer specializing in scalable systems, machine learning, and cloud architecture.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="text-zinc-500 hover:text-white text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="text-zinc-500 hover:text-white text-sm transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#projects" className="text-zinc-500 hover:text-white text-sm transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-500 hover:text-white text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://github.com/niyiroyce" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white text-sm transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/neyfrosh" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white text-sm transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://medium.com/@niyi.py" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white text-sm transition-colors">
                  Medium
                </a>
              </li>
              <li>
                <a href="mailto:niyi.py@gmail.com" className="text-zinc-500 hover:text-white text-sm transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900">
          <p className="text-center text-zinc-600 text-sm">
            © {currentYear} Adeniyi Adebowale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};