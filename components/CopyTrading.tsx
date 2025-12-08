import React from 'react';
import { Users, TrendingUp, ChevronRight, Activity } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TraderRow = ({ rank, name, roi, profit, index }: { rank: number, name: string, roi: string, profit: string, index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div 
      ref={ref}
      className={`group flex items-center justify-between p-4 border-b border-white/5 bg-[#0e121a]/50 hover:bg-[#1a202c] transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-4">
        <span className={`font-mono text-sm w-6 ${rank === 1 ? 'text-yellow-400' : 'text-gray-500'}`}>0{rank}</span>
        <div className="flex flex-col">
          <span className="text-white font-bold text-sm tracking-wide font-display group-hover:text-blue-400 transition-colors">{name}</span>
          <span className="text-[10px] text-gray-500 uppercase tracking-wider">Pro Signalist</span>
        </div>
      </div>
      
      <div className="flex items-center gap-8 text-right">
        <div className="hidden sm:block">
           <div className="text-green-400 font-mono font-medium text-sm">{roi}</div>
           <div className="text-[10px] text-gray-600 uppercase">30D Return</div>
        </div>
        <div>
           <div className="text-white font-mono font-medium text-sm">{profit}</div>
           <div className="text-[10px] text-gray-600 uppercase">Total Profit</div>
        </div>
        <button className="p-2 rounded bg-white/5 hover:bg-blue-600 hover:text-white text-gray-400 transition-all">
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

const CopyTrading = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: hudRef, isVisible: hudVisible } = useScrollAnimation();

  return (
    <section id="copy-trading" className="py-24 sm:py-32 bg-[#020408] relative border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div 
            ref={textRef}
            className={`relative transition-all duration-1000 ease-out ${textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-[1px] bg-blue-500"></div>
                <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Social Alpha</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-bold text-chrome tracking-tight leading-tight mb-8">
              Replicate Success.<br />
              <span className="text-white/40">Automate Wealth.</span>
            </h2>
            
            <p className="text-lg text-secondary leading-relaxed mb-8">
              Bypass the learning curve. Mirror the exact positions of verified institutional-grade traders. Your portfolio updates in real-time, matching their every move.
            </p>

            <div className="space-y-6">
               <div className="flex items-start gap-4">
                 <div className="mt-1">
                   <Users className="w-5 h-5 text-blue-500" />
                 </div>
                 <div>
                   <h4 className="text-white font-bold font-display text-lg">Vetted Elite Traders</h4>
                   <p className="text-sm text-gray-500 mt-1">Only the top 1% of traders with verified track records make it to our master list.</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="mt-1">
                   <Activity className="w-5 h-5 text-blue-500" />
                 </div>
                 <div>
                   <h4 className="text-white font-bold font-display text-lg">Seamless Sync</h4>
                   <p className="text-sm text-gray-500 mt-1">Zero latency copying. When they enter a position, you enter instantly.</p>
                 </div>
               </div>
            </div>
          </div>

          {/* HUD Interface */}
          <div 
            ref={hudRef}
            className={`relative rounded-xl bg-[#0a0c10] border border-white/10 overflow-hidden transition-all duration-1000 ease-out delay-200 shadow-2xl ${hudVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
             {/* HUD Header */}
             <div className="flex items-center justify-between px-6 py-4 bg-[#0e121a] border-b border-white/5">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Live Market Feed</span>
                </div>
                <div className="text-xs font-mono text-blue-500">NET_PROFIT_LEADERBOARD</div>
             </div>

             <div className="p-0">
                <TraderRow index={0} rank={1} name="Nakamoto_X" roi="+412.5%" profit="$142,890" />
                <TraderRow index={1} rank={2} name="Alpha_Centauri" roi="+289.1%" profit="$98,420" />
                <TraderRow index={2} rank={3} name="Quantum_Leap" roi="+156.4%" profit="$67,110" />
                <TraderRow index={3} rank={4} name="Void_Walker" roi="+98.2%" profit="$42,300" />
             </div>

             <div className="p-4 bg-[#0e121a] border-t border-white/5 text-center">
                <a href="#" className="text-xs font-bold text-blue-400 uppercase tracking-widest hover:text-white transition-colors">
                  View Full Leaderboard
                </a>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CopyTrading;