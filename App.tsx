
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CopyTrading from './components/CopyTrading';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CopyTrading />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
