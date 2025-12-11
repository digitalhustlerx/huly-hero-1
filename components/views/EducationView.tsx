
import React, { useState } from 'react';
import { 
  BookOpen, 
  Award, 
  Zap, 
  BrainCircuit, 
  LineChart, 
  BarChart, 
  ShieldCheck, 
  Lock, 
  PlayCircle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Layers,
  Coins,
  Wallet
} from 'lucide-react';
import { ViewState } from '../../App';

interface EducationViewProps {
  onViewChange: (view: ViewState) => void;
}

// --- Data Structure ---

type Lesson = {
  id: string;
  title: string;
  duration: string;
  isLocked: boolean;
  content?: React.ReactNode; // Content is only populated for free items
};

type Module = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  progress: number;
  lessons: Lesson[];
};

// --- Educational Content Components ---

const styles = {
  h3: "text-lg font-bold text-white mb-3 mt-6 first:mt-0",
  p: "text-slate-400 leading-relaxed mb-4 text-sm sm:text-base",
  ul: "list-disc list-outside text-slate-400 pl-5 mb-4 space-y-2 text-sm sm:text-base",
  strong: "text-blue-400 font-semibold",
  code: "bg-black/30 border border-white/10 rounded px-1 py-0.5 text-xs font-mono text-emerald-400"
};

const COURSE_MODULES: Module[] = [
  {
    id: 'crypto-basics',
    title: 'Crypto Fundamentals',
    description: 'The absolute essentials of digital currency and the history of money.',
    icon: Zap,
    progress: 35,
    lessons: [
      {
        id: 'cb-1',
        title: 'The Evolution of Money',
        duration: '10 min',
        isLocked: false,
        content: (
          <>
            <h3 className={styles.h3}>From Barter to Bitcoin</h3>
            <p className={styles.p}>Money is not just paper; it is a technology for communicating value. Throughout history, we moved from barter systems to gold, then to fiat currency (government-issued), and now to <span className={styles.strong}>cryptographically secured digital assets</span>.</p>
            <p className={styles.p}>Fiat currency has a flaw: <span className={styles.strong}>Centralization</span>. Governments can print unlimited amounts, leading to inflation. Bitcoin was created as the antidote—a decentralized, finite supply of money that no single entity controls.</p>
          </>
        )
      },
      {
        id: 'cb-2',
        title: 'What is a Blockchain?',
        duration: '15 min',
        isLocked: false,
        content: (
          <>
            <h3 className={styles.h3}>The Distributed Ledger</h3>
            <p className={styles.p}>Imagine a spreadsheet that is duplicated thousands of times across a network of computers. Then imagine that this network is designed to regularly update this spreadsheet and you have a basic understanding of the blockchain.</p>
            <ul className={styles.ul}>
              <li><span className={styles.strong}>Immutable:</span> Once data is written, it cannot be changed.</li>
              <li><span className={styles.strong}>Transparent:</span> Anyone can view the transaction history.</li>
              <li><span className={styles.strong}>Decentralized:</span> No single point of failure.</li>
            </ul>
          </>
        )
      },
      {
        id: 'cb-3',
        title: 'Wallets & Security Basics',
        duration: '20 min',
        isLocked: false,
        content: (
          <>
            <h3 className={styles.h3}>Hot vs. Cold Storage</h3>
            <p className={styles.p}>Your "coins" don't live on your device; they live on the blockchain. Your wallet holds your <span className={styles.strong}>Private Keys</span>—the password to move those coins.</p>
            <ul className={styles.ul}>
              <li><span className={styles.strong}>Hot Wallets (Metamask, Phantom):</span> Connected to the internet. Convenient for trading but higher risk.</li>
              <li><span className={styles.strong}>Cold Wallets (Ledger, Trezor):</span> Offline hardware devices. The gold standard for security.</li>
            </ul>
          </>
        )
      },
      { id: 'cb-4', title: 'Mining vs. Staking (PoW vs PoS)', duration: '25 min', isLocked: true },
      { id: 'cb-5', title: 'Understanding Gas Fees', duration: '15 min', isLocked: true },
      { id: 'cb-6', title: 'Regulatory Landscape 2024', duration: '30 min', isLocked: true },
    ]
  },
  {
    id: 'technical-analysis',
    title: 'Technical Analysis (TA)',
    description: 'Read the charts like a pro. Master patterns, indicators, and market psychology.',
    icon: LineChart,
    progress: 10,
    lessons: [
      {
        id: 'ta-1',
        title: 'Japanese Candlesticks Anatomy',
        duration: '20 min',
        isLocked: false,
        content: (
          <>
            <h3 className={styles.h3}>Reading the Body and Wick</h3>
            <p className={styles.p}>Candlesticks tell a story of the battle between buyers (bulls) and sellers (bears) over a specific timeframe.</p>
            <ul className={styles.ul}>
              <li><span className={styles.strong}>Body:</span> Represents the opening and closing price. Green means price went up; Red means it went down.</li>
              <li><span className={styles.strong}>Wick (Shadow):</span> Shows the highest and lowest price reached during that period. Long upper wicks indicate selling pressure; long lower wicks indicate buying pressure.</li>
            </ul>
          </>
        )
      },
      {
        id: 'ta-2',
        title: 'Support & Resistance Levels',
        duration: '25 min',
        isLocked: false,
        content: (
          <>
            <h3 className={styles.h3}>The Floors and Ceilings</h3>
            <p className={styles.p}>Prices rarely move in a straight line. They bounce between "floors" (Support) where buyers step in, and "ceilings" (Resistance) where sellers take profit.</p>
            <p className={styles.p}>When a Resistance is broken, it often flips to become new Support. This is called an <span className={styles.strong}>S/R Flip</span> and is a key entry signal for traders.</p>
          </>
        )
      },
      { id: 'ta-3', title: 'Moving Averages (SMA & EMA)', duration: '30 min', isLocked: true },
      { id: 'ta-4', title: 'RSI & MACD Divergences', duration: '35 min', isLocked: true },
      { id: 'ta-5', title: 'Chart Patterns: Flags, Pennants, Wedges', duration: '40 min', isLocked: true },
      { id: 'ta-6', title: 'Wyckoff Accumulation Theory', duration: '60 min', isLocked: true },
      { id: 'ta-7', title: 'Elliott Wave Principle', duration: '60 min', isLocked: true },
    ]
  },
  {
    id: 'defi-mastery',
    title: 'DeFi Mastery',
    description: 'Unlock the power of Decentralized Finance. Staking, Farming, and Lending.',
    icon: Coins,
    progress: 0,
    lessons: [
      {
        id: 'df-1',
        title: 'What is DeFi?',
        duration: '15 min',
        isLocked: false,
        content: (
          <>
            <h3 className={styles.h3}>Banking Without Banks</h3>
            <p className={styles.p}>DeFi (Decentralized Finance) recreates traditional financial systems (lending, borrowing, trading) using <span className={styles.strong}>Smart Contracts</span> on a blockchain, primarily Ethereum and Solana.</p>
            <p className={styles.p}>Instead of trusting a bank to hold your money, you trust code. This removes the middleman, theoretically offering higher yields to users.</p>
          </>
        )
      },
      {
        id: 'df-2',
        title: 'DEX vs. CEX',
        duration: '20 min',
        isLocked: false,
        content: (
          <>
            <h3 className={styles.h3}>Centralized vs. Decentralized Exchanges</h3>
            <p className={styles.p}>A <span className={styles.strong}>CEX</span> (like Binance or Coinbase) holds your funds. It is easy to use but you don't own the keys.</p>
            <p className={styles.p}>A <span className={styles.strong}>DEX</span> (like Uniswap or Raydium) allows you to swap tokens directly from your personal wallet. No account creation needed, just a wallet connection.</p>
          </>
        )
      },
      { id: 'df-3', title: 'Liquidity Pools Explained', duration: '30 min', isLocked: true },
      { id: 'df-4', title: 'Yield Farming Strategies', duration: '45 min', isLocked: true },
      { id: 'df-5', title: 'The Danger of Impermanent Loss', duration: '40 min', isLocked: true },
      { id: 'df-6', title: 'Lending & Borrowing (Aave/Compound)', duration: '35 min', isLocked: true },
      { id: 'df-7', title: 'Flash Loans & Arbitrage', duration: '50 min', isLocked: true },
    ]
  },
  {
    id: 'risk-management',
    title: 'Risk & Psychology',
    description: 'The difference between a gambler and a trader is risk management.',
    icon: ShieldCheck,
    progress: 0,
    lessons: [
      {
        id: 'rm-1',
        title: 'The 1% Rule',
        duration: '15 min',
        isLocked: false,
        content: (
          <>
            <h3 className={styles.h3}>Capital Preservation</h3>
            <p className={styles.p}>Never risk more than 1% to 2% of your total account size on a single trade. If you have a $10,000 account, your risk per trade should not exceed $100.</p>
            <p className={styles.p}>This math ensures you can survive a losing streak of 10+ trades without blowing up your account.</p>
          </>
        )
      },
      { id: 'rm-2', title: 'Calculating Position Size', duration: '20 min', isLocked: true },
      { id: 'rm-3', title: 'Stop Loss Placement Strategies', duration: '25 min', isLocked: true },
      { id: 'rm-4', title: 'Trader Psychology: FOMO & Tilt', duration: '30 min', isLocked: true },
      { id: 'rm-5', title: 'Portfolio Rebalancing', duration: '20 min', isLocked: true },
    ]
  },
  {
    id: 'advanced-blockchain',
    title: 'Advanced Blockchain',
    description: 'Deep dive into Layer 2s, ZK-Rollups, and Cross-chain bridges.',
    icon: Layers,
    progress: 0,
    lessons: [
      {
        id: 'ab-1',
        title: 'Layer 1 vs Layer 2',
        duration: '20 min',
        isLocked: false,
        content: (
          <>
            <h3 className={styles.h3}>Scaling the Chain</h3>
            <p className={styles.p}>Layer 1 (L1) is the base network (e.g., Ethereum, Bitcoin). It offers security but can be slow and expensive.</p>
            <p className={styles.p}>Layer 2 (L2) solutions (e.g., Arbitrum, Optimism) sit on top of the L1. They process transactions off-chain for speed and low cost, then bundle them and settle them on the L1 for security.</p>
          </>
        )
      },
      { id: 'ab-2', title: 'Zero Knowledge (ZK) Proofs', duration: '40 min', isLocked: true },
      { id: 'ab-3', title: 'The Trilemma: Security, Speed, Decentralization', duration: '30 min', isLocked: true },
      { id: 'ab-4', title: 'Cross-Chain Bridges & Risks', duration: '35 min', isLocked: true },
    ]
  }
];

const EducationView: React.FC<EducationViewProps> = ({ onViewChange }) => {
  const [activeModuleId, setActiveModuleId] = useState<string>(COURSE_MODULES[0].id);
  const [expandedLessonId, setExpandedLessonId] = useState<string | null>(null);

  const activeModule = COURSE_MODULES.find(m => m.id === activeModuleId) || COURSE_MODULES[0];

  const toggleLesson = (lessonId: string, isLocked: boolean) => {
    if (isLocked) return;
    setExpandedLessonId(prev => prev === lessonId ? null : lessonId);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#030508] text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
            <Award size={14} className="text-blue-400" />
            <span className="text-blue-400 font-bold uppercase tracking-widest text-[10px]">Nexa Academy Pro</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-chrome mb-6">Master the Markets.</h1>
          <p className="text-xl text-slate-400 font-light max-w-2xl">
            A complete, institutional-grade curriculum designed to take you from novice to DeFi expert.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/3 xl:w-1/4 shrink-0">
            <div className="sticky top-28 bg-[#0a0c10]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-4 overflow-hidden">
               <div className="mb-6 px-2">
                 <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Curriculum Modules</h3>
               </div>
               
               <div className="space-y-2">
                 {COURSE_MODULES.map((module) => {
                   const isActive = activeModuleId === module.id;
                   return (
                     <button
                       key={module.id}
                       onClick={() => {
                         setActiveModuleId(module.id);
                         setExpandedLessonId(null);
                         window.scrollTo({ top: 0, behavior: 'smooth' });
                       }}
                       className={`w-full group relative flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border ${
                         isActive 
                           ? 'bg-blue-600/10 border-blue-500/40 shadow-[0_0_20px_rgba(37,99,235,0.15)]' 
                           : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/5'
                       }`}
                     >
                       {/* Active Indicator Line */}
                       {isActive && (
                         <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-blue-500 rounded-r-full shadow-[0_0_10px_#3b82f6]"></div>
                       )}

                       <div className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-blue-500 text-white' : 'bg-white/5 text-slate-400 group-hover:text-white'}`}>
                         <module.icon size={20} />
                       </div>
                       
                       <div className="flex-1">
                         <h4 className={`text-sm font-bold font-display ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                           {module.title}
                         </h4>
                         <div className="mt-1.5 w-full bg-white/10 h-1 rounded-full overflow-hidden">
                           <div 
                             className="h-full bg-blue-500 transition-all duration-500" 
                             style={{ width: `${module.progress}%` }}
                           ></div>
                         </div>
                       </div>
                     </button>
                   );
                 })}
               </div>

               <div className="mt-8 p-4 bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/20 rounded-xl text-center">
                 <p className="text-xs text-blue-200 mb-3 font-medium">Unlock full potential?</p>
                 <button 
                    onClick={() => onViewChange('auth')}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-blue-900/20 transition-all"
                 >
                   Get Premium Access
                 </button>
               </div>
            </div>
          </aside>

          {/* Main Lesson Content */}
          <main className="flex-1 min-w-0">
            {/* Header for Active Module */}
            <div className="mb-8 p-8 rounded-3xl bg-[#0e121a] border border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                 <activeModule.icon size={200} />
               </div>
               
               <div className="relative z-10">
                 <div className="flex items-center gap-3 text-blue-500 mb-2">
                   <activeModule.icon size={20} />
                   <span className="text-xs font-bold uppercase tracking-widest">Current Module</span>
                 </div>
                 <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{activeModule.title}</h2>
                 <p className="text-lg text-slate-400 max-w-2xl">{activeModule.description}</p>
                 
                 <div className="flex items-center gap-6 mt-6 text-sm font-mono text-slate-500">
                   <span className="flex items-center gap-2">
                     <Layers size={14} /> {activeModule.lessons.length} Lessons
                   </span>
                   <span className="flex items-center gap-2">
                     <CheckCircle2 size={14} className="text-green-500" /> {Math.floor((activeModule.progress / 100) * activeModule.lessons.length)} Completed
                   </span>
                 </div>
               </div>
            </div>

            {/* Lesson List */}
            <div className="space-y-4">
              {activeModule.lessons.map((lesson, index) => {
                const isOpen = expandedLessonId === lesson.id;
                
                return (
                  <div 
                    key={lesson.id}
                    className={`group relative overflow-hidden transition-all duration-500 border rounded-2xl ${
                      lesson.isLocked 
                        ? 'bg-[#0a0c10]/40 border-white/5 opacity-80 hover:opacity-100 hover:border-white/10' 
                        : isOpen 
                          ? 'bg-[#0e121a] border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]'
                          : 'bg-[#0e121a] border-white/5 hover:border-blue-500/20 hover:bg-[#131722]'
                    }`}
                  >
                    {/* Header Row */}
                    <button
                      onClick={() => toggleLesson(lesson.id, lesson.isLocked)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <div className="flex items-center gap-4 sm:gap-6">
                        {/* Status Icon */}
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                          lesson.isLocked 
                            ? 'bg-black/40 border-white/5 text-slate-600' 
                            : isOpen
                              ? 'bg-blue-600 text-white border-blue-400 shadow-[0_0_15px_#3b82f6]'
                              : 'bg-white/5 text-slate-400 border-white/10 group-hover:bg-blue-500/10 group-hover:text-blue-400'
                        }`}>
                          {lesson.isLocked ? <Lock size={18} /> : isOpen ? <ChevronUp size={20} /> : <PlayCircle size={20} />}
                        </div>

                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-xs font-mono text-slate-500">LESSON 0{index + 1}</span>
                            {lesson.isLocked && (
                               <span className="text-[10px] font-bold uppercase tracking-wider bg-white/5 text-slate-500 px-2 py-0.5 rounded border border-white/5 flex items-center gap-1">
                                 <Lock size={8} /> Pro
                               </span>
                            )}
                          </div>
                          <h3 className={`text-base sm:text-lg font-bold font-display transition-colors ${
                             lesson.isLocked 
                              ? 'text-slate-500' 
                              : isOpen ? 'text-blue-400' : 'text-white group-hover:text-blue-100'
                          }`}>
                            {lesson.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                         <span className="hidden sm:block text-xs font-mono text-slate-500">{lesson.duration}</span>
                         {!lesson.isLocked && (
                           <ChevronDown size={16} className={`text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                         )}
                      </div>
                    </button>

                    {/* Content Area */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      {!lesson.isLocked && (
                        <div className="px-6 pb-8 sm:pl-[5.5rem] sm:pr-12 pt-2 border-t border-white/5">
                           <div className="prose prose-invert max-w-none prose-p:text-slate-400 prose-headings:font-display prose-a:text-blue-400">
                             {lesson.content}
                           </div>
                           <div className="mt-8 flex justify-end">
                             <button 
                               onClick={() => setExpandedLessonId(null)}
                               className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-white transition-colors"
                             >
                               Mark as Complete
                             </button>
                           </div>
                        </div>
                      )}
                    </div>

                    {/* Locked Overlay Interactive State */}
                    {lesson.isLocked && (
                      <div 
                         onClick={() => onViewChange('auth')}
                         className="absolute inset-0 z-20 cursor-pointer" 
                         title="Upgrade to unlock"
                      >
                         {/* Hover Effect for Locked Items */}
                         <div className="absolute inset-0 bg-blue-900/0 hover:bg-blue-900/5 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                            <div className="bg-black/80 backdrop-blur-md border border-blue-500/30 px-4 py-2 rounded-full text-xs font-bold text-blue-400 uppercase tracking-widest shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                               Click to Unlock
                            </div>
                         </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default EducationView;
