import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <section
      id="contact"
      data-reveal
      className="reveal-on-scroll py-14 relative overflow-hidden text-white"
      style={{background: 'linear-gradient(180deg, #1A1228 0%, #120D1C 60%, #0f0d14 100%)'}}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/4 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-light/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom mx-auto relative z-10">
        <div className="max-w-xl mx-auto text-center">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-10 h-px bg-secondary/25"></span>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary/50" style={{fontFamily: "'Inter', sans-serif"}}>
              Stay Connected
            </p>
            <span className="w-10 h-px bg-secondary/25"></span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Join the Community
          </h2>
          <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-sm mx-auto" style={{fontFamily: "'Inter', sans-serif"}}>
            Subscribe for updates on new releases, faith-based articles, and exclusive content from the author.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3.5 rounded-full text-sm outline-none transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.85)',
                fontFamily: "'Inter', sans-serif",
              }}
              required
            />
            <button
              type="submit"
              className="px-7 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #C4A0B0, #DEC8D4)',
                color: '#1A1228',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <FaPaperPlane size={13} />
              Subscribe
            </button>
          </form>

          <p className="text-white/18 text-xs" style={{fontFamily: "'Inter', sans-serif"}}>
            No spam ever. Unsubscribe anytime.
          </p>

          {submitted && (
            <div className="mt-5 inline-block rounded-full px-6 py-2.5" style={{background: 'rgba(196,160,176,0.12)', border: '1px solid rgba(196,160,176,0.2)'}}>
              <p className="text-secondary text-sm font-medium" style={{fontFamily: "'Inter', sans-serif"}}>
                Thank you for subscribing ✦
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
