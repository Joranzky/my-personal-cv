import React, { useEffect, useState } from 'react';

const About = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/skills')
      .then(res => res.json())
      .then(data => setSkills(data));
  }, []);

  // Fungsi helper untuk menentukan lebar bar berdasarkan level
  const getWidth = (level) => {
    switch(level.toLowerCase()) {
        case 'advanced': return 'w-[90%]';
        case 'intermediate': return 'w-[70%]';
        case 'beginner': return 'w-[40%]';
        default: return 'w-[50%]';
    }
  };

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-2 uppercase tracking-wider">My Skills</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
          <div className="grid gap-6">
            {skills.map((skill) => (
              <div key={skill.id}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-200 font-bold tracking-wide">{skill.name}</span>
                  <span className="text-sm text-teal-400">{skill.level}</span>
                </div>
                {/* Skill Bar Visual */}
                <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden relative">
                    {/* Bar bewarna dengan efek glow */}
                  <div className={`h-full ${getWidth(skill.level)} bg-gradient-to-r from-teal-400 to-blue-500 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)] relative group`}>
                     {/* Efek kilatan cahaya saat hover pada bar */}
                    <div className="absolute top-0 left-0 w-full h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;