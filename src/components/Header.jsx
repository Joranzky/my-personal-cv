import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    // Backdrop blur untuk efek kaca
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0f1a]/70 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo dengan efek gradient text */}
        <div className="text-2xl font-black tracking-wider bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
          DEV.FOLIO
        </div>
        
        {/* Desktop Menu dengan hover underline animation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="relative text-sm uppercase tracking-widest text-slate-300 hover:text-white transition duration-300 group py-2"
            >
              {link.name}
              {/* Garis bawah animasi saat hover */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0f1a] border-t border-white/10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="block px-6 py-4 text-slate-300 hover:bg-white/5 hover:text-teal-400 tracking-widest text-sm uppercase"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;