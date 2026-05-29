import React from 'react';
import { FaArrowRight, FaBookOpen } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Hero = () => {
  const { book } = authorData;

  return (
    <section id="home" className="relative min-h-screen flex overflow-hidden" style={{background: '#1A0F05'}}>

      {/* ── Ambient light orbs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]" style={{background: 'radial-gradient(circle, #C8A96E 0%, transparent 70%)', transform: 'translate(-30%, -30%)'}}></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]" style={{background: 'radial-gradient(circle, #7A5230 0%, transparent 70%)', transform: 'translate(20%, 20%)'}}></div>
        <div className="absolute top-1/2 left-1/2 w-px h-3/4 opacity-10" style={{background: 'linear-gradient(to bottom, transparent, #C8A96E, transparent)', transform: 'translate(-50%, -50%)'}}></div>
      </div>

      {/* ── Thin gold top border ── */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{background: 'linear-gradient(90deg, transparent, #C8A96E55, transparent)'}}></div>

      {/* Container wrapping both columns so content aligns with nav */}
      <div className="container-custom mx-auto flex items-start w-full">

      {/* ── LEFT PANEL — text ── */}
      <div className="relative z-10 flex flex-col justify-center pt-32 pb-20 w-full lg:w-1/2">

        {/* Series badge */}
        <div className="flex items-center gap-3 mb-8 animate-rise-in">
          <div className="w-8 h-px" style={{background: '#C8A96E'}}></div>
          <span className="text-[10px] tracking-[0.35em] uppercase" style={{color: '#C8A96E88', fontFamily: "'Lato', sans-serif"}}>
            First Book of the West Texas Series
          </span>
        </div>

        {/* Title */}
        <div className="mb-8 animate-rise-in" style={{animationDelay: '100ms'}}>
          <p className="text-[11px] tracking-[0.4em] uppercase mb-2" style={{color: '#C8A96E66', fontFamily: "'Lato', sans-serif"}}>THE</p>
          <h1
            className="font-display font-bold leading-none tracking-tight"
            style={{
              fontSize: 'clamp(6rem, 7vw, 5.5rem)',
              color: '#FAF6EF',
              textShadow: '0 0 60px rgba(200,169,110,0.12)', 
            }}
          >
            WRATH
          </h1>
          <div className="mt-3 flex items-center gap-4"> 
            <p className="font-display italic text-sm" style={{color: '#C8A96E99'}}>by Joe Medrano</p>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-relaxed max-w-md mb-10 animate-rise-in"
          style={{color: 'rgba(250,246,239,0.55)', fontFamily: "'Lato', sans-serif", animationDelay: '200ms', lineHeight: '1.85'}}
        >
          A young boy in the border town of Presidio risks everything to help his mother — drawn into the dangerous world across the Rio Grande, where loyalty costs more than he can afford to lose.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-rise-in" style={{animationDelay: '400ms'}}>
          <a
            href="#book"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #C8A96E, #E2C99A)',
              color: '#1A0F05',
              fontFamily: "'Lato', sans-serif",
              letterSpacing: '0.12em',
              clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
            }}
          >
            Get the Book
            <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5"
            style={{
              border: '1px solid rgba(200,169,110,0.25)',
              color: 'rgba(200,169,110,0.7)',
              fontFamily: "'Lato', sans-serif",
              letterSpacing: '0.12em',
              clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
            }}
          >
            Meet the Author
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 flex items-center gap-3 animate-rise-in" style={{animationDelay: '500ms'}}>
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-8 animate-scroll-bounce" style={{background: 'linear-gradient(to bottom, #C8A96E55, transparent)'}}></div>
          </div>
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{color: '#C8A96E44', fontFamily: "'Lato', sans-serif"}}>Scroll to explore</span>
        </div>

      </div>

      {/* ── RIGHT PANEL — book cover ── */}
      <div className="hidden lg:flex relative w-1/2 items-center justify-center">

        {/* Warm spotlight behind cover */}
        <div className="absolute w-96 h-96 rounded-full blur-[80px] opacity-25" style={{background: 'radial-gradient(circle, #C8A96E 0%, transparent 70%)'}}></div>

        {/* Book cover */}
        <div className="relative animate-fade-scale-in mt-24 ml-34" style={{animationDelay: '200ms'}}>
          {/* Outer glow frame */}
          {/* <div className="absolute -inset-6 rounded-sm opacity-30 blur-2xl" style={{background: 'linear-gradient(135deg, #C8A96E, #7A5230)'}}></div> */}

          {/* Thin gold border frame */}
          {/* <div className="absolute -inset-1 rounded-sm" style={{border: '1px solid rgba(200,169,110,0.2)'}}></div> */}

          <img
            src="/images/1s.png"
            alt="The Wrath by Joe Medrano"
            className="relative block ml-4 mt-4"
            style={{
              width: '360px',
              maxWidth: '90%',
              // boxShadow: '0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,169,110,0.15)',
              transform: 'rotate(-8deg) translateY(-6px)',
            }}
          />

        </div>
      </div>
      </div>

      {/* ── Mobile book cover (shown below text on small screens) ── */}
      <div className="lg:hidden absolute bottom-0 right-0 w-32 opacity-20 pointer-events-none">
        <img src="/images/the_wrath.jpg" alt="" className="w-full" />
      </div>

    </section>
  );
};

export default Hero;
