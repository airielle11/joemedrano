import React, { useState } from 'react';
import { FaPaperPlane, FaEnvelope } from 'react-icons/fa';
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
      style={{
        background: 'radial-gradient(circle at 12% 12%, rgba(200,169,110,0.03) 0%, transparent 18%), linear-gradient(180deg, #100804 0%, #070403 75%)',
        backgroundBlendMode: 'overlay, normal',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-px" style={{background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.25), transparent)'}}></div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{background: 'radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 65%)'}}></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{background: 'radial-gradient(circle, rgba(110,74,40,0.03) 0%, transparent 65%)'}}></div>

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
            Stay in the Loop
          </h2>
          <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-sm mx-auto" style={{fontFamily: "'Lato', sans-serif"}}>
            Subscribe for updates on new releases, events, and exclusive content from Joe Medrano.
          </p>

          {authorData.email && (
            <div className="flex items-center justify-center mb-6 -mt-4">
              <a
                href={`mailto:${authorData.email}`}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full"
                style={{background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.95)', fontFamily: "'Lato', sans-serif"}}
              >
                <FaEnvelope />
                <span className="text-sm">{authorData.email}</span>
              </a>
            </div>
          )}

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
                fontFamily: "'Lato', sans-serif",
              }}
              required
            />
            <button
              type="submit"
              className="px-7 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #C8A96E, #E2C99A)',
                color: '#3B2410',
                fontFamily: "'Lato', sans-serif",
              }}
            >
              <FaPaperPlane size={13} />
              Subscribe
            </button>
          </form>

          <p className="text-white/18 text-xs" style={{fontFamily: "'Lato', sans-serif"}}>
            No spam ever. Unsubscribe anytime.
          </p>

          {submitted && (
            <div className="mt-5 inline-block rounded-full px-6 py-2.5" style={{background: 'rgba(196,160,176,0.12)', border: '1px solid rgba(196,160,176,0.2)'}}>
              <p className="text-secondary text-sm font-medium" style={{fontFamily: "'Inter', sans-serif"}}>
                Thank you for subscribing ✦
              </p>
            </div>
          )}

          {/* Contact email (if available) */}
          {/* Contact email (if available) */}
          {/* contact link moved to top pill */}

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
