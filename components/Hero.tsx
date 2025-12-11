
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

// Map CoinGecko API IDs to the desired display symbol
const COIN_MAP: { [key: string]: string } = {
  'bitcoin': 'BTC/USD',
  'ethereum': 'ETH/USD',
  'solana': 'SOL/USD',
  'ripple': 'XRP/USD',
  'binancecoin': 'BNB/USD',
  'cardano': 'ADA/USD',
  'dogecoin': 'DOGE/USD',
  'avalanche-2': 'AVAX/USD',
  'polkadot': 'DOT/USD',
  'chainlink': 'LINK/USD',
  'matic-network': 'MATIC/USD',
  'uniswap': 'UNI/USD',
};

const Hero: React.FC<HeroProps> = ({ onViewChange }) => {
  const [tickerItems, setTickerItems] = useState<TickerItem[]>([]);

  // Fetch live market data from CoinGecko API
  const fetchMarketData = async () => {
    const coinIds = Object.keys(COIN_MAP).join(',');
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds}&vs_currencies=usd&include_24hr_change=true`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`CoinGecko API request failed with status ${response.status}`);
      }
      const data = await response.json();
      
      const newTickerItems: TickerItem[] = Object.keys(data).map(id => ({
        symbol: COIN_MAP[id] || 'N/A',
        price: data[id].usd || 0,
        change: data[id].usd_24h_change || 0,
      }));

      // Maintain a consistent order based on the COIN_MAP
      const orderedItems = Object.keys(COIN_MAP)
        .map(id => newTickerItems.find(item => item.symbol === COIN_MAP[id]))
        .filter((item): item is TickerItem => !!item);

      setTickerItems(orderedItems);
    } catch (error) {
      console.error("Failed to fetch market data:", error);
      // In case of an API error, the ticker will remain empty or with its last known state.
    }
  };

  useEffect(() => {
    fetchMarketData(); // Fetch immediately on mount
    const interval = setInterval(fetchMarketData, 30000); // Refetch every 30 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
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
          preload="metadata"
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
      {tickerItems.length > 0 && (
        <div className="nex-hero__ticker-container">
          <div className="nex-hero__ticker-mask"></div>
          <div className="nex-hero__ticker-track">
              {/* Tripled list for seamless looping on wide screens */}
              {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
                <div key={`${item.symbol}-${i}`} className="nex-hero__ticker-item">
                  <span className="nex-hero__ticker-symbol">{item.symbol}</span>
                  <span className="nex-hero__ticker-price">
                    ${item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: item.price > 1 ? 2 : 4 })}
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
      )}
    </section>
  );
};

export default Hero;
