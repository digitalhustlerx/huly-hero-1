
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  const [activeView, setActiveView] = useState('trade');

  return (
    <div className="min-h-screen bg-background text-white selection:bg-blue-500/30">
      <Navbar onNavigate={setActiveView} activeView={activeView} />
      <main>
        <Hero />
      </main>
    </div>
  );
}
