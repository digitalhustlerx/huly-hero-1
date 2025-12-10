

import React, { useState } from 'react';
import { ArrowDown, ArrowUp, Clock, Settings, Maximize2, ChevronDown } from 'lucide-react';

// Mock Data
const orderBookAsks = [
  { price: 64245.50, size: 0.542, total: 64245.50 },
  { price: 64245.00, size: 1.200, total: 128490.00 },
  { price: 64244.50, size: 0.150, total: 138126.67 },
  { price: 64244.00, size: 0.880, total: 194661.39 },
  { price: 64243.50, size: 2.100, total: 329572.89 },
];

const orderBookBids = [
  { price: 64242.00, size: 0.330, total: 21199.86 },
  { price: 64241.50, size: 1.500, total: 117562.11 },
  { price: 64241.00, size: 0.420, total: 144543.33 },
  { price: 64240.50, size: 3.100, total: 343688.88 },
  { price: 64240.00, size: 0.800, total: 395080.88 },
];

const TradeView = () => {
  const [orderType, setOrderType] = useState('limit');
  const [side, setSide] = useState('buy');

  return (
    <div className="pt-[72px] min-h-screen bg-[#030508] text-white font-sans flex flex-col h-screen overflow-hidden">
      {/* Top Bar - Ticker Info */}
      <div className="h-14 border-b border-white/10 bg-[#0a0c10] flex items-center px-4 justify-between shrink-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-1 rounded transition-colors">
            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold text-xs">₿</div>
            <div>
              <div className="flex items-center gap-1 font-bold font-display leading-none">
                BTC/USD <ChevronDown size={14} className="text-gray-500" />
              </div>
              <span className="text-[10px] text-gray-500 font-mono">Bitcoin Perpetual</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div>
              <div className="text-[10px] text-gray-500 uppercase font-mono">Mark Price</div>
              <div className="text-sm font-mono font-medium text-green-400">64,242.50</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase font-mono">24h Change</div>
              <div className="text-sm font-mono font-medium text-green-400">+2.45%</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase font-mono">24h Volume</div>
              <div className="text-sm font-mono font-medium text-white">42,109 BTC</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-400">
           <button className="p-2 hover:bg-white/5 rounded transition-colors"><Clock size={16}/></button>
           <button className="p-2 hover:bg-white/5 rounded transition-colors"><Settings size={16}/></button>
           <button className="p-2 hover:bg-white/5 rounded transition-colors"><Maximize2 size={16}/></button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Column: Chart & Positions */}
        <div className="flex-1 flex flex-col border-r border-white/10 min-w-0">
           {/* Chart Area */}
           <div className="flex-1 bg-[#030508] relative min-h-[400px]">
              {/* Fake Chart Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
              
              {/* Simulated Price Line */}
              <div className="absolute inset-x-0 bottom-20 top-20 overflow-hidden opacity-50">
                 <svg className="w-full h-full" preserveAspectRatio="none">
                    <polyline 
                      points="0,300 100,280 200,320 300,250 400,270 500,200 600,220 700,150 800,180 900,100 1000,120 1200,50" 
                      fill="none" 
                      stroke="#22c55e" 
                      strokeWidth="2" 
                    />
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2"/>
                       <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
                    </linearGradient>
                    <polygon 
                      points="0,300 100,280 200,320 300,250 400,270 500,200 600,220 700,150 800,180 900,100 1000,120 1200,50 1200,500 0,500" 
                      fill="url(#chartFill)" 
                    />
                 </svg>
              </div>

              {/* Chart Controls Overlay */}
              <div className="absolute top-4 left-4 flex gap-1">
                 {['15m', '1H', '4H', '1D', '1W'].map(tf => (
                   <button key={tf} className="px-2 py-1 text-xs font-mono text-gray-400 hover:text-white hover:bg-white/10 rounded">{tf}</button>
                 ))}
              </div>
           </div>

           {/* Bottom Panel: Positions/History */}
           <div className="h-64 border-t border-white/10 bg-[#0a0c10] flex flex-col">
              <div className="flex border-b border-white/5">
                 {['Positions', 'Open Orders', 'Order History', 'Trade History'].map((tab, i) => (
                   <button key={tab} className={`px-4 py-2 text-xs font-bold uppercase tracking-wider ${i === 0 ? 'text-blue-400 border-b-2 border-blue-500' : 'text-gray-500 hover:text-white'}`}>
                     {tab}
                   </button>
                 ))}
              </div>
              <div className="flex-1 flex items-center justify-center text-gray-500 text-sm font-mono">
                 <div className="text-center">
                    <p className="mb-2">No active positions</p>
                    <button className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded text-xs">View History</button>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Column: Order Book & Execution */}
        <div className="w-full lg:w-[320px] bg-[#0e121a] flex flex-col shrink-0">
           
           {/* Order Book */}
           <div className="flex-1 flex flex-col min-h-0 border-b border-white/10">
              <div className="px-3 py-2 border-b border-white/5 text-xs font-bold text-gray-400 uppercase tracking-wider">Order Book</div>
              <div className="flex text-[10px] text-gray-500 px-3 py-1 font-mono uppercase">
                 <div className="flex-1">Price (USD)</div>
                 <div className="flex-1 text-right">Size (BTC)</div>
              </div>
              
              {/* Asks (Sells) */}
              <div className="flex-1 overflow-hidden flex flex-col justify-end pb-1">
                 {orderBookAsks.slice().reverse().map((ask, i) => (
                   <div key={i} className="flex px-3 py-0.5 hover:bg-white/5 cursor-pointer relative group">
                      <div className="absolute inset-y-0 right-0 bg-red-500/10" style={{width: `${(ask.size / 2.1) * 100}%`}}></div>
                      <div className="flex-1 font-mono text-xs text-red-400 relative z-10">{ask.price.toFixed(1)}</div>
                      <div className="flex-1 font-mono text-xs text-gray-300 text-right relative z-10">{ask.size.toFixed(3)}</div>
                   </div>
                 ))}
              </div>

              {/* Spread */}
              <div className="py-1 my-1 border-y border-white/5 flex items-center justify-center gap-2 bg-[#1a202c]">
                 <span className="font-mono text-lg font-bold text-green-400">64,242.50</span>
                 <ArrowUp size={12} className="text-green-400" />
              </div>

              {/* Bids (Buys) */}
              <div className="flex-1 overflow-hidden pt-1">
                 {orderBookBids.map((bid, i) => (
                   <div key={i} className="flex px-3 py-0.5 hover:bg-white/5 cursor-pointer relative">
                      <div className="absolute inset-y-0 right-0 bg-green-500/10" style={{width: `${(bid.size / 3.1) * 100}%`}}></div>
                      <div className="flex-1 font-mono text-xs text-green-400 relative z-10">{bid.price.toFixed(1)}</div>
                      <div className="flex-1 font-mono text-xs text-gray-300 text-right relative z-10">{bid.size.toFixed(3)}</div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Trade Execution Panel */}
           <div className="p-4 bg-[#0a0c10]">
              <div className="flex bg-[#030508] p-1 rounded mb-4">
                 <button 
                   onClick={() => setSide('buy')}
                   className={`flex-1 py-1.5 text-xs font-bold uppercase rounded transition-all ${side === 'buy' ? 'bg-green-600 text-white shadow' : 'text-gray-500 hover:text-white'}`}
                 >
                   Buy
                 </button>
                 <button 
                   onClick={() => setSide('sell')}
                   className={`flex-1 py-1.5 text-xs font-bold uppercase rounded transition-all ${side === 'sell' ? 'bg-red-600 text-white shadow' : 'text-gray-500 hover:text-white'}`}
                 >
                   Sell
                 </button>
              </div>

              <div className="flex gap-4 mb-4 text-xs font-bold text-gray-400">
                 <button onClick={() => setOrderType('limit')} className={`${orderType === 'limit' ? 'text-blue-400' : ''}`}>Limit</button>
                 <button onClick={() => setOrderType('market')} className={`${orderType === 'market' ? 'text-blue-400' : ''}`}>Market</button>
                 <button onClick={() => setOrderType('stop')} className={`${orderType === 'stop' ? 'text-blue-400' : ''}`}>Stop</button>
              </div>

              <div className="space-y-3 mb-6">
                 <div>
                    <div className="flex justify-between text-[10px] text-gray-500 mb-1 uppercase">
                       <span>Price (USD)</span>
                    </div>
                    <div className="bg-[#030508] border border-white/10 rounded px-3 py-2 flex items-center">
                       <input type="text" className="bg-transparent w-full outline-none font-mono text-sm text-white" defaultValue="64240.50" />
                    </div>
                 </div>
                 <div>
                    <div className="flex justify-between text-[10px] text-gray-500 mb-1 uppercase">
                       <span>Amount (BTC)</span>
                    </div>
                    <div className="bg-[#030508] border border-white/10 rounded px-3 py-2 flex items-center">
                       <input type="text" className="bg-transparent w-full outline-none font-mono text-sm text-white" placeholder="0.00" />
                       <span className="text-xs text-gray-500">BTC</span>
                    </div>
                 </div>
                 
                 {/* Slider */}
                 <div className="relative h-1 bg-white/10 rounded my-4">
                    <div className="absolute left-0 top-0 bottom-0 bg-blue-500 w-[25%] rounded"></div>
                    <div className="absolute left-[25%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow cursor-pointer hover:scale-125 transition-transform"></div>
                 </div>
              </div>

              <div className="flex justify-between text-xs text-gray-400 mb-4 font-mono">
                 <span>Avail</span>
                 <span className="text-white">0.0000 BTC</span>
              </div>

              <button className={`w-full py-3 rounded text-sm font-bold uppercase font-display tracking-wider transition-all shadow-lg ${side === 'buy' ? 'bg-green-600 hover:bg-green-500 shadow-green-900/20' : 'bg-red-600 hover:bg-red-500 shadow-red-900/20'}`}>
                 {side} BTC
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TradeView;