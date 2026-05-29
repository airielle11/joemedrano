import React from 'react';
import { FaStar, FaUser, FaCalendarAlt, FaQuoteRight } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Testimonials = () => {
  const testimonials = authorData.testimonials;

  return (
    <section id="testimonials" className="py-20" style={{background: 'linear-gradient(180deg, #FAF6EF 0%, #F5EFE3 100%)'}}>
      <div className="container-custom mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">Reader Reviews</h2>
          <div className="spirit-divider mb-4"></div>
          <p className="text-dark/60" style={{fontFamily: "'Lato', sans-serif"}}>What readers are saying about The Wrath</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-secondary hover:shadow-xl transition-all duration-300">
              <FaQuoteRight className="text-secondary/40 mb-3" size={28} />

              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} size={16} className="text-secondary-dark" />
                ))}
              </div>

              <h4 className="font-display font-bold text-primary text-base mb-2">{testimonial.title}</h4>

              <p className="text-dark/70 text-sm italic mb-4 leading-relaxed" style={{fontFamily: "'Lato', sans-serif"}}>
                "{testimonial.review}"
              </p>

              <div className="flex items-center gap-2 pt-3 border-t border-secondary/20">
                <div className="bg-secondary/10 p-2 rounded-full">
                  <FaUser size={14} className="text-secondary-dark" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">{testimonial.name}</p>
                  <div className="flex items-center gap-2 text-xs text-dark/50" style={{fontFamily: "'Lato', sans-serif"}}>
                    {testimonial.location && <span>{testimonial.location}</span>}
                    {testimonial.location} 
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-secondary/20">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={16} className="text-secondary-dark" />
              ))}
            </div>
            <span className="font-semibold text-primary" style={{fontFamily: "'Lato', sans-serif"}}>5.0 average rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;