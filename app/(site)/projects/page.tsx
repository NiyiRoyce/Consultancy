import React from 'react';
import { ArrowRight } from 'lucide-react';

// Mock data - replace with your actual getRepos() data
const mockRepos = [
  {
    id: 1,
    name: "distributed-task-queue",
    slug: "distributed-task-queue",
    description: "High-performance distributed task queue built with Redis and Python. Handles 10K+ jobs/sec with automatic retry logic and dead letter queues.",
    stargazers_count: 234,
    language: "Python",
    forks_count: 45,
    html_url: "https://github.com/username/distributed-task-queue"
  },
  {
    id: 2,
    name: "payment-gateway-api",
    slug: "payment-gateway-api",
    description: "Secure payment processing API with Stripe integration. Features idempotency, webhook handling, and comprehensive audit logging.",
    stargazers_count: 189,
    language: "TypeScript",
    forks_count: 32,
    html_url: "https://github.com/username/payment-gateway-api"
  },
  {
    id: 3,
    name: "microservices-boilerplate",
    slug: "microservices-boilerplate",
    description: "Production-ready microservices template with Docker, Kubernetes, and service mesh. Includes monitoring, logging, and CI/CD pipelines.",
    stargazers_count: 567,
    language: "JavaScript",
    forks_count: 123,
    html_url: "https://github.com/username/microservices-boilerplate"
  },
  {
    id: 4,
    name: "api-rate-limiter",
    slug: "api-rate-limiter",
    description: "Flexible rate limiting middleware with Redis backend. Supports token bucket, sliding window, and fixed window algorithms.",
    stargazers_count: 412,
    language: "TypeScript",
    forks_count: 67,
    html_url: "https://github.com/username/api-rate-limiter"
  },
  {
    id: 5,
    name: "event-sourcing-framework",
    slug: "event-sourcing-framework",
    description: "Event sourcing and CQRS framework for Node.js. Built for scalability with PostgreSQL event store and snapshot support.",
    stargazers_count: 298,
    language: "TypeScript",
    forks_count: 54,
    html_url: "https://github.com/username/event-sourcing-framework"
  },
  {
    id: 6,
    name: "cloud-infra-terraform",
    slug: "cloud-infra-terraform",
    description: "Terraform modules for AWS infrastructure. Includes VPC, ECS, RDS, and monitoring setup with security best practices.",
    stargazers_count: 145,
    language: "HCL",
    forks_count: 28,
    html_url: "https://github.com/username/cloud-infra-terraform"
  }
];

export default function ProjectsPage() {
  const repos = mockRepos;

  return (
    <div className="bg-black text-white">
      <section className="min-h-screen px-6 py-32">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-24">
            <div className="inline-block mb-4">
              <span className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-medium">
                Portfolio
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-8 text-white">
              My Projects
            </h1>
            <p className="text-base text-gray-500 max-w-2xl leading-relaxed font-light">
              A collection of open-source projects and tools I've built to solve real-world engineering challenges. 
              From distributed systems to developer tooling.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={`/projects/${repo.slug}`}
                className="group bg-white border border-gray-200 p-10 transition-all duration-300 relative flex flex-col hover:border-gray-300"
              >
                {/* Top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                {/* Language/Topic Header */}
                <div className="mb-4">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium">
                    {repo.language || 'Project'}
                  </span>
                </div>
                
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold tracking-tight text-black group-hover:text-gray-700 transition-colors duration-300">
                      {repo.name}
                    </h2>
                  </div>
                  <div className="flex-shrink-0 ml-3">
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>

                {/* Description */}
                {repo.description && (
                  <p className="text-sm text-gray-500 leading-relaxed flex-grow font-light group-hover:text-gray-600 transition-colors duration-300 mb-6">
                    {repo.description}
                  </p>
                )}

                {/* Footer */}
                <div className="flex items-center gap-3 text-xs pt-6 mt-auto border-t border-gray-200">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <span className="font-medium text-gray-500">{repo.language}</span>
                    </div>
                  )}
                </div>

                {/* Subtle background on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 pointer-events-none"></div>
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center border-t border-gray-900 pt-24">
            <div className="inline-block mb-4">
              <span className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-medium">
                More on GitHub
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              Want to see more?
            </h2>
            <p className="text-base text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed font-light">
              Check out my GitHub profile for additional projects, contributions, and experimental work.
            </p>
            <a
              href="https://github.com/niyiroyce"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm tracking-wide"
            >
              Visit GitHub Profile
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}