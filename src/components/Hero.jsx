import React from 'react';
import { FaArrowRight, FaChevronRight, FaBookOpen, FaQuoteLeft } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Hero = () => {
  const { book } = authorData;

  return (
    <section id="home" data-reveal className="reveal-on-scroll min-h-screen flex items-center pt-24 pb-20 relative overflow-hidden sanctuary-bg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-secondary/30 via-secondary/10 to-transparent" style={{transform: 'rotate(-8deg)', transformOrigin: 'top'}}></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-linear-to-b from-secondary-light/25 via-secondary/8 to-transparent" style={{transform: 'rotate(4deg)', transformOrigin: 'top'}}></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-secondary/25 via-secondary/8 to-transparent" style={{transform: 'rotate(-3deg)', transformOrigin: 'top'}}></div>
      </div>

      <div className="absolute top-24 right-16 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-24 left-16 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/3 left-1/2 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-soft-glow"></div>

      <div className="container-custom mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-secondary/20 text-secondary text-[11px] font-semibold tracking-[0.28em] uppercase mb-8 animate-rise-in">
              <FaBookOpen size={12} />
              <span>Inspirational Fiction</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-5 leading-[0.95] tracking-tight animate-rise-in" style={{animationDelay: '120ms'}}>
              {book.title}
            </h1>

            <p className="text-secondary font-display italic text-lg md:text-xl mb-3 leading-snug animate-rise-in" style={{animationDelay: '220ms'}}>
              Through by the Works of Faith
            </p>

            <p className="text-white/50 text-sm mb-5" style={{fontFamily: "'Inter', sans-serif"}}>
              by {authorData.fullName}
            </p>
 

            <p className="max-w-xl mx-auto lg:mx-0 mb-8 text-secondary/80 text-sm italic leading-relaxed animate-rise-in" style={{fontFamily: "'Inter', sans-serif", animationDelay: '420ms'}}>
              A story of faith, rebirth, and quiet resilience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-rise-in" style={{animationDelay: '520ms'}}>
              <a href="#book" className="bg-linear-to-r from-secondary to-secondary-light text-primary-dark px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/30 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5" style={{fontFamily: "'Inter', sans-serif"}}>
                Explore the Book
                <FaArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="border-2 border-secondary/35 text-secondary hover:bg-white/8 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2" style={{fontFamily: "'Inter', sans-serif"}}>
                Meet the Author
                <FaChevronRight size={15} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 rounded-full bg-secondary/10 blur-3xl animate-soft-glow"></div>
            </div>

            <div className="relative w-full max-w-115 animate-fade-scale-in" style={{animationDelay: '180ms'}}>
              <div className="absolute -inset-5 rounded-4xl bg-linear-to-br from-secondary/20 via-white/5 to-transparent blur-2xl"></div>

              <div className="relative grid gap-5 sm:gap-0 sm:grid-cols-[1.12fr_0.88fr] items-center">
                <div className="relative rounded-4xl overflow-hidden border border-white/10 bg-white/5 p-3 shadow-2xl book-glow transform sm:-rotate-2">
                  <div className="absolute inset-x-5 top-5 h-px bg-linear-to-r from-transparent via-secondary/40 to-transparent"></div>
                  <img
                    src="/images/giving_birth_to_new_beginnings.jpg"
                    alt="Giving Birth to New Beginnings - Book Cover"
                    className="w-full h-auto block rounded-2xl"
                    style={{maxHeight: '560px', objectFit: 'cover'}}
                  />
                </div>

                <div className="hidden sm:block sm:-ml-6 sm:self-end">
                  <div className="glass-card p-5 text-left shadow-2xl border-white/45 max-w-60">
                    <p className="text-primary/45 text-[10px] font-semibold tracking-[0.24em] uppercase mb-3" style={{fontFamily: "'Inter', sans-serif"}}>Featured Quote</p>
                    <FaQuoteLeft className="text-secondary-dark mb-3" size={16} />
                    <p className="text-dark/70 italic text-sm leading-relaxed font-display">
                      "The duty of the flesh suits man, but the duty of the spirit suits the Lord."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
