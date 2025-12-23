"use client";
import React, { useState } from 'react';
import { 
  Server, 
  Network, 
  Cloud, 
  Plug, 
  GitBranch, 
  Activity, 
  Database, 
  Shield, 
  Lightbulb 
} from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: Server,
      title: "Backend Application Development",
      description: "Design and build scalable backend systems with robust APIs and modern architecture",
      details: [
        "Scalable backend system design",
        "RESTful and event-driven APIs",
        "Production-ready business logic",
        "Legacy codebase modernization"
      ]
    },
    {
      icon: Network,
      title: "Distributed Systems & Microservices",
      description: "Enterprise-grade microservice architecture for high-performance applications",
      details: [
        "Microservice architecture design",
        "Event-driven systems",
        "Service orchestration",
        "Concurrency and scaling solutions"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure & AWS Engineering",
      description: "Comprehensive AWS solutions with optimized infrastructure and cost efficiency",
      details: [
        "AWS architecture design",
        "Containerized Docker deployments",
        "Infrastructure-as-Code",
        "Cost optimization strategies"
      ]
    },
    {
      icon: Plug,
      title: "API Design & Integration",
      description: "Developer-friendly APIs with seamless third-party integrations",
      details: [
        "REST and async API architecture",
        "Third-party integrations",
        "Performance optimization",
        "Comprehensive documentation"
      ]
    },
    {
      icon: GitBranch,
      title: "DevOps & CI/CD Automation",
      description: "Streamlined deployment pipelines with automated testing and workflows",
      details: [
        "CI/CD pipeline implementation",
        "Automated testing workflows",
        "Multi-environment setup",
        "Git-based release automation"
      ]
    },
    {
      icon: Activity,
      title: "System Reliability & Performance",
      description: "Production-grade observability and performance engineering for mission-critical systems",
      details: [
        "Logging, metrics, and monitoring",
        "Performance tuning and testing",
        "Fault tolerance systems",
        "Incident response protocols"
      ]
    },
    {
      icon: Database,
      title: "Database Design & Data Engineering",
      description: "High-performance database solutions with optimized data pipelines",
      details: [
        "SQL and NoSQL database design",
        "High-throughput data pipelines",
        "Query optimization",
        "Redis caching strategies"
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance Engineering",
      description: "Enterprise security implementation with payment platform expertise",
      details: [
        "Secure authentication systems",
        "Payment platform development",
        "Data protection practices",
        "Security audits and hardening"
      ]
    },
    {
      icon: Lightbulb,
      title: "Backend Architecture Consulting",
      description: "Strategic technical guidance for scaling and modernization initiatives",
      details: [
        "Architecture reviews",
        "Scaling assessments",
        "Migration planning",
        "Best-practice guidance"
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <div className="inline-block mb-4">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-medium">
              Services
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-none">
            Engineering<br />Excellence
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mt-8 font-light">
            Specialized backend engineering and infrastructure solutions for modern, scalable applications
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-black border border-gray-900 p-12 transition-all duration-300 cursor-pointer hover:border-gray-800"
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Subtle top border that appears on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Card Content */}
              <div className="relative">
                {/* Icon */}
                <div className="mb-6">
                  <service.icon 
                    className="w-8 h-8 text-gray-700 group-hover:text-gray-500 transition-colors duration-300" 
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 tracking-tight group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-8 leading-relaxed font-light group-hover:text-gray-400 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2.5">
                  {service.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-gray-700 flex items-start group-hover:text-gray-500 transition-all duration-300 font-light"
                      style={{
                        transitionDelay: activeService === index ? `${idx * 30}ms` : '0ms',
                      }}
                    >
                      <span className="mr-3 text-gray-800 group-hover:text-gray-600 transition-colors duration-300 mt-0.5">—</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover background effect - very subtle */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 flex items-center justify-between border-t border-gray-900 pt-16">
          <div>
            <p className="text-sm text-gray-600 mb-2 tracking-wide uppercase text-[10px] font-medium">
              Start a project
            </p>
            <h3 className="text-3xl font-semibold tracking-tight">
              Ready to build something<br />exceptional?
            </h3>
          </div>
          <button className="group relative px-8 py-4 border border-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm tracking-wide">
            Get in Touch
            <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;