import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const FEATURES = [
  "Team Planner",
  "Project Management",
  "Virtual Office",
  "Chat",
  "Documents",
  "Inbox"
];

const Hero: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(FEATURES[1]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for the lighting effect
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

  return (
    <div 
      ref={containerRef}
      className="relative flex w-full flex-col items-center pt-[118px] lg:pt-[190px] overflow-hidden bg-[#020408]"
      style={{
        '--hero-mask-size': '635px',
        '--hero-mask-x': '50%',
        '--hero-mask-y': '50%'
      } as React.CSSProperties}
    >
      
      {/* Content Container */}
      <div className="container relative flex flex-col items-center px-6 mx-auto">
        
        {/* Text Content */}
        <h1 className="relative z-30 max-w-[616px] bg-gradient-to-br from-white from-30% via-[#d5d8f6] via-80% to-[#fdf7fe] bg-clip-text font-title text-5xl md:text-[84px] font-semibold leading-[0.9] tracking-tighter text-transparent lg:max-w-[528px] lg:text-72px md:max-w-[441px] md:text-56px sm:max-w-64 sm:text-3xl text-center mb-8">
          Everything App for&nbsp;your teams
        </h1>
        
        <p className="relative z-30 mt-5 max-w-md text-lg leading-snug tracking-tight text-grey-90 lg:mt-4 md:mt-3.5 md:text-16 sm:mt-3 sm:max-w-[248px] sm:text-15 text-[#8b949e] text-center mb-10">
          Huly, an open-source platform, serves as an all-in-one replacement of Linear, Jira, Slack, and Notion.
        </p>

        <div className="relative z-30 flex items-center justify-center gap-4">
          <button className="group relative px-7 py-3.5 rounded-full bg-[linear-gradient(180deg,_#FFFFFF_0%,_#E1E4E8_100%)] text-[#020408] text-sm font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.45)] transition-all duration-300 flex items-center gap-2">
            <span>SEE IN ACTION</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Visuals Wrapper */}
        <div className="mt-11 lg:mt-9 md:mt-7 sm:mt-5 w-full flex justify-center">
          
          {/* Main Relative Container for Absolute Children */}
          <div className="relative z-0 aspect-[1.067842] w-[1574px] max-w-none lg:w-[1220px] md:w-full md:max-w-full">
            
            {/* The Positioning Wrapper */}
            <div className="absolute bottom-0 left-6 aspect-[1.067842] w-[1574px] max-w-none lg:-bottom-[39px] lg:left-0 lg:w-[1220px] md:relative md:bottom-auto md:aspect-auto md:w-full md:max-w-full sm:mt-[-36%] sm:-top-3 sm:mb-[-15%] sm:mt-0 sm:w-full xs:top-1.5 xs:mb-2 xs:min-h-[350px] 2xs:aspect-auto">
              
              {/* VIDEO LAYER */}
              <div className="absolute -left-[344px] bottom-0 z-0 aspect-[1.335187] w-[1920px] max-w-none mix-blend-lighten lg:bottom-[23px] lg:left-[-253px] lg:w-[1620px] md:bottom-[-2.1%] md:left-[-27%] md:w-[147%] sm:bottom-[5.4%] sm:left-[-34.95%] sm:w-[189%] xs:bottom-[1.9%] xs:left-[-36.2%] xs:w-[190%] xs:min-w-[704px] 2xs:bottom-[18px] 2xs:left-[-132px] pointer-events-none">
                <video 
                  className="absolute inset-0 w-full h-full" 
                  width="1920" 
                  height="1438" 
                  autoPlay 
                  loop 
                  muted
                  playsInline 
                  style={{ opacity: 1 }}
                >
                  <source src="https://huly.io/videos/pages/home/hero/hero.mp4?updated=20240607144404" type="video/mp4" />
                  <source src="https://huly.io/videos/pages/home/hero/hero.webm?updated=20240607144404" type="video/webm" />
                </video>
              </div>

              {/* SVG OVERLAY with Mask Effect */}
              <div className="relative h-full mix-blend-overlay">
                <img 
                  alt="" 
                  loading="lazy" 
                  width="1574" 
                  height="1474" 
                  decoding="async" 
                  data-nimg="1" 
                  className="absolute z-10 w-full max-w-none"
                  style={{
                    maskImage: 'radial-gradient(var(--hero-mask-size) at var(--hero-mask-x) var(--hero-mask-y), black 20%, transparent)',
                    WebkitMaskImage: 'radial-gradient(var(--hero-mask-size) at var(--hero-mask-x) var(--hero-mask-y), black 20%, transparent)',
                    color: 'transparent'
                  }}
                  src="https://huly.io/_next/static/media/e4c3a7bd600393b1420b0ffef056534d.svg" 
                />
              </div>

              {/* DASHBOARD IMAGE */}
              <img 
                alt="Huly Interface" 
                fetchPriority="high" 
                width="1024" 
                height="569" 
                decoding="async" 
                data-nimg="1" 
                className="absolute bottom-[141px] left-2 rounded-t-[10px] lg:bottom-[138px] lg:left-9 lg:w-[873px] md:bottom-[9.5%] md:left-0 md:w-[78.4%] md:rounded-t-md sm:relative sm:bottom-auto sm:mt-[18.7%] sm:w-[100.5%] sm:min-w-[100.5%] sm:rounded-t xs:mt-[21.6%] xs:w-full xs:min-w-[376px] 2xs:mt-[70px]" 
                style={{ color: 'transparent' }}
                sizes="100vw"
                src="https://huly.io/_next/static/media/hero-illustration.7100a376.jpg" 
              />
              
            </div>
          </div>
        </div>

      </div>

      {/* --- BOTTOM TABS (Visual Only) --- */}
      <div className="relative z-40 w-full px-6 hidden sm:block mt-auto pb-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[10px] text-gray-500 mb-6 font-semibold uppercase tracking-widest">
            Everything you need for productive team work:
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {FEATURES.map((feature) => (
              <button
                key={feature}
                onClick={() => setActiveFeature(feature)}
                className={`text-[13px] font-medium transition-all duration-200 ${
                  activeFeature === feature 
                    ? 'text-white border-b-2 border-white pb-1' 
                    : 'text-gray-500 hover:text-gray-300 pb-1 border-b-2 border-transparent'
                }`}
              >
                {feature}
              </button>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;