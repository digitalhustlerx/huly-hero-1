import React from 'react';
import { Github, ChevronDown, Zap } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: string) => void;
  activeView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeView }) => {
  const linkClass = (view: string) => 
    `cursor-pointer transition-colors ${activeView === view ? 'text-white font-semibold' : 'hover:text-white'}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 bg-[#020408]/60 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="flex items-center gap-10">
        {/* Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('trade'); }} className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center">
            {/* Logo Icon */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-[10px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <Zap className="w-6 h-6 text-blue-400 fill-blue-400/20" />
            </div>
          </div>
          <span className="font-bold text-xl tracking-wide text-white font-sans">NEXAFINANCE</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-[#8b949e]">
          <div onClick={() => onNavigate('trade')} className={linkClass('trade')}>Markets</div>
          <div onClick={() => onNavigate('copy')} className={linkClass('copy')}>Copy Trading</div>
          <div onClick={() => onNavigate('learn')} className={`flex items-center gap-1 ${linkClass('learn')}`}>
            Education <ChevronDown size={14} className="opacity-70" />
          </div>
          <a href="#" className="hover:text-white transition-colors">Institutional</a>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <a 
          href="#" 
          className="hidden md:flex items-center gap-2 text-[13px] font-medium text-[#8b949e] hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-full transition-all border border-transparent hover:border-white/10"
        >
          <span>Live Demo</span>
        </a>
        
        <div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>

        <a href="#" className="text-[13px] font-medium text-white hover:text-gray-300 hidden sm:block px-2">Log In</a>
        
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); onNavigate('trade'); }}
          className="text-[12px] sm:text-[13px] font-medium bg-blue-600 border border-blue-500/50 text-white px-3 sm:px-4 py-1.5 rounded-full hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all shadow-sm"
        >
          Start Trading
        </a>
      </div>
    </nav>
  );
};

export default Navbar;