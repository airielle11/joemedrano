import React from 'react';
import { FaHeart, FaBook, FaGraduationCap, FaStar, FaLightbulb, FaUser, FaMapMarkerAlt, FaPenFancy, FaUsers } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-light">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-md mb-4">
            <FaHeart size={14} className="text-primary" />
            <span className="text-primary font-semibold text-sm">Meet the Author</span>
            <FaHeart size={14} className="text-primary" />
          </div>
          <h2 className="section-title">About Carol Cutrona</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="section-subtitle">
            A passionate historian and storyteller bringing women's Civil War contributions to light
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-md p-8 shadow-lg border-l-8 border-primary">
              <FaBook className="text-primary mb-4" size={40} />
              <p className="text-dark/80 leading-relaxed whitespace-pre-line">
                {authorData.authorBio.fullBio}
              </p>
              <div className="mt-6 pt-4 border-t border-secondary/30">
                <div className="flex items-start gap-3">
                  <FaLightbulb size={20} className="text-primary" />
                  <p className="text-primary font-semibold italic text-sm">
                    "{authorData.authorBio.research}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-md p-6 shadow-md border border-secondary/30">
              <h3 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                <FaGraduationCap size={24} className="text-primary" />
                Education & Background
              </h3>
              <p className="text-dark/70 mb-3">
                <span className="font-semibold">Graduate:</span> {authorData.authorBio.education}
              </p>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-secondary/20">
                <FaMapMarkerAlt className="text-primary" size={16} />
                <span className="text-dark/60 text-sm">Currently resides in {authorData.authorBio.location}</span>
              </div>
            </div>

            <div className="bg-white rounded-md p-6 shadow-md border border-secondary/30">
              <h3 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                <FaUsers size={24} className="text-primary" />
                Memberships
              </h3>
              <div className="space-y-2">
                {authorData.authorBio.memberships.map((membership, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-secondary/10 rounded-md p-3">
                    <FaPenFancy className="text-primary" size={16} />
                    <span className="text-dark/70">{membership}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-md p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <FaStar size={24} className="text-secondary" />
                <h3 className="text-xl font-display font-bold">Writing Journey</h3>
              </div>
              <p className="text-white/90 leading-relaxed text-sm">
                Carol writes in a variety of genres and has written a screenplay based on her novel. Her work has been published in national periodicals, as well as in Braille.
              </p>
              <div className="flex items-center gap-2 mt-4 text-secondary">
                <FaBook size={14} />
                <span className="text-sm">Currently working on: "Maggie"</span>
                <FaBook size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;