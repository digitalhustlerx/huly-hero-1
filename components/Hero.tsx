
import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="nex-hero">
      {/* Background with Video */}
      <div className="nex-hero__bg">
        <video 
          className="nex-hero__video"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://huly.io/_next/static/media/hero-illustration.7100a376.jpg"
        >
          <source src="https://huly.io/videos/pages/home/hero/hero.mp4?updated=20240607144404" type="video/mp4" />
          <source src="https://huly.io/videos/pages/home/hero/hero.webm?updated=20240607144404" type="video/webm" />
        </video>
        <div className="nex-hero__overlay"></div>
      </div>

      {/* Content Container */}
      <div className="nex-hero__container">
        <div className="nex-hero__content">
          <h1 className="nex-hero__title">
            Precision Trading <br /> at Light Speed
          </h1>
          
          <p className="nex-hero__subtext">
            Master the markets with NEXAFINANCE. High-frequency signals, pro-grade analytics and crypto education in one futuristic interface.
          </p>

          <a href="#" className="nex-hero__cta">
            <span>Open Free Account</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
