import React from 'react';
import { Code2, Calendar, ExternalLink, Globe, ArrowLeft } from 'lucide-react';

// Mock data - replace with your actual getRepo() data
const mockRepo = {
  id: 1,
  name: "distributed-task-queue",
  description: "High-performance distributed task queue built with Redis and Python. Handles 10K+ jobs/sec with automatic retry logic and dead letter queues. Features include priority queues, delayed job execution, result backends, and comprehensive monitoring through Prometheus metrics.",
  language: "Python",
  html_url: "https://github.com/username/distributed-task-queue",
  homepage: "https://task-queue-demo.com",
  updated_at: "2024-12-15T10:30:00Z",
  topics: ["redis", "python", "distributed-systems", "task-queue", "worker-pool"],
  created_at: "2023-03-20T08:15:00Z"
};

export default function ProjectPage() {
  const repo = mockRepo;

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Back Navigation */}
      <div className="border-b border-gray-900">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <a 
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </a>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-medium">
              Project Details
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-8">
            {repo.name}
          </h1>
          {repo.description && (
            <p className="text-base text-gray-500 leading-relaxed font-light max-w-3xl">
              {repo.description}
            </p>
          )}
        </div>

        {/* Project Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {repo.language && (
            <div className="bg-white text-black p-8">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <Code2 className="w-4 h-4" />
                <span className="text-xs tracking-wider uppercase font-medium">Language</span>
              </div>
              <div className="text-2xl font-semibold">{repo.language}</div>
            </div>
          )}
          
          <div className="bg-white text-black p-8">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Calendar className="w-4 h-4" />
              <span className="text-xs tracking-wider uppercase font-medium">Last Updated</span>
            </div>
            <div className="text-base font-medium text-gray-700">
              {new Date(repo.updated_at).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
          </div>
        </div>

        {/* Topics/Tags */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="mb-16">
            <h3 className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-medium mb-6">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {repo.topics.map((topic, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white text-black text-sm font-medium hover:bg-gray-100 transition-all duration-300"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Project Details Card */}
        <div className="mb-16">
          <div className="bg-white text-black p-8">
            <h3 className="text-[10px] tracking-[0.4em] uppercase font-medium mb-6 text-gray-900">
              Project Information
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-sm text-gray-600 font-light">Created</span>
                <span className="text-sm font-medium">
                  {new Date(repo.created_at).toLocaleDateString('en-US', { 
                    month: 'long', 
                    year: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 font-light">Status</span>
                <span className="text-sm font-medium">Active Development</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-16">
          <h3 className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-medium mb-6">
            Quick Links
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-black p-6 transition-all duration-300 hover:bg-gray-100 relative"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                  <span className="text-base font-semibold">View on GitHub</span>
                </div>
                <span className="text-gray-400 group-hover:text-black transition-colors group-hover:translate-x-1 duration-300">→</span>
              </div>
            </a>
            
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-black p-6 transition-all duration-300 hover:bg-gray-100 relative"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                    <span className="text-base font-semibold">Live Demo</span>
                  </div>
                  <span className="text-gray-400 group-hover:text-black transition-colors group-hover:translate-x-1 duration-300">→</span>
                </div>
              </a>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="border-t border-gray-900 pt-16 mt-16">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-medium">
                Let's Collaborate
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Interested in this project?
            </h3>
            <p className="text-gray-500 text-base font-light mb-10 max-w-xl mx-auto leading-relaxed">
              Check out the repository on GitHub or reach out if you'd like to collaborate or learn more about the implementation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black text-sm font-medium tracking-wide hover:bg-gray-100 transition-all duration-300"
              >
                View Repository
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-gray-800 text-white text-sm font-medium tracking-wide hover:border-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}