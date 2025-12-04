import React from 'react';
import { Github, ChevronDown, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 bg-[#020408]/60 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="flex items-center gap-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center">
            {/* Huly Logo Icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M12.724 2.56947C12.352 2.14446 11.648 2.14446 11.276 2.56947L3.10261 11.9105C2.5517 12.5401 3.06451 13.5 3.97858 13.5H7.5V19.5C7.5 20.0523 7.94772 20.5 8.5 20.5H15.5C16.0523 20.5 16.5 20.0523 16.5 19.5V13.5H20.0214C20.9355 13.5 21.4483 12.5401 20.8974 11.9105L12.724 2.56947Z" fill="white" className="group-hover:fill-blue-400 transition-colors"/>
            </svg>
          </div>
          <span className="font-bold text-lg tracking-tight text-white">huly</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-[#8b949e]">
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
            Resources <ChevronDown size={14} className="opacity-70" />
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
            Community <ChevronDown size={14} className="opacity-70" />
          </a>
          <a href="#" className="hover:text-white transition-colors">Download</a>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-[13px] font-medium text-[#8b949e] hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-full transition-all border border-transparent hover:border-white/10"
        >
          <Github size={16} />
          <span>Star Us</span>
        </a>
        
        <div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>

        <a href="#" className="text-[13px] font-medium text-white hover:text-gray-300 hidden sm:block px-2">Sign In</a>
        
        {/* Sign Up Button - Visible on Mobile as per reference */}
        <a href="#" className="text-[12px] sm:text-[13px] font-medium bg-[#1c2128] border border-white/10 text-white px-3 sm:px-4 py-1.5 rounded-full hover:bg-[#2d333b] hover:border-white/20 transition-all shadow-sm">
          Sign Up
        </a>

        {/* Mobile Menu Icon (if needed in future, but not in current ref screenshot) */}
        {/* <button className="lg:hidden text-white/70 hover:text-white">
          <Menu size={20} />
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;