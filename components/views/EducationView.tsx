
import React, { useState } from 'react';
import { BookOpen, Award, Zap, BrainCircuit, LineChart, BarChart, ShieldCheck } from 'lucide-react';
import { ViewState } from '../../App';

interface EducationViewProps {
  onViewChange: (view: ViewState) => void;
}

const modules = [
  { id: 'intro', title: 'Introduction to Crypto', icon: Zap },
  { id: 'blockchain', title: 'Blockchain Fundamentals', icon: BrainCircuit },
  { id: 'market', title: 'Understanding the Market', icon: BarChart },
  { id: 'charting', title: 'Basics of Charting', icon: LineChart },
  { id: 'risk', title: 'Risk Management', icon: ShieldCheck },
];

const EducationContent = ({ module }: { module: string }) => {
  const styles = {
    h2: "text-3xl font-bold text-chrome mb-6 border-l-4 border-blue-500 pl-4",
    h3: "text-2xl font-bold text-white mb-4 mt-8",
    p: "text-secondary leading-relaxed mb-4",
    ul: "list-disc list-inside text-secondary pl-4 mb-4 space-y-2",
    strong: "text-white font-semibold",
  };

  switch (module) {
    case 'intro':
      return (
        <div>
          <h2 className={styles.h2}>Module 1: Introduction to Cryptocurrency</h2>
          <p className={styles.p}>Welcome to the exciting world of digital assets! This module will give you a foundational understanding of what cryptocurrency is, why it was created, and its significance in the future of finance.</p>
          
          <h3 className={styles.h3}>What is Cryptocurrency?</h3>
          <p className={styles.p}>At its core, a cryptocurrency is a digital or virtual currency secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers. A defining feature of cryptocurrencies is that they are generally not issued by any central authority, rendering them theoretically immune to government interference or manipulation.</p>

          <h3 className={styles.h3}>The Birth of Bitcoin</h3>
          <p className={styles.p}>The first blockchain-based cryptocurrency was Bitcoin, which still remains the most popular and most valuable. It was created in 2009 by an anonymous individual or group known as Satoshi Nakamoto. The goal was to create a "peer-to-peer electronic cash system" that could operate without a central bank or single administrator. This idea was revolutionary and sparked the creation of thousands of other cryptocurrencies, often referred to as "altcoins."</p>
        </div>
      );
    case 'blockchain':
      return (
        <div>
          <h2 className={styles.h2}>Module 2: Blockchain Fundamentals</h2>
          <p className={styles.p}>Blockchain is the technology that underpins almost all cryptocurrencies. Understanding how it works is crucial to understanding the value and security of digital assets.</p>

          <h3 className={styles.h3}>The "Blocks" and the "Chain"</h3>
          <p className={styles.p}>A blockchain is a growing list of records, called <strong className={styles.strong}>blocks</strong>, that are linked together using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. This design makes it incredibly resistant to modification of its data. Because each block is linked to the one before it, any change in one block would require the alteration of all subsequent blocks, which is computationally impractical for a large network.</p>
          
          <h3 className={styles.h3}>Decentralization and Transparency</h3>
          <p className={styles.p}>Instead of a central server storing the data (like a bank's ledger), the blockchain's ledger is distributed across a network of computers. This is <strong className={styles.strong}>decentralization</strong>. It means no single person or entity has control. Anyone on the network can view the transaction history, making it transparent, but the identities of the participants are pseudonymous (represented by their wallet addresses).</p>
        </div>
      );
    case 'market':
        return (
          <div>
            <h2 className={styles.h2}>Module 3: Understanding the Market</h2>
            <p className={styles.p}>The crypto market is dynamic and unique. This module covers the key concepts you need to navigate it.</p>
            
            <h3 className={styles.h3}>Key Terms</h3>
            <ul className={styles.ul}>
                <li><strong className={styles.strong}>Market Capitalization (Market Cap):</strong> The total value of a cryptocurrency. It's calculated by multiplying the current market price of a single coin by the total number of coins in circulation.</li>
                <li><strong className={styles.strong}>Liquidity:</strong> The ease with which an asset can be bought or sold without causing a significant change in its price. High liquidity is generally a sign of a healthy market.</li>
                <li><strong className={styles.strong}>Volatility:</strong> The measure of how much the price of an asset fluctuates. The crypto market is known for its high volatility, which presents both opportunities and risks.</li>
            </ul>
          </div>
        );
    case 'charting':
      return (
        <div>
          <h2 className={styles.h2}>Module 4: Basics of Charting</h2>
          <p className={styles.p}>Technical analysis involves reading price charts to forecast future price movements. Candlestick charts are the most common tool traders use.</p>

          <h3 className={styles.h3}>Reading a Candlestick</h3>
          <p className={styles.p}>Each candlestick represents a specific time period (e.g., one hour, one day). It shows four key pieces of information:</p>
          <ul className={styles.ul}>
            <li><strong className={styles.strong}>Open:</strong> The price at the start of the period.</li>
            <li><strong className={styles.strong}>High:</strong> The highest price reached during the period.</li>
            <li><strong className={styles.strong}>Low:</strong> The lowest price reached during the period.</li>
            <li><strong className={styles.strong}>Close:</strong> The price at the end of the period.</li>
          </ul>
          <p className={styles.p}>The "body" of the candle is the wide part, showing the range between the open and close. If the close is above the open, the candle is typically green (bullish). If the close is below the open, it's red (bearish). The thin lines (or "wicks") show the high and low.</p>
        </div>
      );
    case 'risk':
      return (
        <div>
          <h2 className={styles.h2}>Module 5: Risk Management</h2>
          <p className={styles.p}>Successful trading is not just about making profits; it's about protecting your capital. Proper risk management is arguably the most important skill for any trader.</p>

          <h3 className={styles.h3}>The Golden Rule: Never Risk More Than You Can Afford to Lose</h3>
          <p className={styles.p}>This is the most fundamental principle. The crypto market is volatile, and prices can drop dramatically. Only invest an amount of money that you would be okay with losing entirely.</p>

          <h3 className={styles.h3}>Key Techniques</h3>
          <ul className={styles.ul}>
            <li><strong className={styles.strong}>Position Sizing:</strong> Don't put all your capital into a single trade. A common rule of thumb is to risk only 1-2% of your total trading capital on any single trade.</li>
            <li><strong className={styles.strong}>Stop-Loss Orders:</strong> A stop-loss is an order you place with an exchange to automatically sell your asset if it reaches a certain price. This is your primary tool for cutting losses before they become catastrophic.</li>
            <li><strong className={styles.strong}>Diversification:</strong> Don't invest in only one cryptocurrency. Spreading your capital across several different projects can mitigate the risk if one of them fails.</li>
          </ul>
        </div>
      );
    default:
      return <div>Select a module to begin.</div>;
  }
};

const EducationView: React.FC<EducationViewProps> = ({ onViewChange }) => {
  const [activeModule, setActiveModule] = useState('intro');

  return (
    <div className="pt-24 min-h-screen pb-20 bg-[#030508]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded border border-blue-500/30 bg-blue-500/10">
            <Award size={14} className="text-blue-400" />
            <span className="text-blue-400 font-bold uppercase tracking-widest text-[10px]">NEXA Education Curriculum</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-chrome mb-6">Beginner to Intermediate</h1>
          <p className="text-xl text-secondary font-light">
            Your comprehensive guide to understanding and trading the crypto markets.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4 xl:w-1/5">
            <div className="sticky top-24">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Modules</h3>
              <div className="space-y-2">
                {modules.map(module => (
                  <button
                    key={module.id}
                    onClick={() => setActiveModule(module.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all text-sm font-bold ${
                      activeModule === module.id
                        ? 'bg-blue-600/20 text-blue-300'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <module.icon size={16} />
                    {module.title}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4 xl:w-4/5 bg-[#0a0c10] border border-white/10 rounded-xl p-8 lg:p-12">
            <EducationContent module={activeModule} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default EducationView;
