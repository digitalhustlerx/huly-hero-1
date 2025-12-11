
import React, { useEffect, useState } from 'react';
import { Menu, Zap, X, Activity, BarChart2, BookOpen, Users } from 'lucide-react';
import { ViewState } from '../App';

interface NavbarProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Markets', id: 'markets', icon: BarChart2 },
    { label: 'Trade', id: 'trade', icon: Activity },
    { label: 'Copy Trading', id: 'copy-trading', icon: Users },
    { label: 'Education', id: 'education', icon: BookOpen },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 transition-all duration-500 ${
          isScrolled || currentView === 'trade'
            ? 'bg-[#030508]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.2)]' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="flex items-center gap-10">
          {/* Logo */}
          <button onClick={() => onViewChange('home')} className="flex items-center gap-2 group z-50 outline-none">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-[10px] opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
                <Zap className="w-6 h-6 text-blue-400 fill-blue-400/20 transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>
            <span className="font-bold text-xl tracking-wide text-white font-display">NEXAFINANCE</span>
          </button>

          {/* Desktop Links - Hidden on Tablet (lg) now, shown on XL */}
          <div className="hidden xl:flex items-center gap-8 text-[14px] font-medium text-gray-400">
            {navLinks.map((item) => (
              <button 
                key={item.id}
                onClick={() => onViewChange(item.id as ViewState)}
                className={`relative hover:text-white transition-colors duration-300 group font-display tracking-wide flex items-center gap-1 ${currentView === item.id ? 'text-white' : ''}`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_rgba(59,130,246,0.5)] ${currentView === item.id ? 'w-full' : 'w-0'}`}></span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 z-50">
          <button className="text-[13px] font-bold text-white hover:text-blue-400 hidden xl:block px-2 transition-colors duration-300 uppercase tracking-wider font-display">
            Log In
          </button>

          <button 
            onClick={() => onViewChange('trade')}
            className="hidden xl:flex text-[13px] font-bold bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg transition-all duration-300 uppercase tracking-wider font-display shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
          >
            Connect Wallet
          </button>
          
          {/* Hamburger Menu Toggle - Shown on Tablet/Mobile */}
          <button 
            className="xl:hidden p-2 rounded-full text-white hover:bg-white/10 transition-colors duration-300 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-[#030508]/95 backdrop-blur-2xl transition-all duration-500 xl:hidden flex flex-col justify-center items-center ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8 w-full max-w-sm px-6">
           {navLinks.map((item, index) => (
            <button 
              key={item.id}
              onClick={() => {
                onViewChange(item.id as ViewState);
                setIsMobileMenuOpen(false);
              }}
              className="text-2xl font-bold text-white font-display tracking-tight hover:text-blue-400 transition-colors flex items-center gap-3 group w-full justify-center"
              style={{ transitionDelay: `${index * 50}ms`, opacity: isMobileMenuOpen ? 1 : 0, transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.4s ease-out' }}
            >
              <item.icon size={24} className="text-blue-500 opacity-70 group-hover:opacity-100" />
              {item.label}
            </button>
          ))}

          <div className="w-full h-[1px] bg-white/10 my-4"></div>

          <div className="flex flex-col gap-4 w-full">
            <button className="w-full py-4 text-center rounded-xl bg-white/5 border border-white/5 text-white font-bold font-display hover:bg-white/10 transition-all uppercase tracking-widest text-sm">
              Log In
            </button>
            <button 
               onClick={() => {
                 onViewChange('trade');
                 setIsMobileMenuOpen(false);
               }}
               className="w-full py-4 text-center rounded-xl bg-blue-600 text-white font-bold font-display shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all uppercase tracking-widest text-sm"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
