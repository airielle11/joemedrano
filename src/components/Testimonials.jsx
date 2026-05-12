import React from 'react';
import { FaStar, FaUser, FaCalendarAlt, FaQuoteRight, FaHeart } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Testimonials = () => {
  const testimonials = authorData.testimonials;

  return (
    <section className="py-20 bg-primary/5">
      <div className="container-custom mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">Reader Reviews</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-dark/60">What readers are saying about "By Lantern's Light"</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-md p-6 shadow-lg border-t-4 border-primary hover:shadow-xl transition-all duration-300">
              <FaQuoteRight className="text-primary/30 mb-3" size={28} />
              
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} size={16} className="text-primary" />
                ))}
              </div>
              
              <p className="text-dark/70 text-sm italic mb-4 leading-relaxed">
                "{testimonial.review.substring(0, 200)}..."
              </p>
              
              <div className="flex items-center gap-2 pt-3 border-t border-secondary/20">
                <div className="bg-primary/10 p-2 rounded-full">
                  <FaUser size={14} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">{testimonial.name}</p>
                  <div className="flex items-center gap-2 text-xs text-dark/50">
                    <span>{testimonial.title}</span>
                    <span>•</span>
                    <FaCalendarAlt size={10} />
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-md shadow-md border border-primary/20">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={16} className="text-primary" />
              ))}
            </div>
            <span className="font-semibold text-primary">5.0 average rating</span>
            <span className="text-dark/50">from readers worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;