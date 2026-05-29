import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaPenFancy } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Footer = () => {
  return (
    <footer data-reveal style={{background: '#0f0d14', borderTop: '1px solid rgba(255,255,255,0.04)'}} className="reveal-on-scroll pt-10 pb-8">
      <div className="container-custom mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-white/8">

          {/* Left — author name + book title */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
              <h3 className="text-white font-bold text-xl" style={{fontFamily: "'Playfair Display', serif", letterSpacing: '0.05em'}}>
                {authorData.name}
              </h3>
            </div>
            <p className="text-xs text-white/35 uppercase tracking-widest" style={{fontFamily: "'Lato', sans-serif", letterSpacing: '0.18em'}}>
              West Texas · Fiction · Border Stories
            </p>
          </div>

          {/* Center — CTA button */}
          <a
            href='https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07'
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-primary-dark font-semibold text-sm uppercase px-10 py-4 rounded-full hover:bg-secondary-light transition-all duration-300 hover:shadow-xl hover:shadow-secondary/25 transform hover:-translate-y-0.5 whitespace-nowrap"
            style={{fontFamily: "'Lato', sans-serif", letterSpacing: '0.1em'}}
          >
            Launch & Go-Live Portal
          </a>

          {/* Right — social icons */}
          <div className="flex items-center gap-6">
            {[
              { icon: <FaTwitter size={17} />, href: '#' },
              { icon: <FaInstagram size={17} />, href: '#' },
              { icon: <FaFacebookF size={17} />, href: '#' },
              { icon: <FaLinkedinIn size={17} />, href: '#' },
            ].map(({ icon, href }, i) => (
              <a key={i} href={href} className="text-white/35 hover:text-secondary transition-colors duration-300">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom rows */}
        <div className="pt-6 text-center space-y-2" style={{fontFamily: "'Inter', sans-serif"}}>
          <p className="text-xs tracking-widest text-white/28 uppercase" style={{letterSpacing: '0.14em'}}>
            © 2026 {authorData.name}. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
