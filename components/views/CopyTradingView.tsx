
import React, { useState, useMemo } from 'react';
import { Shield, Zap, TrendingUp, ArrowUpRight, ChevronDown, CheckCircle } from 'lucide-react';
import { ViewState } from '../../App';

interface Trader {
  rank: number;
  name: string;
  pnl: number; // Use number for sorting
  winRate: number; // Use number for sorting
  risk: number; // Use number for sorting
  managed: string;
  followers: number; // Use number for sorting
  tags: string[];
}

interface CopyTradingViewProps {
  onViewChange: (view: ViewState) => void;
}

const allTraders: Trader[] = [
  { rank: 1, name: "Satoshi_Ghost", pnl: 412.5, winRate: 78, risk: 6, managed: "$4.2M", followers: 12000, tags: ['Fast', 'Bitcoin'] },
  { rank: 2, name: "Alpha_Vector", pnl: 389.2, winRate: 65, risk: 4, managed: "$2.8M", followers: 8500, tags: ['Steady', 'Ethereum'] },
  { rank: 3, name: "Quantum_Leap", pnl: 256.4, winRate: 82, risk: 3, managed: "$8.1M", followers: 15000, tags: ['Safe', 'Long Term'] },
  { rank: 4, name: "Void_Runner", pnl: 198.2, winRate: 55, risk: 8, managed: "$1.2M", followers: 3200, tags: ['Aggressive', 'Solana'] },
  { rank: 5, name: "Iron_Bank", pnl: 145.0, winRate: 92, risk: 2, managed: "$15.4M", followers: 22000, tags: ['Very Safe', 'Stable'] },
  { rank: 6, name: "Neon_Blade", pnl: 132.8, winRate: 68, risk: 5, managed: "$980k", followers: 4100, tags: ['Daily', 'Mixed'] },
  { rank: 7, name: "Cipher_Punk", pnl: 98.5, winRate: 61, risk: 7, managed: "$650k", followers: 2800, tags: ['Trending'] },
  { rank: 8, name: "HODL_Gawd", pnl: 87.2, winRate: 45, risk: 9, managed: "$320k", followers: 1500, tags: ['High Risk'] },
  { rank: 9, name: "Ether_Whale", pnl: 215.7, winRate: 75, risk: 4, managed: "$6.5M", followers: 9800, tags: ['Ethereum', 'Stable'] },
  { rank: 10, name: "Sol_Surfer", pnl: 355.1, winRate: 60, risk: 7, managed: "$2.1M", followers: 6400, tags: ['Solana', 'Aggressive'] },
];


interface TraderProfileCardProps {
  trader: Trader;
  onViewChange: (view: ViewState) => void;
}

const TraderProfileCard: React.FC<TraderProfileCardProps> = ({ trader, onViewChange }) => (
  <div className="group relative bg-[#0e121a] border border-white/5 rounded-xl p-5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
    <div className="absolute top-4 right-4 text-xs font-mono text-gray-600 font-bold">#{trader.rank}</div>
    
    <div className="flex items-center gap-4 mb-6">
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center font-bold text-lg font-display">
          {trader.name.substring(0, 2).toUpperCase()}
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#0e121a] rounded-full"></div>
      </div>
      <div>
        <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">{trader.name}</h3>
        <div className="flex gap-2 mt-1">
          {trader.tags.map((tag: string) => (
            <span key={tag} className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
      <div>
        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Total Profit</div>
        <div className="text-xl font-bold font-mono text-green-400">+{trader.pnl.toFixed(1)}%</div>
      </div>
      <div>
        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Win Rate</div>
        <div className="text-xl font-bold font-mono text-white">{trader.winRate}%</div>
      </div>
      <div>
        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Followers</div>
        <div className="text-sm font-bold font-mono text-gray-300">{(trader.followers / 1000).toFixed(1)}k</div>
      </div>
      <div>
        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Risk Level</div>
        <div className={`text-sm font-bold font-mono px-2 py-0.5 inline-block rounded ${trader.risk < 4 ? 'bg-green-500/20 text-green-400' : trader.risk < 7 ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>
          {trader.risk}/10
        </div>
      </div>
    </div>

    <button 
      onClick={() => onViewChange('auth')}
      className="w-full py-3 bg-white/5 hover:bg-blue-600 text-white font-bold text-sm uppercase tracking-wider rounded border border-white/5 hover:border-blue-500 transition-all flex items-center justify-center gap-2"
    >
      <Zap size={14} /> Copy This Trader
    </button>
  </div>
);

type FilterType = 'all traders' | 'most popular' | 'safe & stable' | 'high profit' | 'new stars';

const CopyTradingView: React.FC<CopyTradingViewProps> = ({ onViewChange }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all traders');

  const sortedTraders = useMemo(() => {
    let traders = [...allTraders];
    switch (activeFilter) {
      case 'most popular':
        return traders.sort((a, b) => b.followers - a.followers);
      case 'safe & stable':
        return traders.filter(t => t.risk <= 4).sort((a, b) => a.risk - b.risk || b.winRate - a.winRate);
      case 'high profit':
        return traders.sort((a, b) => b.pnl - a.pnl);
      case 'new stars':
         // Example logic: high PNL but fewer than 10k followers
        return traders.filter(t => t.followers < 10000).sort((a, b) => b.pnl - a.pnl);
      case 'all traders':
      default:
        return traders.sort((a, b) => a.rank - b.rank);
    }
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-[#030508] pb-20">
      {/* Unique Hero Section for Copy Trading */}
      <div className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
         <div className="absolute inset-0 opacity-20 pointer-events-none">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 Q 25 50 50 100 T 100 0" stroke="url(#grad1)" strokeWidth="0.5" fill="none" />
             <path d="M0 80 Q 40 10 80 80 T 100 20" stroke="url(#grad1)" strokeWidth="0.3" fill="none" />
             <defs>
               <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:0}} />
                 <stop offset="50%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
                 <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:0}} />
               </linearGradient>
             </defs>
           </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Smart Copy Trading</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-chrome mb-6 leading-tight">
                Follow Top Traders.<br />
                <span className="text-white/30">Grow Your Capital.</span>
              </h1>
              <p className="text-lg text-secondary leading-relaxed max-w-lg">
                Don't be an expert, trade like one. Choose a top-performing trader, hit 'Copy', and their trades will automatically sync to your account.
              </p>
            </div>
            
            <div className="flex gap-8 p-6 bg-[#0e121a]/80 backdrop-blur border border-white/10 rounded-xl">
               <div>
                 <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Total Invested</div>
                 <div className="text-2xl font-bold font-display text-white">$4.2B+</div>
               </div>
               <div className="w-[1px] bg-white/10"></div>
               <div>
                 <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Happy Copiers</div>
                 <div className="text-2xl font-bold font-display text-white">84,209</div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="sticky top-[73px] z-30 bg-[#030508]/90 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
             <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                {(['All Traders', 'Most Popular', 'Safe & Stable', 'High Profit', 'New Stars'] as const).map(filter => (
                  <button 
                    key={filter} 
                    onClick={() => setActiveFilter(filter.toLowerCase() as FilterType)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-all ${
                      activeFilter === filter.toLowerCase() 
                        ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex items-center gap-2">
           <TrendingUp className="text-blue-500" size={20} />
           <h2 className="text-xl font-bold text-white font-display capitalize">{activeFilter}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedTraders.map(trader => (
            <TraderProfileCard key={trader.rank} trader={trader} onViewChange={onViewChange} />
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-transparent border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Smart Safety Guard</h3>
                <p className="text-gray-400 max-w-md">Automatically stop copying if a trader's performance falls outside your comfort zone. You're always in control.</p>
              </div>
           </div>
           <button 
             onClick={() => onViewChange('auth')}
             className="whitespace-nowrap px-8 py-3 bg-white text-[#030508] font-bold uppercase tracking-wider rounded hover:bg-gray-200 transition-colors"
           >
              Set Safety Limits
           </button>
        </div>
      </div>
    </div>
  );
};

export default CopyTradingView;
