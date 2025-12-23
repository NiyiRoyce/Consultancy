"use client";
import React, { useState } from "react";
import {
  Code2,
  Database,
  Cloud,
  Layers,
  Shield,
  Zap,
  Server,
  GitBranch,
} from "lucide-react";

export default function AboutSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techStack = {
    languages: [
      { name: "Python", icon: "🐍" },
      { name: "TypeScript", icon: "TS" },
      { name: "JavaScript", icon: "JS" },
      { name: "SQL", icon: "⚡" },
    ],
    frameworks: [
      { name: "Node.js", icon: "⬢" },
      { name: "Next.js", icon: "▲" },
      { name: "NestJS", icon: "🐈" },
      { name: "Express", icon: "E" },
      { name: "FastAPI", icon: "⚡" },
      { name: "Django", icon: "🎸" },
    ],
    databases: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Redis", icon: "◆" },
    ],
    infrastructure: [
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "CI/CD", icon: "🔄" },
      { name: "Git", icon: "⎇" },
    ],
  };

  const focusAreas = [
    {
      icon: Code2,
      title: "Backend & API Design",
      description:
        "RESTful and event-driven architectures built for clarity and extensibility",
    },
    {
      icon: Layers,
      title: "Distributed Systems",
      description:
        "Microservices, message queues, and service orchestration at scale",
    },
    {
      icon: Server,
      title: "System Reliability",
      description: "Fault tolerance, graceful degradation, and monitoring",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "AWS deployments, containerization, and infrastructure as code",
    },
    {
      icon: Zap,
      title: "DevOps & Automation",
      description: "CI/CD pipelines and tooling that accelerates delivery",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Secure authentication, payment processing, and data protection",
    },
  ];

  const TechItem = ({ tech }: { tech: { name: string; icon: string } }) => (
    <div
      className="group relative px-5 py-2.5 border border-gray-800 text-white text-sm font-medium hover:border-gray-600 transition-all duration-300 cursor-pointer overflow-hidden"
      onMouseEnter={() => setHoveredTech(tech.name)}
      onMouseLeave={() => setHoveredTech(null)}
    >
      <div className="relative z-10 flex items-center gap-2.5">
        <span className="text-base">{tech.icon}</span>
        <span>{tech.name}</span>
      </div>

      {/* bg-white/5 hover overlay */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );

  return (
    <div className="bg-black text-white">
      <section className="min-h-screen px-6 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-24">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-medium block mb-4">
              About
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
              Building Systems
              <br />
              That Scale
            </h1>
          </div>

          <div className="space-y-32">
            {/* Intro */}
            <div className="max-w-3xl space-y-6 text-gray-500 text-base font-light">
              <p>
                I'm a backend software engineer focused on building production
                systems that scale. I design and implement APIs, distributed
                services, and cloud infrastructure that handle real-world
                traffic and complexity.
              </p>
              <p>
                My work centers on backend architecture, concurrency, fault
                tolerance, and system reliability. I care deeply about clean
                code, thoughtful abstractions, and infrastructure that supports
                fast iteration without breaking.
              </p>
              <p>
                I've built secure payment platforms, event-driven microservices,
                and high-throughput data pipelines across different industries.
                My approach prioritizes maintainability, observability, and
                developer experience alongside performance.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-medium mb-12">
                Technology Stack
              </h3>

              <div className="space-y-16">
                {[
                  ["Languages", Code2, techStack.languages],
                  ["Frameworks", Layers, techStack.frameworks],
                  ["Databases", Database, techStack.databases],
                  ["Infrastructure", GitBranch, techStack.infrastructure],
                ].map(([label, Icon, items]: any, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-900">
                      <Icon className="w-4 h-4 text-gray-600" />
                      <span className="text-xs tracking-[0.2em] uppercase text-gray-600 font-medium">
                        {label}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {items.map((tech: any, i: number) => (
                        <TechItem key={i} tech={tech} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Focus */}
            <div>
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-medium mb-12">
                Core Focus
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-900">
                {focusAreas.map((area, idx) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={idx}
                      className="group bg-black p-10 relative transition-all duration-300 cursor-pointer"
                    >
                      <div className="absolute top-0 left-0 right-0 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                      <div className="flex gap-4">
                        <Icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300 mt-1" />
                        <div>
                          <div className="font-semibold mb-3">
                            {area.title}
                          </div>
                          <p className="text-sm text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
                            {area.description}
                          </p>
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 pointer-events-none" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to Action — RESTORED EXACTLY */}
            <div className="border-t border-gray-900 pt-24">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-medium mb-4">
                    Let's work together
                  </p>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Ready to start
                    <br />
                    your project?
                  </h3>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <a
                    href="#projects"
                    className="group relative px-8 py-4 border border-gray-800 text-white text-sm font-medium tracking-wide transition-all duration-300 text-center flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10">View Projects</span>
                    <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>

                  <a
                    href="#contact"
                    className="group px-8 py-4 bg-white text-black text-sm font-medium tracking-wide hover:bg-gray-200 transition-all duration-300 text-center flex items-center justify-center gap-2"
                  >
                    <span>Get In Touch</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* End CTA */}
          </div>
        </div>
      </section>
    </div>
  );
}
