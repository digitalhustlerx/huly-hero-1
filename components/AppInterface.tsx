import React, { useState, useEffect } from 'react';
import { 
  LineChart, Wallet, BookOpen, Users, Settings, 
  ArrowUpRight, ArrowDownRight, Clock, ChevronDown, 
  Search, Bell, User, Star, TrendingUp, ShieldCheck,
  Move, Lock
} from 'lucide-react';

interface AppInterfaceProps {
  activeFeature: string;
  dragUnlocked?: boolean;
  onToggleDrag?: () => void;
}

// -- SUBCOMPONENTS --

const SidebarItem = ({ icon: Icon, label, active, onClick, className = '' }: { icon: any, label: string, active?: boolean, onClick: () => void, className?: string }) => (
  <div 
    onClick={onClick}
    className={`w-10 h-10 md:w-full md:h-auto md:px-4 md:py-3 flex items-center justify-center md:justify-start gap-3 rounded-lg cursor-pointer transition-all duration-200 group ${active ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' : 'hover:bg-white/5 text-gray-400 hover:text-white'} ${className}`}
  >
    <Icon size={20} className={active ? 'text-blue-400' : 'group-hover:text-white'} />
    <span className="hidden md:block font-medium text-sm">{label}</span>
  </div>
);

const TraderCard = ({ name, roi, followers, winRate, avatarColor }: { name: string, roi: string, followers: string, winRate: string, avatarColor: string }) => (
  <div className="bg-[#161b22] border border-white/5 rounded-xl p-4 hover:border-blue-500/30 hover:bg-[#1c2128] transition-all cursor-pointer group">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center text-white font-bold border border-white/10`}>
          {name.substring(0,2).toUpperCase()}
        </div>
        <div>
          <h4 className="text-white text-sm font-bold group-hover:text-blue-400 transition-colors">{name}</h4>
          <span className="text-gray-500 text-xs">Pro Trader</span>
        </div>
      </div>
      <button className="bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white text-xs font-bold px-3 py-1.5 rounded-full transition-all border border-blue-500/20">
        Copy
      </button>
    </div>
    <div className="grid grid-cols-3 gap-2">
      <div className="text-center p-2 bg-black/20 rounded">
        <div className="text-green-400 font-mono text-sm font-bold">{roi}</div>
        <div className="text-gray-600 text-[10px] uppercase">ROI</div>
      </div>
      <div className="text-center p-2 bg-black/20 rounded">
        <div className="text-white font-mono text-sm font-bold">{winRate}</div>
        <div className="text-gray-600 text-[10px] uppercase">Win Rate</div>
      </div>
      <div className="text-center p-2 bg-black/20 rounded">
        <div className="text-gray-300 font-mono text-sm font-bold">{followers}</div>
        <div className="text-gray-600 text-[10px] uppercase">Copiers</div>
      </div>
    </div>
  </div>
);

const CourseCard = ({ title, level, duration, image }: { title: string, level: string, duration: string, image: string }) => (
  <div className="relative overflow-hidden rounded-xl group cursor-pointer border border-white/5 bg-[#161b22]">
    <div className="h-32 bg-gray-800 relative">
      <img src={image} alt={title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
      <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white border border-white/10">
        {level}
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-white font-bold text-sm mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
      <div className="flex items-center justify-between text-gray-500 text-xs">
        <span className="flex items-center gap-1"><Clock size={12} /> {duration}</span>
        <span className="flex items-center gap-1">Start Learning <ArrowUpRight size={12} /></span>
      </div>
    </div>
  </div>
);

// -- MAIN COMPONENT --

const AppInterface: React.FC<AppInterfaceProps> = ({ activeFeature, dragUnlocked, onToggleDrag }) => {
  // Map external activeFeature string to internal tab state
  const [activeTab, setActiveTab] = useState<'trade' | 'copy' | 'learn'>('trade');
  const [selectedDuration, setSelectedDuration] = useState('1m');

  useEffect(() => {
    if (activeFeature === 'trade' || activeFeature === 'copy' || activeFeature === 'learn') {
      setActiveTab(activeFeature);
    }
  }, [activeFeature]);

  return (
    <div className="flex h-[600px] md:h-[700px] w-full text-gray-300 font-sans text-xs sm:text-sm select-none bg-[#0d1117]">
      
      {/* SIDEBAR NAVIGATION */}
      <div className="w-16 md:w-64 bg-[#020408]/50 border-r border-white/5 flex flex-col py-4 px-2 md:px-4 gap-2">
        <SidebarItem icon={LineChart} label="Trade" active={activeTab === 'trade'} onClick={() => setActiveTab('trade')} />
        <SidebarItem icon={Users} label="Copy Trading" active={activeTab === 'copy'} onClick={() => setActiveTab('copy')} />
        <SidebarItem icon={BookOpen} label="Academy" active={activeTab === 'learn'} onClick={() => setActiveTab('learn')} />
        
        <div className="h-[1px] bg-white/5 my-2 mx-2"></div>
        
        <SidebarItem icon={Wallet} label="Wallet" onClick={() => {}} />
        <SidebarItem icon={Settings} label="Settings" onClick={() => {}} />

        {/* DRAG TOGGLE BUTTON */}
        <SidebarItem 
          icon={dragUnlocked ? Lock : Move} 
          label={dragUnlocked ? "Lock Position" : "Move Dashboard"} 
          active={dragUnlocked}
          onClick={() => onToggleDrag && onToggleDrag()} 
          className={dragUnlocked ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' : ''}
        />
        
        <div className="mt-auto md:p-4 p-2 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl border border-white/5 hidden md:block">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              JS
            </div>
            <div>
              <div className="text-white font-bold text-xs">John Smith</div>
              <div className="text-green-400 text-[10px] font-mono">$12,450.00</div>
            </div>
          </div>
          <button className="w-full bg-green-600 hover:bg-green-500 text-white text-xs font-bold py-2 rounded transition-colors">
            Deposit
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        
        {/* HEADER */}
        <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#0d1117]/80 backdrop-blur-sm z-20">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 cursor-pointer hover:bg-white/5 px-2 py-1 rounded transition">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-[8px] font-bold">BTC</div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-white font-bold">BTC/USD</span>
                  <ChevronDown size={12} className="text-gray-500" />
                </div>
              </div>
            </div>
            <div className="h-6 w-[1px] bg-white/10"></div>
            <div className="flex gap-4">
               <div className="flex flex-col">
                 <span className="text-[10px] text-gray-500 font-bold">PRICE</span>
                 <span className="text-white font-mono font-medium">$64,231.50</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-[10px] text-gray-500 font-bold">24H CHANGE</span>
                 <span className="text-green-400 font-mono font-medium">+2.4%</span>
               </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="hidden sm:flex bg-white/5 rounded-lg p-1">
               <button className="px-3 py-1 bg-white/10 text-white rounded text-xs font-bold shadow-sm">Real</button>
               <button className="px-3 py-1 text-gray-500 hover:text-white rounded text-xs font-bold transition">Demo</button>
             </div>
             <Bell size={18} className="text-gray-400 hover:text-white cursor-pointer" />
             <User size={18} className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* DYNAMIC CONTENT AREA */}
        <div className="flex-1 bg-[#020408] overflow-y-auto custom-scrollbar relative">
          
          {/* ----- TRADING VIEW ----- */}
          {activeTab === 'trade' && (
            <div className="flex h-full flex-col md:flex-row">
              {/* Chart Area */}
              <div className="flex-1 p-4 relative flex flex-col">
                {/* Chart Toolbar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    {['1m', '5m', '15m', '1h', '4h'].map(t => (
                      <button key={t} className={`text-xs px-2 py-1 rounded ${t === '1m' ? 'bg-blue-600/20 text-blue-400' : 'text-gray-500 hover:text-gray-300'}`}>{t}</button>
                    ))}
                  </div>
                  <div className="flex gap-2 text-gray-500">
                    <TrendingUp size={16} className="cursor-pointer hover:text-white" />
                    <Settings size={16} className="cursor-pointer hover:text-white" />
                  </div>
                </div>

                {/* SVG Chart Simulation */}
                <div className="flex-1 w-full relative border-t border-b border-white/5 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] bg-opacity-5">
                   <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
                     <defs>
                       <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2"/>
                         <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
                       </linearGradient>
                     </defs>
                     <line x1="0" y1="100" x2="800" y2="100" stroke="white" strokeOpacity="0.05" strokeDasharray="4 4" />
                     <line x1="0" y1="200" x2="800" y2="200" stroke="white" strokeOpacity="0.05" strokeDasharray="4 4" />
                     <line x1="0" y1="300" x2="800" y2="300" stroke="white" strokeOpacity="0.05" strokeDasharray="4 4" />
                     <path 
                       d="M0,350 Q50,340 100,280 T200,300 T300,200 T400,220 T500,150 T600,180 T700,100 T800,80" 
                       fill="url(#chartGradient)" 
                       stroke="#22c55e" 
                       strokeWidth="2"
                       className="drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                     />
                     <circle cx="800" cy="80" r="4" fill="#22c55e" className="animate-pulse" />
                     <line x1="0" y1="80" x2="800" y2="80" stroke="#22c55e" strokeOpacity="0.5" strokeDasharray="2 2" />
                   </svg>
                   <div className="absolute top-[20%] right-0 bg-green-600 text-white text-[10px] px-1.5 py-0.5 font-mono rounded-l">
                     64,231.50
                   </div>
                </div>
              </div>

              {/* Trading Panel */}
              <div className="w-full md:w-72 bg-[#161b22] border-l border-white/5 p-4 flex flex-col gap-6">
                 <div>
                   <label className="text-gray-500 text-xs font-bold uppercase mb-2 block">Amount (USD)</label>
                   <div className="bg-[#0d1117] border border-white/10 rounded-lg flex items-center px-3 py-2.5">
                     <span className="text-gray-400 mr-2">$</span>
                     <input type="text" className="bg-transparent border-none outline-none text-white font-mono w-full" defaultValue="100" />
                   </div>
                   <div className="flex gap-2 mt-2">
                     <button className="flex-1 bg-white/5 hover:bg-white/10 text-xs py-1 rounded text-gray-400 transition">$50</button>
                     <button className="flex-1 bg-white/5 hover:bg-white/10 text-xs py-1 rounded text-gray-400 transition">$100</button>
                     <button className="flex-1 bg-white/5 hover:bg-white/10 text-xs py-1 rounded text-gray-400 transition">$500</button>
                   </div>
                 </div>

                 <div>
                   <label className="text-gray-500 text-xs font-bold uppercase mb-2 block">Duration</label>
                   <div className="grid grid-cols-3 gap-2">
                     {['30s', '1m', '5m'].map(d => (
                       <button 
                         key={d}
                         onClick={() => setSelectedDuration(d)}
                         className={`text-xs py-2 rounded font-bold border transition-all ${selectedDuration === d ? 'bg-white text-black border-white' : 'bg-[#0d1117] text-gray-400 border-white/10 hover:border-white/30'}`}
                       >
                         {d}
                       </button>
                     ))}
                   </div>
                 </div>

                 <div className="mt-auto space-y-3">
                   <div className="flex justify-between text-xs mb-2">
                     <span className="text-gray-500">Payout (85%)</span>
                     <span className="text-green-400 font-bold">+$185.00</span>
                   </div>
                   <button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold text-lg py-3 rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all flex items-center justify-center gap-2">
                     <ArrowUpRight size={20} />
                     CALL / BUY
                   </button>
                   <button className="w-full bg-red-500 hover:bg-red-400 text-black font-bold text-lg py-3 rounded-lg shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all flex items-center justify-center gap-2">
                     <ArrowDownRight size={20} />
                     PUT / SELL
                   </button>
                 </div>
              </div>
            </div>
          )}

          {/* ----- COPY TRADING VIEW ----- */}
          {activeTab === 'copy' && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Top Traders</h2>
                <div className="flex gap-2">
                   <button className="px-3 py-1.5 bg-blue-600/20 text-blue-400 rounded text-xs font-bold border border-blue-500/20">7 Days</button>
                   <button className="px-3 py-1.5 bg-white/5 text-gray-400 rounded text-xs font-bold border border-transparent hover:border-white/10">30 Days</button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <TraderCard name="CryptoKing" roi="+342%" followers="1,204" winRate="88%" avatarColor="bg-purple-600" />
                <TraderCard name="AlexTrades" roi="+156%" followers="892" winRate="76%" avatarColor="bg-blue-600" />
                <TraderCard name="SatoshiNakamoto" roi="+512%" followers="3,400" winRate="92%" avatarColor="bg-orange-600" />
                <TraderCard name="LunaWhale" roi="+98%" followers="450" winRate="68%" avatarColor="bg-pink-600" />
                <TraderCard name="GreenCandle" roi="+210%" followers="1,020" winRate="81%" avatarColor="bg-green-600" />
                <TraderCard name="BearHunter" roi="+185%" followers="670" winRate="79%" avatarColor="bg-red-600" />
              </div>

              <div className="mt-8 bg-[#161b22] border border-white/5 rounded-xl p-6 flex flex-col items-center text-center">
                <ShieldCheck size={40} className="text-blue-400 mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">Safe Copy Trading</h3>
                <p className="text-gray-400 text-sm max-w-md">Our advanced risk management system ensures your copy trades are executed with stop-loss protection automatically enabled.</p>
              </div>
            </div>
          )}

          {/* ----- LEARN VIEW ----- */}
          {activeTab === 'learn' && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                   <h2 className="text-xl font-bold text-white mb-1">NEXUS Academy</h2>
                   <p className="text-gray-500 text-xs">Master the markets with our curated courses.</p>
                </div>
                <div className="relative">
                   <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                   <input type="text" placeholder="Search topics..." className="bg-[#161b22] border border-white/10 rounded-full pl-9 pr-4 py-2 text-xs text-white focus:outline-none focus:border-blue-500/50" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                 <CourseCard title="Crypto Trading 101" level="Beginner" duration="2h 15m" image="https://images.unsplash.com/photo-1621504450168-b8c437544378?auto=format&fit=crop&q=80&w=300" />
                 <CourseCard title="Mastering Technical Analysis" level="Intermediate" duration="4h 30m" image="https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=300" />
                 <CourseCard title="Risk Management Strategies" level="Advanced" duration="1h 45m" image="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=300" />
                 <CourseCard title="DeFi & Yield Farming" level="Intermediate" duration="3h 10m" image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=300" />
              </div>
              
              <div className="mt-8">
                <h3 className="text-white font-bold text-md mb-4 flex items-center gap-2">
                  <Star size={16} className="text-yellow-500" /> Featured Articles
                </h3>
                <div className="space-y-3">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="flex items-start gap-4 p-3 hover:bg-white/5 rounded-lg cursor-pointer transition">
                       <div className="w-16 h-16 bg-gray-800 rounded-lg flex-shrink-0 overflow-hidden">
                          <img src={`https://picsum.photos/seed/${i+50}/200`} className="w-full h-full object-cover" />
                       </div>
                       <div>
                         <h4 className="text-white font-medium text-sm mb-1 hover:text-blue-400">Understanding Market Psychology: The Fear & Greed Index</h4>
                         <p className="text-gray-500 text-xs line-clamp-2">Learn how emotional states drive market cycles and how you can profit from extreme sentiment shifts.</p>
                       </div>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AppInterface;