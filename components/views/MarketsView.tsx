

import React from 'react';
import { Search, Star, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const MarketRow = ({ coin, name, price, change, volume, graphColor }: any) => (
  <div className="grid grid-cols-12 gap-4 items-center py-4 border-b border-white/5 hover:bg-white/5 transition-colors px-4 group cursor-pointer">
     <div className="col-span-3 flex items-center gap-3">
        <Star size={16} className="text-gray-600 group-hover:text-yellow-500 transition-colors" />
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">{coin[0]}</div>
        <div>
           <div className="font-bold font-display text-sm">{coin}</div>
           <div className="text-xs text-gray-500">{name}</div>
        </div>
     </div>
     <div className="col-span-3 font-mono text-sm text-right pr-8">${price}</div>
     <div className={`col-span-2 font-mono text-sm flex items-center gap-1 ${change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
        {change.startsWith('+') ? <ArrowUpRight size={14}/> : <ArrowDownRight size={14}/>}
        {change}
     </div>
     <div className="col-span-2 font-mono text-sm text-gray-400 hidden md:block">{volume}</div>
     <div className="col-span-2 h-8 hidden md:flex items-center">
        {/* Simple SVG Sparkline */}
        <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
           <path d="M0,10 Q25,18 50,10 T100,5" fill="none" stroke={graphColor} strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
     </div>
  </div>
);

const MarketsView = () => {
  return (
    <div className="pt-24 min-h-screen pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
             <h1 className="text-4xl font-bold text-chrome mb-2">Market Watch</h1>
             <p className="text-secondary">See live prices and performance for all major crypto assets.</p>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search Assets..." 
                  className="pl-10 pr-4 py-2 bg-[#0e121a] border border-white/10 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors w-64"
                />
             </div>
          </div>
       </div>

       {/* Stats Grid */}
       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Global Market Cap', val: '$2.43T', change: '+1.2%' },
            { label: '24h Volume', val: '$89.2B', change: '-5.4%' },
            { label: 'BTC Dominance', val: '52.1%', change: '+0.1%' },
            { label: 'ETH Gas', val: '12 Gwei', change: '-2 Gwei' }
          ].map((stat, i) => (
             <div key={i} className="p-4 bg-[#0e121a] border border-white/5 rounded-xl">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{stat.label}</div>
                <div className="flex items-end gap-2">
                   <div className="text-2xl font-bold font-display">{stat.val}</div>
                   <div className={`text-xs font-mono mb-1 ${stat.change.includes('+') ? 'text-green-400' : 'text-red-400'}`}>{stat.change}</div>
                </div>
             </div>
          ))}
       </div>

       {/* Table */}
       <div className="bg-[#0a0c10] border border-white/10 rounded-xl overflow-hidden">
          <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-[#0e121a] border-b border-white/5 text-xs font-bold text-gray-500 uppercase tracking-wider">
             <div className="col-span-3">Asset</div>
             <div className="col-span-3 text-right pr-8">Price</div>
             <div className="col-span-2">24h Change</div>
             <div className="col-span-2 hidden md:block">Volume (24h)</div>
             <div className="col-span-2 hidden md:block">Last 7 Days</div>
          </div>

          <div className="divide-y divide-white/5">
             <MarketRow coin="BTC" name="Bitcoin" price="64,242.50" change="+2.45%" volume="$32.1B" graphColor="#22c55e" />
             <MarketRow coin="ETH" name="Ethereum" price="3,450.22" change="+1.82%" volume="$15.4B" graphColor="#22c55e" />
             <MarketRow coin="SOL" name="Solana" price="145.80" change="+5.21%" volume="$4.2B" graphColor="#22c55e" />
             <MarketRow coin="BNB" name="Binance Coin" price="590.10" change="-0.42%" volume="$1.1B" graphColor="#ef4444" />
             <MarketRow coin="XRP" name="Ripple" price="0.62" change="+0.51%" volume="$890M" graphColor="#22c55e" />
             <MarketRow coin="ADA" name="Cardano" price="0.45" change="-1.20%" volume="$450M" graphColor="#ef4444" />
             <MarketRow coin="DOGE" name="Dogecoin" price="0.16" change="+8.40%" volume="$1.2B" graphColor="#22c55e" />
             <MarketRow coin="AVAX" name="Avalanche" price="35.60" change="+2.10%" volume="$320M" graphColor="#22c55e" />
          </div>
       </div>
    </div>
  );
};

export default MarketsView;