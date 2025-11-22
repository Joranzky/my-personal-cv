import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // --- 1. Lakukan Fetching SEMUA Data di sini ---
  useEffect(() => {
    // Ambil data dari endpoint utama (asumsi ini berisi profile, skills, dan projects)
    fetch('http://localhost:3001/profile') 
      .then(res => {
        if (!res.ok) {
          throw new Error('Gagal mengambil data dari server.');
        }
        return res.json();
      })
      .then(fetchedData => {
        setData(fetchedData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setLoading(false);
        setError(true);
      });
  }, []);

  // --- Tampilan Loading ---
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0f1a] text-teal-400">
        <p className="text-2xl animate-pulse">Memuat data CV...</p>
      </div>
    );
  }
  
  // --- Tampilan Error ---
  if (error || !data || !data.name) {
      return <div className="min-h-screen flex items-center justify-center bg-red-900 text-white">Error: Pastikan 'npm run server' berjalan dan data 'profile' ada di db.json.</div>;
  }
  
  // --- Konten Utama (Setelah data dimuat) ---
  return (
    <div className="font-sans bg-[#0a0f1a] min-h-screen text-slate-200 overflow-hidden relative">
      
      {/* Elemen Dekorasi Background */}
      <div className="fixed top-[-10%] left-[-10%] w-96 h-96 bg-teal-600/30 rounded-full filter blur-[120px] opacity-50 animate-pulse z-0 pointer-events-none"></div>
      <div className="fixed bottom-[10%] right-[-5%] w-96 h-96 bg-purple-600/30 rounded-full filter blur-[120px] opacity-50 animate-pulse delay-1000 z-0 pointer-events-none"></div>

      <div className="relative z-10">
        <Header />
        <main>
          {/* Mengirimkan data sebagai PROPS */}
          <Hero profile={data} /> {/* Mengirimkan seluruh objek profile */}
          <About skills={data.skills} bio={data.bio} /> {/* Mengirimkan data skills */}
          <Portfolio projects={data.projects} /> {/* Mengirimkan data projects */}
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;