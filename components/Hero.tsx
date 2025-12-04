import React, { useState, useEffect, useRef } from 'react';

interface HeroProps {
  activeView: string;
}

const Hero: React.FC<HeroProps> = ({ activeView }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [buttonGlowX, setButtonGlowX] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll/Mount Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Button glow tracking
  const handleButtonMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      setButtonGlowX(x - 102); 
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#020408] flex justify-center overflow-hidden">
      
      {/* Centralized Container - The "Green Line" Box */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-[1400px] min-h-screen flex flex-col"
      >
        
        {/* Containerized Video Background */}
        <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden" aria-hidden="true">
          <video 
            // Adjusted video scaling for mobile to zoom out, maintaining object-cover for larger screens
            className="w-full h-full object-cover opacity-80 mix-blend-lighten 2xs:scale-[0.55] xs:scale-[0.75] sm:scale-[0.9] md:scale-105" 
            autoPlay 
            loop 
            muted
            playsInline 
            preload="auto"
            poster="https://huly.io/_next/static/media/hero-illustration.7100a376.jpg"
          >
            <source src="https://huly.io/videos/pages/home/hero/hero.mp4?updated=20240607144404" type="video/mp4" />
            <source src="https://huly.io/videos/pages/home/hero/hero.webm?updated=20240607144404" type="video/webm" />
          </video>
          {/* Subtle gradient edges to blend with the wider black background if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent opacity-50"></div>
        </div>

        {/* Content Layer */}
        {/* Ensured content is aligned to the top-left */}
        <div className="relative z-10 flex-1 flex flex-col justify-start px-6 md:px-12 pt-24 md:pt-32">
          
          {/* Text Content Block */}
          <div 
            className={`flex flex-col items-start text-left max-w-2xl transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h1 className="relative z-30 bg-gradient-to-br from-white from-30% via-[#d5d8f6] via-80% to-[#a5f3fc] bg-clip-text font-sans text-[42px] sm:text-[56px] md:text-[72px] lg:text-[84px] font-semibold leading-[1.1] sm:leading-[0.95] tracking-tight text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              Precision Trading <br/>at Light Speed
            </h1>
            
            <div className="relative z-30 mt-8">
              {/* Glow Ring Behind Button */}
              <div className="absolute left-1/2 top-1/2 h-[calc(100%+9px)] w-[calc(100%+9px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-100 pointer-events-none">
                 <div className="relative h-full w-full rounded-full ring-1 ring-blue-400/30 blur-sm"></div>
              </div>

              <a 
                ref={buttonRef}
                onMouseMove={handleButtonMouseMove}
                href="#"
                aria-label="Start Trading Now"
                className="group relative flex items-center justify-center h-12 px-10 sm:px-14 text-[13px] uppercase font-bold text-[#e0f2fe] -tracking-[0.015em] z-10 overflow-hidden rounded-full border border-blue-400/40 bg-[#0c1220] transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                <div 
                  className="absolute -z-10 flex w-[204px] items-center justify-center pointer-events-none transition-transform duration-75 ease-linear" 
                  style={{ transform: `translateX(${buttonGlowX}px) translateZ(0px)` }}
                >
                  <div className="absolute top-1/2 h-[121px] w-[121px] -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,#3b82f6_0%,rgba(59,130,246,0.2)_50%,transparent_100%)]"></div>
                </div>
                <span className="relative z-20 mr-2">Open Free Account</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 relative z-20 group-hover:translate-x-1 transition-transform text-blue-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;