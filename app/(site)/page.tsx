"use client";

import React, { useState, useEffect, useRef } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// Button Components
const PrimaryButton: React.FC<{ href: string; children: React.ReactNode; className?: string }> = ({ 
  href, 
  children, 
  className = "" 
}) => (
  <a
    href={href}
    className={`px-8 py-4 bg-white text-black text-sm font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 ${className}`}
  >
    {children}
  </a>
);

const SecondaryButton: React.FC<{ 
  href: string; 
  children: React.ReactNode; 
  className?: string;
  external?: boolean;
}> = ({ 
  href, 
  children, 
  className = "",
  external = false 
}) => (
  <a
    href={href}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    className={`group relative px-8 py-4 border border-gray-800 text-white text-sm font-medium tracking-wide transition-all duration-300 ${className}`}
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </a>
);

export default function HomePage() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [heroSize, setHeroSize] = useState({ width: 0, height: 0 });

  const titles = [
    "Software Engineer",
    "ML Engineer",
    "Cloud Engineer",
  ];

  // Rotate titles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Track mouse relative to hero
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Track hero size
  useEffect(() => {
    const updateHeroSize = () => {
      if (heroRef.current) {
        setHeroSize({
          width: heroRef.current.offsetWidth,
          height: heroRef.current.offsetHeight,
        });
      }
    };
    updateHeroSize();
    window.addEventListener("resize", updateHeroSize);
    return () => window.removeEventListener("resize", updateHeroSize);
  }, []);

  const focusAreas = [
    {
      title: "Backend & Systems",
      description:
        "Building scalable APIs, distributed systems, and fault-tolerant architectures that handle millions of requests.",
      icon: "⚙️",
    },
    {
      title: "Machine Learning",
      description:
        "Developing production-ready ML systems, NLP pipelines, and predictive models that drive real business impact.",
      icon: "🧠",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Architecting cloud infrastructure, CI/CD pipelines, and automation that ensures reliability at scale.",
      icon: "☁️",
    },
  ];

  const projects = [
    {
      title: "Distributed ML Pipeline",
      description:
        "Built a production-grade ML pipeline processing 100M+ records daily with real-time inference capabilities.",
      link: "/projects/ml-pipeline",
    },
    {
      title: "High-Performance API",
      description:
        "Architected a microservices system handling 50K req/sec with 99.99% uptime and sub-100ms latency.",
      link: "/projects/api-system",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-6 py-32 relative"
      >
        {/* Lottie Animation */}
        <div className="hidden lg:block absolute right-12 top-1/3 -translate-y-1/2 pointer-events-none">
          {/* Lottie Animation with float animation only */}
          <div 
            className="w-80 h-80"
            style={{
              animation: "float 3s ease-in-out infinite"
            }}
          >
            <DotLottieReact
              src="https://lottie.host/12696f53-0c40-434e-b52d-2ca5c3fb8801/E59Dde3CUo.lottie"
              loop
              autoplay
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-6xl w-full relative z-10">
          <div className="space-y-8 lg:max-w-2xl">
            <div className="inline-block mb-4">
              <span className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-medium">
                Hello, I'm
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
              Adeniyi<br />Adebowale
            </h1>

            <div className="h-12 overflow-hidden">
              <div
                className="transition-transform duration-700 ease-in-out"
                style={{ transform: `translateY(-${currentTitle * 48}px)` }}
              >
                {titles.map((title, idx) => (
                  <h2
                    key={idx}
                    className="text-xl md:text-2xl font-light text-gray-500 h-12 flex items-center"
                  >
                    {title}
                  </h2>
                ))}
              </div>
            </div>

            <p className="text-base text-gray-500 max-w-2xl leading-relaxed font-light pt-4">
              I build scalable systems and intelligent solutions at the intersection of software engineering and machine learning. 
              From distributed architectures to production ML pipelines, I create technology that scales.
            </p>

            <div className="flex flex-wrap gap-4 pt-8">
              <PrimaryButton href="#projects">
                View Projects
              </PrimaryButton>
              <SecondaryButton href="#contact">
                Get In Touch
              </SecondaryButton>
            </div>
          </div>
        </div>

        {/* Float animation keyframes */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}</style>
      </section>

      {/* What I Do Section */}
      <section id="work" className="px-6 py-32 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <div className="inline-block mb-4">
              <span className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-medium">
                Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              What I Do
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-900">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="group bg-black p-10 transition-all duration-300 cursor-pointer relative"
              >
                {/* Top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="text-4xl mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 tracking-tight">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light group-hover:text-gray-500 transition-colors duration-300">
                  {area.description}
                </p>

                {/* Subtle background on hover */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="px-6 py-32 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <div className="inline-block mb-4">
              <span className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-medium">
                Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Featured Work
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-900">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                className="group bg-black p-10 transition-all duration-300 relative"
              >
                {/* Top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <h3 className="text-xl font-semibold mb-4 tracking-tight group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light mb-8 group-hover:text-gray-500 transition-colors duration-300">
                  {project.description}
                </p>
                <span className="text-white text-xs tracking-wide font-medium inline-flex items-center gap-2 uppercase">
                  View Project
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>

                {/* Subtle background on hover */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 pointer-events-none"></div>
              </a>
            ))}
          </div>

          <div className="mt-16 text-center border-t border-gray-900 pt-16">
            <PrimaryButton href="/projects" className="inline-block">
              View All Projects
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="px-6 py-32 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2 tracking-wide uppercase text-[10px] font-medium">
                Let's work together
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Ready to start<br />your project?
              </h2>
              <p className="text-base text-gray-500 max-w-xl leading-relaxed font-light">
                Have a project in mind? Whether it's architecting a scalable system or building an ML pipeline, 
                I'd love to help bring your vision to life.
              </p>
            </div>
            
            <div className="hidden md:flex flex-col gap-4">
              <PrimaryButton href="mailto:niyi.py@gmail.com">
                Send a Message
              </PrimaryButton>
              <SecondaryButton href="https://linkedin.com/in/neyfrosh" external className="text-center">
                Connect on LinkedIn
              </SecondaryButton>
            </div>
          </div>

          {/* Mobile buttons */}
          <div className="flex md:hidden flex-col gap-4 mt-12">
            <PrimaryButton href="mailto:niyi.py@gmail.com" className="text-center">
              Send a Message
            </PrimaryButton>
            <SecondaryButton href="https://linkedin.com/in/neyfrosh" external className="text-center">
              Connect on LinkedIn
            </SecondaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}