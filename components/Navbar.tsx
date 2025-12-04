import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: string) => void;
  activeView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const linkClass = (view: string) => 
    `cursor-pointer transition-colors text-[13px] font-medium ${activeView === view ? 'text-white' : 'text-[#8b949e] hover:text-white'}`;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-300 ${
          scrolled ? 'bg-[#020408]/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full max-w-[1400px] px-6 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-10">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('trade'); }} className="flex items-center gap-2 group relative z-50">
              <div className="relative flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 blur-[10px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <Zap className="w-6 h-6 text-blue-400 fill-blue-400/20" />
                </div>
              </div>
              <span className="font-bold text-xl tracking-wide text-white font-sans">NEXAFINANCE</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <div onClick={() => onNavigate('trade')} className={linkClass('trade')}>Markets</div>
              <div onClick={() => onNavigate('copy')} className={linkClass('copy')}>Copy Trading</div>
              <div onClick={() => onNavigate('learn')} className={`flex items-center gap-1 ${linkClass('learn')}`}>
                Education <ChevronDown size={14} className="opacity-70" />
              </div>
              <a href="#" className="text-[13px] font-medium text-[#8b949e] hover:text-white transition-colors">Institutional</a>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Desktop Right Buttons */}
            <div className="hidden md:flex items-center gap-4">
               <a href="#" className="text-[13px] font-medium text-[#8b949e] hover:text-white transition-colors">
                 Live Demo
               </a>
               <div className="h-4 w-[1px] bg-white/10"></div>
               <a href="#" className="text-[13px] font-medium text-white hover:text-gray-300">Log In</a>
               <a 
                 href="#" 
                 onClick={(e) => { e.preventDefault(); onNavigate('trade'); }}
                 className="text-[13px] font-medium bg-blue-600 border border-blue-500/50 text-white px-4 py-1.5 rounded-full hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all shadow-sm"
               >
                 Start Trading
               </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="md:hidden text-white relative z-50 p-2 -mr-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-[#020408] flex flex-col pt-24 pb-8 px-6 transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
         <div className="flex flex-col gap-6 text-xl font-medium text-gray-300">
           <div onClick={() => { onNavigate('trade'); setIsMobileMenuOpen(false); }} className="cursor-pointer hover:text-white py-2 border-b border-white/5">Markets</div>
           <div onClick={() => { onNavigate('copy'); setIsMobileMenuOpen(false); }} className="cursor-pointer hover:text-white py-2 border-b border-white/5">Copy Trading</div>
           <div onClick={() => { onNavigate('learn'); setIsMobileMenuOpen(false); }} className="cursor-pointer hover:text-white py-2 border-b border-white/5">Education</div>
           <div className="cursor-pointer hover:text-white py-2 border-b border-white/5">Download</div>
         </div>

         <div className="mt-auto flex flex-col gap-4">
           <button className="w-full py-3.5 border border-white/20 rounded-full font-bold text-white text-sm hover:bg-white/5 transition-colors">
             Sign In
           </button>
           <button className="w-full py-3.5 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-200 transition-colors">
             Sign Up
           </button>
         </div>
      </div>
    </>
  );
};

export default Navbar;