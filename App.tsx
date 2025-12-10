
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CopyTrading from './components/CopyTrading';
import Education from './components/Education';
import Footer from './components/Footer';

// Import New Full Views
import MarketsView from './components/views/MarketsView';
import TradeView from './components/views/TradeView';
import EducationView from './components/views/EducationView';
import CopyTradingView from './components/views/CopyTradingView';

export type ViewState = 'home' | 'markets' | 'trade' | 'education' | 'copy-trading';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleViewChange = (view: ViewState) => {
    if (view === currentView) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(view);
      setIsTransitioning(false);
    }, 300);
  };

  const renderView = () => {
    switch (currentView) {
      case 'markets':
        return <MarketsView />;
      case 'trade':
        return <TradeView />;
      case 'education':
        return <EducationView />;
      case 'copy-trading':
        return <CopyTradingView />;
      case 'home':
      default:
        return (
          <>
            <Hero onViewChange={handleViewChange} />
            <Features />
            <CopyTrading />
            <Education />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-blue-500/30 flex flex-col font-sans">
      <Navbar currentView={currentView} onViewChange={handleViewChange} />
      
      <main className={`flex-grow transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {renderView()}
      </main>
      
      {/* Only show footer on non-trade views or simplified footer on trade view */}
      {currentView !== 'trade' && <Footer />}
    </div>
  );
}