import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
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

  // Mouse tracking for the main lighting effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current.style.setProperty('--hero-mask-x', `${x}px`);
        containerRef.current.style.setProperty('--hero-mask-y', `${y}px`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Mouse tracking specifically for the button glow
  const handleButtonMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      // Center the 204px wide glow on the cursor
      setButtonGlowX(x - 102); 
    }
  };

  const handleButtonMouseLeave = () => {
    // Optional: Reset or fade out
  };

  return (
    <div 
      ref={containerRef}
      className="relative flex w-full min-h-screen flex-col overflow-hidden bg-[#020408]"
      style={{
        '--hero-mask-size': '600px',
        '--hero-mask-x': '50%',
        '--hero-mask-y': '50%'
      } as React.CSSProperties}
    >
      
      {/* GLOBAL BACKGROUND VIDEO - Full Screen Coverage */}
      {/* Optimization: Added poster for better LCP and aria-hidden for accessibility */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <video 
          className="w-full h-full object-cover opacity-100 mix-blend-lighten" 
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
      </div>

      {/* Content Container - Aligned Center Left */}
      <div className="container relative z-10 w-full px-6 md:px-12 mx-auto flex-1 flex flex-col justify-center">
        
        {/* Headline Section - Left Aligned */}
        {/* Animation: Fade-in and slide-up on scroll/view */}
        <div 
          className={`flex flex-col items-start text-left max-w-2xl lg:max-w-3xl transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h1 className="relative z-30 bg-gradient-to-br from-white from-30% via-[#d5d8f6] via-80% to-[#fdf7fe] bg-clip-text font-sans text-[42px] sm:text-[56px] md:text-[72px] lg:text-[84px] font-semibold leading-[1.1] sm:leading-[0.95] tracking-tight text-transparent mb-6 sm:mb-8">
            Everything App for&nbsp;your teams
          </h1>
          
          <p className="relative z-30 mt-2 max-w-[90vw] sm:max-w-xl text-lg sm:text-xl leading-snug tracking-tight text-[#8b949e] mb-10 sm:mb-14">
            Huly, an open-source platform, serves as an all-in-one replacement of Linear, Jira, Slack, and Notion.
          </p>

          {/* Custom "See in Action" Button */}
          <div className="relative z-30">
            <div className="relative inline-flex items-center z-10">
              {/* Outer Glow/Blur Ring */}
              <div className="absolute left-1/2 top-1/2 h-[calc(100%+9px)] w-[calc(100%+9px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-100 pointer-events-none">
                 <div className="relative h-full w-full rounded-full ring-1 ring-white/20 blur-sm"></div>
              </div>

              <a 
                ref={buttonRef}
                onMouseMove={handleButtonMouseMove}
                onMouseLeave={handleButtonMouseLeave}
                href="#"
                aria-label="See in Action"
                className="group relative flex items-center justify-center h-12 px-10 sm:px-14 text-[13px] uppercase font-bold text-[#5A250A] -tracking-[0.015em] z-10 overflow-hidden rounded-full border border-white/60 bg-[#d1d1d1] transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020408] active:scale-95"
              >
                {/* Internal Moving Glow */}
                <div 
                  className="absolute -z-10 flex w-[204px] items-center justify-center pointer-events-none transition-transform duration-75 ease-linear" 
                  style={{ transform: `translateX(${buttonGlowX}px) translateZ(0px)` }}
                >
                  <div className="absolute top-1/2 h-[121px] w-[121px] -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,#FFFFF5_3.5%,_#FFAA81_26.5%,#FFDA9F_37.5%,rgba(255,170,129,0.50)_49%,rgba(210,106,58,0.00)_92.5%)]"></div>
                  <div className="absolute top-1/2 h-[103px] w-[204px] -translate-y-1/2 bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#FFFFF7_29%,_#FFFACD_48.5%,_#F4D2BF_60.71%,rgba(214,211,210,0.00)_100%)] blur-[5px]"></div>
                </div>

                <span className="relative z-20 mr-2">See in Action</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-[9px] w-[17px] text-[#5A250A] relative z-20 group-hover:translate-x-1 transition-transform">
                  <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd"></path>
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