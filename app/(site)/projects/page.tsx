"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

// GitHub API configuration
const GITHUB_USERNAME = "NiyiRoyce";

// Fetch repos function
async function fetchRepos() {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch repositories");
  }

  return res.json();
}

export default function ProjectsPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRepos()
      .then((data) => {
        // Filter out forks and sort by stars
        const filteredRepos = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6); // Show top 6 projects
        setRepos(filteredRepos);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-500">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error loading projects: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-all"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

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
          {repos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-50 border border-gray-200 rounded-2xl p-10 transition-all duration-500 relative flex flex-col hover:bg-white hover:border-gray-900 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2"
                >
                  {/* Top accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-black to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                  
                  {/* Language/Topic Header */}
                  <div className="mb-4">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium group-hover:text-gray-600 transition-colors duration-300">
                      {repo.language || 'Project'}
                    </span>
                  </div>
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold tracking-tight !text-black transition-colors duration-300">
                        {repo.name}
                      </h2>
                    </div>
                    <div className="flex-shrink-0 ml-3">
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500" />
                    </div>
                  </div>

                  {/* Description */}
                  {repo.description && (
                    <p className="text-sm text-gray-500 leading-relaxed flex-grow font-light group-hover:text-gray-700 transition-colors duration-300 mb-6">
                      {repo.description}
                    </p>
                  )}

                  {/* Footer */}
                  <div className="flex items-center gap-3 text-xs pt-6 mt-auto border-t border-gray-200 group-hover:border-gray-300 transition-colors duration-300">
                    {repo.language && (
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-gray-400 group-hover:bg-black transition-colors duration-300"></div>
                        <span className="font-medium text-gray-500 group-hover:text-gray-700 transition-colors duration-300">{repo.language}</span>
                      </div>
                    )}
                    {repo.stargazers_count > 0 && (
                      <div className="flex items-center gap-1.5">
                        <span className="font-medium text-gray-500 group-hover:text-gray-700 transition-colors duration-300">★ {repo.stargazers_count}</span>
                      </div>
                    )}
                    {repo.forks_count > 0 && (
                      <div className="flex items-center gap-1.5">
                        <span className="font-medium text-gray-500 group-hover:text-gray-700 transition-colors duration-300">⑂ {repo.forks_count}</span>
                      </div>
                    )}
                  </div>

                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none rounded-2xl"></div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-gray-500">No projects found.</p>
            </div>
          )}

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
              href={`https://github.com/${GITHUB_USERNAME}`}
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