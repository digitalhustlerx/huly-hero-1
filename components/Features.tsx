import React from 'react';
import { Zap, ShieldCheck, TrendingUp, Cpu } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FeatureCard = ({ icon: Icon, title, description, index }: { icon: any, title: string, description: string, index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div 
      ref={ref}
      className={`group relative p-8 bg-[#0a0c10] border border-white/5 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:bg-[#0e121a] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Tech Grid Background on Hover */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-center w-14 h-14 mb-6 bg-white/5 rounded-lg border border-white/10 group-hover:bg-blue-600/10 group-hover:border-blue-500/40 transition-all duration-300">
          <Icon className="text-white group-hover:text-blue-400 transition-colors" size={28} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-bold font-display text-white mb-3 tracking-wide">{title}</h3>
        <p className="text-secondary text-sm leading-relaxed border-l-2 border-transparent group-hover:border-blue-500/30 pl-0 group-hover:pl-3 transition-all duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const Features = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-24 sm:py-32 bg-[#030508] relative overflow-hidden border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 transform ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
            System Architecture
          </span>
          <h2 className="text-4xl sm:text-6xl text-chrome tracking-tight mb-6">
            Engineered for Dominance
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-secondary font-light">
            A trading environment built without compromise. Speed, intelligence, and security converged into one monolithic platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            index={0}
            icon={Zap} 
            title="Zero-Latency Core" 
            description="Direct market access with execution speeds measuring in microseconds. Slip is a thing of the past." 
          />
          <FeatureCard 
            index={1}
            icon={TrendingUp} 
            title="Algorithmic Radar" 
            description="Our scanning engine processes 50,000+ data points per second to identify breakout patterns instantly." 
          />
          <FeatureCard 
            index={2}
            icon={Cpu} 
            title="Neural Forecasting" 
            description="Proprietary AI models predict short-term price movements with up to 87% historical accuracy." 
          />
          <FeatureCard 
            index={3}
            icon={ShieldCheck} 
            title="Fortress Security" 
            description="Military-grade encryption and cold storage custody ensure your capital remains untouchable." 
          />
        </div>
      </div>
    </section>
  );
};

export default Features;