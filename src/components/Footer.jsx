import React from 'react';
import { FaHeart, FaEnvelope, FaBook, FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaStar, FaFire } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white/80 py-10">
      <div className="container-custom mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="relative">
                <FaFire className="text-secondary" size={22} />
                <FaStar className="text-secondary absolute -top-2 -right-2 text-xs" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">Carol Cutrona</h3>
            </div>
            <p className="text-sm text-white/70">Historical Fiction Author | Civil War Scholar</p>
            <div className="flex items-center gap-1 justify-center md:justify-start mt-2">
              <FaHeart size={12} className="text-secondary" />
              <p className="text-xs text-white/50">By Lantern's Light</p>
              <FaHeart size={12} className="text-secondary" />
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <a
              href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                text-black text-2xl font-bold py-8 px-26 rounded-full
                shadow-2xl
                transform transition-all duration-300
                hover:scale-105 hover:shadow-yellow-400/50
                animate-pulse
              "
            >
              Launch & Go-Live Portal
            </a>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary transition-all duration-300 hover:scale-110 transform"><FaTwitter size={18} /></a>
            <a href="#" className="hover:text-secondary transition-all duration-300 hover:scale-110 transform"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-secondary transition-all duration-300 hover:scale-110 transform"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-secondary transition-all duration-300 hover:scale-110 transform"><FaLinkedinIn size={18} /></a>
            <a href={`mailto:${authorData.email}`} className="hover:text-secondary transition-all duration-300 hover:scale-110 transform"><FaEnvelope size={18} /></a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          <div className="flex items-center justify-center gap-2">
            <FaFire size={12} className="text-secondary" />
            <span>Women's Civil War History</span>
            <FaFire size={12} className="text-secondary" />
          </div>
          <div className="flex items-center justify-center gap-1">
            <FaBook size={12} className="text-secondary" />
            <span>© 2025 Carol Cutrona. All rights reserved.</span>
            <FaBook size={12} className="text-secondary" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaStar size={10} className="text-secondary" />
            <span>Based on true events</span>
            <FaStar size={10} className="text-secondary" />
          </div>
        </div>
        
        <div className="mt-4 text-center text-xs text-white/30">
          <p className="flex items-center justify-center gap-1">
            <FaHeart size={10} className="text-secondary" /> 
            "The weapons they carried were not muskets but hot soup, whispered prayers and compassion"
            <FaHeart size={10} className="text-secondary" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;