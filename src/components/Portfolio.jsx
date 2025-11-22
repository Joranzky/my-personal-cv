import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <section id="portfolio" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-2 uppercase tracking-wider">Latest Work</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            // Card dengan hover lift dan glow border
            <div key={project.id} 
                 className="group bg-[#0a0f1a] rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_10px_30px_-10px_rgba(45,212,191,0.3)] relative">
              
              {/* Efek gradient border saat hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-md"></div>

              <div className="h-56 bg-slate-800/50 flex items-center justify-center overflow-hidden relative">
                 {/* Overlay saat hover */}
                 <div className="absolute inset-0 bg-teal-900/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <span className="text-teal-500/50 text-6xl font-black group-hover:scale-110 transition-transform duration-500">IMG {index + 1}</span>
              </div>

              <div className="p-8 bg-[#0a0f1a] relative z-20">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.split(',').map((t, i) => (
                    <span key={i} className="text-xs font-medium text-teal-300 bg-teal-900/20 border border-teal-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                      {t.trim()}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center text-white font-bold hover:text-teal-400 transition group/link">
                  View Project 
                  <span className="ml-2 text-xl group-hover/link:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;