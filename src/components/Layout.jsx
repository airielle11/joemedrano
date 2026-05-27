import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import BookDetails from './BookDetails';
import Newsletter from './Newsletter';
import Footer from './Footer';

const Layout = () => {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-reveal]'));

    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -12% 0px',
      }
    );

    sections.forEach((section, index) => {
      section.style.transitionDelay = `${index * 90}ms`;
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <BookDetails />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Layout;