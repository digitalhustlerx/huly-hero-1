import React, { useEffect, useState } from 'react';
import { ChevronDown, Menu, Zap, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#030508]/60 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.2)]' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="flex items-center gap-10">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group z-50">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-[10px] opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
                <Zap className="w-6 h-6 text-blue-400 fill-blue-400/20 transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>
            <span className="font-bold text-xl tracking-wide text-white font-display">NEXAFINANCE</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-gray-400">
            {['Markets', 'Copy Trading', 'Education', 'Institutional'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="relative hover:text-white transition-colors duration-300 group font-display tracking-wide"
              >
                <span className="flex items-center gap-1">
                  {item}
                  {item === 'Education' && <ChevronDown size={14} className="opacity-70 group-hover:translate-y-0.5 transition-transform" />}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 z-50">
          <a 
            href="#" 
            className="hidden md:flex items-center gap-2 text-[13px] font-bold text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-all duration-300 border border-transparent hover:border-white/10 uppercase tracking-wider font-display"
          >
            <span>Live Demo</span>
          </a>
          
          <div className={`h-6 w-[1px] hidden md:block transition-colors duration-300 ${isScrolled ? 'bg-white/10' : 'bg-white/5'}`}></div>

          <a href="#" className="text-[13px] font-bold text-white hover:text-blue-400 hidden sm:block px-2 transition-colors duration-300 uppercase tracking-wider font-display">Log In</a>
          
          {/* Hamburger Menu Toggle */}
          <button 
            className="lg:hidden p-2 rounded-full text-white hover:bg-white/10 transition-colors duration-300 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-[#030508]/95 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col justify-center items-center ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8 w-full max-w-sm px-6">
           {['Markets', 'Copy Trading', 'Education', 'Institutional'].map((item, index) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-white font-display tracking-tight hover:text-blue-400 transition-colors flex items-center gap-3 group w-full justify-center"
              style={{ transitionDelay: `${index * 50}ms`, opacity: isMobileMenuOpen ? 1 : 0, transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.4s ease-out' }}
            >
              {item}
              <ArrowRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
            </a>
          ))}

          <div className="w-full h-[1px] bg-white/10 my-4"></div>

          <div className="flex flex-col gap-4 w-full">
            <a href="#" className="w-full py-4 text-center rounded-xl bg-white/5 border border-white/5 text-white font-bold font-display hover:bg-white/10 transition-all">
              Live Demo
            </a>
            <a href="#" className="w-full py-4 text-center rounded-xl bg-blue-600 text-white font-bold font-display shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all">
              Log In
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;