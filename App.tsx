import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}