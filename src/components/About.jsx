import React from 'react';
import { FaStar, FaMapMarkerAlt, FaQuoteLeft } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const About = () => {
  const { authorBio } = authorData;

  const highlights = [
    'Inspirational Fiction Author',
    'Spiritual Testimony Writer',
    'Faith & Spiritual Growth',
  ];

  return (
    <section id="about" data-reveal className="reveal-on-scroll -mt-10 md:-mt-16 pt-16 md:pt-20 pb-24 md:pb-28 relative overflow-hidden" style={{background: 'linear-gradient(180deg, #FDFAF7 0%, #F7F3EE 100%)'}}>
      <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-primary-dark/10 via-light/70 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom mx-auto relative z-10">
        <div className="mb-10 max-w-2xl animate-rise-in">
          <p className="text-secondary-dark text-xs font-semibold tracking-[0.28em] uppercase mb-3" style={{fontFamily: "'Inter', sans-serif"}}>About the Author</p>
          <div className="w-12 h-0.5 bg-secondary-dark rounded-full mb-4"></div>
          <p className="text-dark/62 leading-relaxed text-[15px] max-w-xl" style={{fontFamily: "'Inter', sans-serif"}}>
            A quieter, grounded continuation of the same faith-led tone from the hero.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-14 items-start">

          {/* Left — photo placeholder + name + location (2 cols) */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
            {/* Photo */}
            <div className="relative w-full mb-5 animate-fade-scale-in" style={{maxWidth: '320px'}}>
              <div className="absolute -inset-3 rounded-[1.75rem] bg-secondary/10 blur-2xl"></div>
              <div
                className="relative rounded-3xl flex items-center justify-center select-none shadow-2xl border border-white/90 overflow-hidden"
                style={{background: 'linear-gradient(180deg, #1d1c23 0%, #14141a 100%)', aspectRatio: '3/4'}}
              >
                <div className="text-center">
                  <p className="text-8xl font-display font-bold" style={{color: '#3a3a3a'}}>VG</p>
                  <p className="text-xs tracking-[0.3em] mt-3" style={{color: '#3a3a3a', fontFamily: "'Inter', sans-serif"}}>AUTHOR PORTRAIT</p>
                </div>
              </div>
            </div>

            {/* Name + location below photo */}
            <h2 className="text-2xl font-display font-bold text-primary mb-1 animate-rise-in">{authorData.name}</h2>
            <p className="text-dark/45 text-sm italic font-display mb-2">{authorData.tagline.split('|')[0].trim()}</p>
            <div className="flex items-center gap-1.5 mt-1">
              <FaMapMarkerAlt size={12} className="text-secondary-dark" />
              <p className="text-dark/45 text-xs" style={{fontFamily: "'Inter', sans-serif"}}>{authorBio.location}</p>
            </div>
          </div>

          {/* Right — bio, highlights, quote, CTA (3 cols) */}
          <div className="lg:col-span-3 space-y-8">

            {/* Bio */}
            <p className="text-dark/70 leading-relaxed text-[15px] animate-rise-in" style={{fontFamily: "'Inter', sans-serif", animationDelay: '120ms'}}>
              {authorBio.fullBio}
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 animate-rise-in" style={{animationDelay: '220ms'}}>
              {highlights.map((item) => (
                <div key={item} className="glass-card p-4 text-center flex flex-col items-center gap-2 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300">
                  <FaStar size={14} className="text-secondary-dark" />
                  <p className="text-primary font-semibold text-xs leading-snug" style={{fontFamily: "'Inter', sans-serif"}}>{item}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="border-l-4 border-secondary-dark pl-5 py-1 animate-rise-in" style={{animationDelay: '320ms'}}>
              <p className="text-primary/45 text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{fontFamily: "'Inter', sans-serif"}}>Life Philosophy</p>
              <p className="text-dark/65 italic text-base font-display leading-relaxed">
                "{authorBio.research}"
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 animate-rise-in"
              style={{animationDelay: '420ms'}}
              style={{fontFamily: "'Inter', sans-serif"}}
            >
              Get in Touch
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
