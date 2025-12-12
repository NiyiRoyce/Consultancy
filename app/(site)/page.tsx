"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "Software Engineer",
    "ML Engineer",
    "Backend Architect",
    "Data Scientist",
    "Cloud Engineer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const focusAreas = [
    {
      title: "Backend & Systems",
      description: "Building scalable APIs, distributed systems, and fault-tolerant architectures that handle millions of requests.",
      icon: "⚙️"
    },
    {
      title: "Machine Learning",
      description: "Developing production-ready ML systems, NLP pipelines, and predictive models that drive real business impact.",
      icon: "🧠"
    },
    {
      title: "Cloud & DevOps",
      description: "Architecting cloud infrastructure, CI/CD pipelines, and automation that ensures reliability at scale.",
      icon: "☁️"
    }
  ];

  const projects = [
    {
      title: "Distributed ML Pipeline",
      description: "Built a production-grade ML pipeline processing 100M+ records daily with real-time inference capabilities.",
      link: "/projects/ml-pipeline"
    },
    {
      title: "High-Performance API",
      description: "Architected a microservices system handling 50K req/sec with 99.99% uptime and sub-100ms latency.",
      link: "/projects/api-system"
    }
  ];

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-6xl w-full">
          <div className="space-y-8">
            
            {/* Name */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                Adeniyi Adebowale
              </h1>
            </div>

            {/* Rotating Title */}
            <div className="h-16 overflow-hidden">
              <div 
                className="transition-transform duration-700 ease-in-out"
                style={{ transform: `translateY(-${currentTitle * 64}px)` }}
              >
                {titles.map((title, idx) => (
                  <h2 
                    key={idx}
                    className="text-2xl md:text-3xl font-medium text-zinc-400 h-16 flex items-center"
                  >
                    {title}
                  </h2>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
              I build scalable systems and intelligent solutions at the intersection of software engineering and machine learning. 
              From distributed architectures to production ML pipelines, I create technology that scales.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a 
                href="#projects"
                className="px-7 py-3.5 bg-white text-black text-sm font-semibold rounded hover:bg-zinc-200 transition-colors"
              >
                View Projects
              </a>
              <a 
                href="#contact"
                className="px-7 py-3.5 border border-zinc-700 text-white text-sm font-semibold rounded hover:bg-zinc-900 hover:border-zinc-600 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section id="work" className="px-6 py-24 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3">Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">What I Do</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300"
              >
                <div className="text-4xl mb-5">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {area.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="px-6 py-24 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Work</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <Link
                key={idx}
                href={project.link}
                className="group bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-zinc-200">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <span className="text-white text-sm font-medium inline-flex items-center gap-2">
                  View Project
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/projects"
              className="inline-block px-7 py-3.5 border border-zinc-700 text-white text-sm font-semibold rounded hover:bg-zinc-900 hover:border-zinc-600 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="px-6 py-24 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
            Let's Build Something Great
          </h2>
          <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
            Have a project in mind? Whether it's architecting a scalable system or building an ML pipeline, 
            I'd love to help bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:niyi.py@gmail.com"
              className="px-7 py-3.5 bg-white text-black text-sm font-semibold rounded hover:bg-zinc-200 transition-colors"
            >
              Send a Message
            </a>
            <a
              href="https://linkedin.com/in/neyfrosh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 border border-zinc-700 text-white text-sm font-semibold rounded hover:bg-zinc-900 hover:border-zinc-600 transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}