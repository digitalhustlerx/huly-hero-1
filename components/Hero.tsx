import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="nex-hero">
      <div className="nex-hero__bg">
        <video 
          className="nex-hero__video" 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://huly.io/_next/static/media/hero-poster.png" // Added poster for better perceived loading
          preload="auto"
        >
          <source src="https://huly.io/videos/pages/home/hero/hero.mp4?updated=20240607144404" type="video/mp4" />
          <source src="https://huly.io/videos/pages/home/hero/hero.webm?updated=20240607144404" type="video/webm" />
        </video>
        <div className="nex-hero__overlay"></div>
      </div>

      <div className="nex-hero__container">
        <div className="nex-hero__content">
          <h1 className="nex-hero__title">
            Precision Trading<br />at Light Speed
          </h1>
          <p className="nex-hero__subtext">
            Master the markets with NEXAFINANCE. High-frequency signals, pro-grade analytics and crypto education in one futuristic interface.
          </p>
          <a href="#" className="nex-hero__cta" aria-label="Open free account">
            OPEN FREE ACCOUNT
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div className="nex-hero__spacer"></div>
      </div>
    </section>
  );
};

export default Hero;