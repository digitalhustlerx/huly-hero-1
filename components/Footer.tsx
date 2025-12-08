import React from 'react';
import { Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <footer className="bg-[#020408] border-t border-white/5 relative overflow-hidden">
      {/* Footer Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div 
          ref={ref}
          className={`py-24 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Start Your Trading Journey Today
          </h2>
          <p className="max-w-xl mx-auto text-lg text-secondary mb-10">
            Join thousands of traders who use NEXAFINANCE to master the markets.
          </p>
          <div>
            <a 
              href="#" 
              className="inline-block text-base font-bold bg-blue-600 border border-blue-500/50 text-white px-10 py-4 rounded-full hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              Open Free Account
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="py-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 relative z-10">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-blue-500/10 rounded-lg">
              <Zap className="w-5 h-5 text-blue-400" />
            </div>
            <span className="font-bold text-lg text-white tracking-wide">NEXAFINANCE</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-secondary">
            <a href="#" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Careers</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
          </div>
          <p className="text-xs text-gray-600 font-medium">&copy; {new Date().getFullYear()} NEXAFINANCE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;