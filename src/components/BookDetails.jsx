import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const BookDetails = () => {
  const { book } = authorData;
  const synopsis = book.description.split('\n\n')[0].trim();

  return (
    <section id="book" data-reveal className="reveal-on-scroll py-24 md:py-28 relative overflow-hidden sanctuary-bg">
      <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-light/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-secondary/25 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-light/8 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">

          <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-80 animate-fade-scale-in">
              <div className="absolute -inset-4 bg-secondary/10 rounded-3xl blur-3xl pointer-events-none"></div>
              <div className="relative bg-white p-3 shadow-2xl rounded-2xl" style={{boxShadow: '0 25px 60px rgba(0,0,0,0.5)'}}>
                <img
                  src="/images/the_wrath.jpg"
                  alt="The Wrath - Book Cover"
                  className="w-full h-auto block rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">

            <div className="inline-flex items-center gap-3 animate-rise-in" style={{animationDelay: '60ms'}}>
              <span className="text-secondary/70 text-xs font-semibold tracking-[0.28em] uppercase" style={{fontFamily: "'Lato', sans-serif"}}>About the Book</span>
              <span className="w-16 h-px bg-secondary/40 rounded-full"></span>
            </div>

            <div className="animate-rise-in" style={{animationDelay: '120ms'}}>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-3">
                {book.title}
              </h3>
              <p className="text-secondary/60 text-sm italic" style={{fontFamily: "'Lato', sans-serif"}}>First Book of the West Texas Series</p>
            </div>

            <p className="text-white/58 leading-relaxed text-[15px] max-w-2xl animate-rise-in" style={{fontFamily: "'Lato', sans-serif", animationDelay: '220ms'}}>
              {synopsis}
            </p>

            <a 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-linear-to-r from-secondary to-secondary-light text-primary-dark px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/30 transform hover:-translate-y-0.5 animate-rise-in"
              style={{fontFamily: "'Lato', sans-serif", animationDelay: '300ms'}}
            >
              <FaShoppingCart size={14} />
              Buy the Book
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
