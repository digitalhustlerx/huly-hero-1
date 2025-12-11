
import React, { useEffect, useState } from 'react';
import './hero.css';
import { ViewState } from '../App';
import { ArrowRight, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface HeroProps {
  onViewChange?: (view: ViewState) => void;
}

interface TickerItem {
  symbol: string;
  price: number;
  change: number;
}

const INITIAL_TICKER_DATA: TickerItem[] = [
  { symbol: 'BTC/USD', price: 64230.15, change: 2.4 },
  { symbol: 'ETH/USD', price: 3450.22, change: 1.8 },
  { symbol: 'SOL/USD', price: 145.80, change: 5.2 },
  { symbol: 'XRP/USD', price: 0.62, change: 0.5 },
  { symbol: 'BNB/USD', price: 590.10, change: -1.1 },
  { symbol: 'ADA/USD', price: 0.45, change: -0.8 },
  { symbol: 'DOGE/USD', price: 0.16, change: 8.4 },
  { symbol: 'AVAX/USD', price: 35.60, change: 2.1 },
  { symbol: 'DOT/USD', price: 7.20, change: -0.5 },
  { symbol: 'LINK/USD', price: 14.50, change: 1.2 },
  { symbol: 'MATIC/USD', price: 0.72, change: -1.5 },
  { symbol: 'UNI/USD', price: 10.40, change: 3.1 },
];

const Hero: React.FC<HeroProps> = ({ onViewChange }) => {
  const [tickerItems, setTickerItems] = useState<TickerItem[]>(INITIAL_TICKER_DATA);

  // Simulate live market data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerItems(prevItems => 
        prevItems.map(item => {
          // Randomly update 40% of the items each tick
          if (Math.random() > 0.6) {
            const volatility = 0.005; // 0.5% max volatility
            const randomChange = 1 + (Math.random() * volatility * 2 - volatility);
            const newPrice = item.price * randomChange;
            
            // Adjust change percentage slightly
            const newChangePercent = item.change + (Math.random() * 0.4 - 0.2);
            
            return {
              ...item,
              price: newPrice,
              change: newChangePercent
            };
          }
          return item;
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="nex-hero">
      <div className="nex-hero__bg">
        <video 
          className="nex-hero__video" 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://huly.io/_next/static/media/hero-poster.png"
          preload="auto"
        >
          <source src="https://huly.io/videos/pages/home/hero/hero.mp4?updated=20240607144404" type="video/mp4" />
          <source src="https://huly.io/videos/pages/home/hero/hero.webm?updated=20240607144404" type="video/webm" />
        </video>
        <div className="nex-hero__overlay"></div>
        
        {/* Futuristic Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      </div>

      <div className="nex-hero__container">
        <div className="nex-hero__content">
          <h1 className="nex-hero__title">
            Your Edge<br />in Digital Finance
          </h1>
          <p className="nex-hero__subtext">
            Empowering everyday traders with advanced tools and lightning-fast execution.
          </p>
          
          <div className="flex items-center gap-4 w-full opacity-0 animate-[fadeInUp_0.8s_cubic-bezier(0.215,0.61,0.355,1)_0.9s_forwards] translate-y-[20px]">
            <button 
              onClick={() => onViewChange && onViewChange('auth')}
              className="nex-hero__huly-btn group" 
              aria-label="Get Started"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
        <div className="nex-hero__spacer"></div>
      </div>
      
      {/* High-Tech Ticker Tape */}
      <div className="nex-hero__ticker-container">
         <div className="nex-hero__ticker-mask"></div>
         <div className="nex-hero__ticker-track">
             {/* Tripled list for seamless looping on wide screens */}
             {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
               <div key={`${item.symbol}-${i}`} className="nex-hero__ticker-item">
                 <span className="nex-hero__ticker-symbol">{item.symbol}</span>
                 <span className="nex-hero__ticker-price">
                   ${item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                 </span>
                 <span className={`nex-hero__ticker-change ${item.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                   {item.change >= 0 ? '+' : ''}{item.change.toFixed(2)}%
                   {item.change >= 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                 </span>
                 <div className="nex-hero__ticker-divider"></div>
               </div>
             ))}
         </div>
      </div>
    </section>
  );
};

export default Hero;
