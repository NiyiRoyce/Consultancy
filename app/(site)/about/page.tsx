import React from 'react';

export default function AboutSection() {
  const focusAreas = [
    {
      category: "Software Engineering",
      skills: ["Backend & API Design", "Scalable System Architecture", "Distributed Systems"]
    },
    {
      category: "AI & Data",
      skills: ["Machine Learning", "NLP", "Data Engineering", "MLOps"]
    },
    {
      category: "Infrastructure",
      skills: ["Cloud & DevOps", "Automation", "Developer Productivity"]
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 animate-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-white to-zinc-600 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          
          {/* Introduction */}
          <div className="group">
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 transition-all duration-500 hover:border-zinc-600 hover:shadow-2xl hover:shadow-zinc-900/50 hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse"></span>
                Hi, I'm Adeniyi Adebowale
              </h3>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p className="group-hover:text-zinc-300 transition-colors duration-300">
                  I'm a <span className="text-white font-medium">Software Engineer</span> and <span className="text-white font-medium">Machine Learning Engineer</span> passionate about building scalable, high-performance systems and delivering real-world impact through technology. With a strong foundation in backend development, distributed systems, and cloud infrastructure, I design and implement secure, fault-tolerant applications, APIs, and data pipelines that scale effortlessly.
                </p>
                <p className="group-hover:text-zinc-300 transition-colors duration-300">
                  On the machine learning side, I specialize in building production-ready ML systems, including NLP pipelines, predictive models, and analytics platforms. I thrive at the intersection of software engineering and AI—developing solutions that are not only intelligent but also robust, maintainable, and optimized for performance.
                </p>
                <p className="group-hover:text-zinc-300 transition-colors duration-300">
                  Beyond coding and model-building, I enjoy writing about technology, architecture, and data science, sharing insights with the developer community. My goal is to continuously push the boundaries of what software and AI can achieve, making complex systems simple, efficient, and reliable.
                </p>
              </div>
            </div>
          </div>

          {/* Core Focus Areas */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-zinc-200">Core Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="group bg-zinc-950 border border-zinc-800 rounded-xl p-6 transition-all duration-500 hover:border-white hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Category Header */}
                  <div className="mb-4 pb-3 border-b border-zinc-800 group-hover:border-zinc-600 transition-colors duration-300">
                    <h4 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 group-hover:bg-clip-text transition-all duration-300">
                      {area.category}
                    </h4>
                  </div>
                  
                  {/* Skills List */}
                  <ul className="space-y-3">
                    {area.skills.map((skill, skillIdx) => (
                      <li
                        key={skillIdx}
                        className="flex items-start gap-3 text-zinc-400 group-hover:text-zinc-300 transition-all duration-300"
                        style={{ transitionDelay: `${skillIdx * 50}ms` }}
                      >
                        <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full mt-2 group-hover:bg-white group-hover:scale-150 transition-all duration-300"></span>
                        <span className="text-sm leading-relaxed">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}