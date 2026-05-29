import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const activeLockRef = useRef(null);
  const activeLockTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (activeLockRef.current) {
        return;
      }

      setScrolled(window.scrollY > 60);
      const sections = ['home', 'about', 'book', 'testimonials', 'contact'];
      const triggerPoint = window.innerHeight * 0.42;

      let nextActiveTab = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= triggerPoint && bottom > triggerPoint) {
            nextActiveTab = section;
          }
        }
      }

      setActiveTab(nextActiveTab);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Book', href: '#book', id: 'book' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleClick = (e, href, id) => {
    e.preventDefault();
    setActiveTab(id);
    activeLockRef.current = id;

    if (activeLockTimerRef.current) {
      clearTimeout(activeLockTimerRef.current);
    }

    activeLockTimerRef.current = window.setTimeout(() => {
      activeLockRef.current = null;
      activeLockTimerRef.current = null;
    }, 900);

    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'py-4 border-b border-white/8'
        : 'py-6'
    }`}
    style={{
      background: scrolled
        ? 'rgba(59, 36, 16, 0.92)'
        : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
    }}>
      <div className="container-custom mx-auto flex justify-between items-center">

        {/* Logo — author name only, elegant */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, '#home', 'home')}
          className="cursor-pointer"
        >
          <span className="font-display font-bold text-xl text-white tracking-wide hover:text-secondary transition-colors duration-300">
            {authorData.name}
          </span>
        </a>

        {/* Desktop nav — text only, no icons */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href, item.id)}
              className={`text-sm tracking-widest uppercase transition-all duration-300 relative ${
                activeTab === item.id
                  ? 'text-secondary'
                  : 'text-white/50 hover:text-white'
              }`}
              style={{fontFamily: "'Inter', sans-serif", letterSpacing: '0.12em'}}
            >
              {item.name}
              {activeTab === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-px bg-secondary rounded-full"></span>
              )}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full border-t border-white/8 animate-slide-down"
          style={{background: 'rgba(59, 36, 16, 0.97)', backdropFilter: 'blur(20px)'}}>
          <div className="flex flex-col py-6 px-8 gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href, item.id)}
                className={`py-3 text-sm tracking-widest uppercase transition-colors duration-300 border-b border-white/5 last:border-0 ${
                  activeTab === item.id
                    ? 'text-secondary'
                    : 'text-white/45 hover:text-white'
                }`}
                style={{fontFamily: "'Inter', sans-serif", letterSpacing: '0.12em'}}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
