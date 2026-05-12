import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaBook, FaHeart, FaStar, FaFire } from 'react-icons/fa';
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
    <section id="contact" className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container-custom mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-secondary p-4 rounded-full shadow-lg">
            <FaFire size={32} className="text-primary-dark" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Join the Lantern's Light Community
        </h2>
        <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
          Subscribe for updates on new releases, Civil War history articles, and exclusive content.
        </p>
        
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-white/15 backdrop-blur-sm px-5 py-2 rounded-full inline-flex items-center gap-2">
            <FaEnvelope size={14} className="text-secondary" />
            <span className="text-sm text-white/90">{authorData.email}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-6 py-3 rounded-md text-dark outline-none focus:ring-2 focus:ring-secondary bg-white placeholder:text-dark/40"
            required
          />
          <button type="submit" className="bg-secondary hover:bg-secondary-dark text-primary-dark px-8 py-3 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 shadow-lg">
            <FaPaperPlane size={18} />
            Subscribe
          </button>
        </form>

        {submitted && (
          <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-md p-3 inline-block mx-auto animate-pulse">
            <p className="text-secondary font-semibold flex items-center gap-2">
              <FaHeart size={18} />
              Thank you for subscribing! 📚
              <FaHeart size={18} />
            </p>
          </div>
        )}

        <div className="flex items-center justify-center gap-3 mt-6 text-white/70 text-sm flex-wrap">
          <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
            <FaStar size={12} className="text-secondary" />
            <span>Historical updates</span>
          </div>
          <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
            <FaBook size={12} className="text-secondary" />
            <span>New releases</span>
          </div>
          <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
            <FaFire size={12} className="text-secondary" />
            <span>Exclusive content</span>
          </div>
        </div>
        
        <p className="text-white/40 text-xs mt-6">
          No spam ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;