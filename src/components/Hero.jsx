import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/profile')
      .then(res => res.json())
      .then(data => {
        console.log("Profile data:", data); // <- Tambahkan ini
        console.log("Avatar path:", data.avatar); // <- Tambahkan ini
        setProfile(data);
      })
      .catch(err => console.error("Error fetching profile:", err));
  }, []);

  if (!profile) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h2 className="text-teal-400 font-medium tracking-[0.2em] mb-4 uppercase">Welcome to my universe</h2>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            I'm <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">{profile.name}</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed border-l-4 border-teal-500/50 pl-4">
            {profile.role}. {profile.bio}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#portfolio" className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-[#0a0f1a] font-bold rounded transition duration-300 shadow-[0_0_15px_rgba(45,212,191,0.5)] hover:shadow-[0_0_30px_rgba(45,212,191,0.8)]">
              Lihat Portfolio
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="group px-8 py-4 border border-slate-600 text-white hover:border-teal-400 rounded transition duration-300 flex items-center gap-2 hover:bg-white/5">
              GitHub Profile
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
        
        {/* Image Section - MODIFIKASI BAGIAN INI */}
        <div className="md:w-1/2 flex justify-center relative z-10">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Cincin berputar */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-purple-600 rounded-full blur-xl opacity-50 animate-spin-slow"></div>
            
            {/* Foto Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 p-2 backdrop-blur-sm bg-white/5">
                <img
                    src={profile.avatar || "/assets/foto.jpg"} // Fallback path
                    alt={profile.name} 
                    className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      console.error("Error loading image:", profile.avatar);
                      e.target.src = "/assets/foto.jpg"; // Fallback jika error
                    }}
                />    
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;