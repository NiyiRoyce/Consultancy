"use client";
import React, { useState } from "react";
import { Code2, Database, Cloud, Layers, Shield, Zap, Server, GitBranch } from 'lucide-react';

export default function AboutSection() {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStack = {
    languages: [
      { name: "Python", icon: "🐍" },
      { name: "TypeScript", icon: "TS" },
      { name: "JavaScript", icon: "JS" },
      { name: "SQL", icon: "⚡" }
    ],
    frameworks: [
      { name: "Node.js", icon: "⬢" },
      { name: "Next.js", icon: "▲" },
      { name: "NestJS", icon: "🐈" },
      { name: "Express", icon: "E" },
      { name: "FastAPI", icon: "⚡" },
      { name: "Django", icon: "🎸" }
    ],
    databases: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Redis", icon: "◆" }
    ],
    infrastructure: [
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "CI/CD", icon: "🔄" },
      { name: "Git", icon: "⎇" }
    ]
  };

  const focusAreas = [
    {
      icon: Code2,
      title: "Backend & API Design",
      description: "RESTful and event-driven architectures built for clarity and extensibility"
    },
    {
      icon: Layers,
      title: "Distributed Systems",
      description: "Microservices, message queues, and service orchestration at scale"
    },
    {
      icon: Server,
      title: "System Reliability",
      description: "Fault tolerance, graceful degradation, and monitoring"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "AWS deployments, containerization, and infrastructure as code"
    },
    {
      icon: Zap,
      title: "DevOps & Automation",
      description: "CI/CD pipelines and tooling that accelerates delivery"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Secure authentication, payment processing, and data protection"
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-24">
          <div className="inline-block mb-4">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-medium">
              About
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-6">
            Building Systems<br />That Scale
          </h2>
        </div>

        {/* Main Content */}
        <div className="space-y-32">
          
          {/* Introduction */}
          <div className="max-w-3xl">
            <div className="space-y-6 text-gray-500 text-base leading-relaxed font-light">
              <p className="text-gray-400">
                I'm a backend software engineer focused on building production systems that scale. I design and implement APIs, distributed services, and cloud infrastructure that handle real-world traffic and complexity.
              </p>
              <p>
                My work centers on backend architecture, concurrency, fault tolerance, and system reliability. I care deeply about clean code, thoughtful abstractions, and infrastructure that supports fast iteration without breaking.
              </p>
              <p>
                I've built secure payment platforms, event-driven microservices, and high-throughput data pipelines across different industries. My approach prioritizes maintainability, observability, and developer experience alongside performance.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm tracking-[0.3em] uppercase text-gray-600 font-medium mb-12">Technology Stack</h3>
            
            <div className="space-y-16">
              {/* Languages */}
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-900">
                  <Code2 className="w-4 h-4 text-gray-700" />
                  <div className="text-xs tracking-[0.2em] uppercase text-gray-700 font-medium">Languages</div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {techStack.languages.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group px-5 py-2.5 bg-black border border-gray-900 text-gray-400 text-sm font-light hover:border-gray-700 hover:text-white transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base opacity-60 group-hover:opacity-100 transition-opacity">{tech.icon}</span>
                        <span>{tech.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-900">
                  <Layers className="w-4 h-4 text-gray-700" />
                  <div className="text-xs tracking-[0.2em] uppercase text-gray-700 font-medium">Frameworks</div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {techStack.frameworks.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group px-5 py-2.5 bg-black border border-gray-900 text-gray-400 text-sm font-light hover:border-gray-700 hover:text-white transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base font-medium opacity-60 group-hover:opacity-100 transition-opacity">{tech.icon}</span>
                        <span>{tech.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-900">
                  <Database className="w-4 h-4 text-gray-700" />
                  <div className="text-xs tracking-[0.2em] uppercase text-gray-700 font-medium">Databases</div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {techStack.databases.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group px-5 py-2.5 bg-black border border-gray-900 text-gray-400 text-sm font-light hover:border-gray-700 hover:text-white transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base opacity-60 group-hover:opacity-100 transition-opacity">{tech.icon}</span>
                        <span>{tech.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Infrastructure */}
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-900">
                  <GitBranch className="w-4 h-4 text-gray-700" />
                  <div className="text-xs tracking-[0.2em] uppercase text-gray-700 font-medium">Infrastructure</div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {techStack.infrastructure.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group px-5 py-2.5 bg-black border border-gray-900 text-gray-400 text-sm font-light hover:border-gray-700 hover:text-white transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base opacity-60 group-hover:opacity-100 transition-opacity">{tech.icon}</span>
                        <span>{tech.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Focus */}
          <div>
            <h3 className="text-sm tracking-[0.3em] uppercase text-gray-600 font-medium mb-12">Core Focus</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-900">
              {focusAreas.map((area, idx) => {
                const Icon = area.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-black p-8 transition-all duration-300 cursor-pointer relative"
                  >
                    {/* Top border on hover */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <Icon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold mb-3 text-base tracking-tight">
                          {area.title}
                        </div>
                        <div className="text-gray-600 text-sm leading-relaxed font-light group-hover:text-gray-500 transition-colors duration-300">
                          {area.description}
                        </div>
                      </div>
                    </div>

                    {/* Subtle background on hover */}
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex items-center justify-between border-t border-gray-900 pt-16">
            <div>
              <p className="text-sm text-gray-600 mb-2 tracking-wide uppercase text-[10px] font-medium">
                Let's work together
              </p>
              <h3 className="text-3xl font-semibold tracking-tight">
                Ready to start<br />your project?
              </h3>
            </div>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-8 py-4 border border-gray-800 text-white text-sm font-medium tracking-wide hover:border-white hover:bg-white hover:text-black transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-black text-sm font-medium tracking-wide hover:bg-gray-100 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}