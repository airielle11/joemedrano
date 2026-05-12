import React from 'react';
import { FaArrowRight, FaChevronRight, FaStar, FaFire, FaHeart } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-primary/90 via-primary-dark to-primary">
      {/* Olive drab and khaki decorative elements - interchanged colors */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary-light/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-secondary/5 via-transparent to-secondary/5"></div>
      
      {/* Floating lanterns with interchanged colors */}
      <div className="absolute top-40 left-20 opacity-30 animate-float">
        <FaFire size={50} className="text-secondary" />
      </div>
      <div className="absolute bottom-40 right-20 opacity-30 animate-float-delayed">
        <FaFire size={40} className="text-secondary-light" />
      </div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/3 right-10 opacity-20 animate-float">
        <FaStar size={30} className="text-secondary" />
      </div>
      <div className="absolute bottom-1/3 left-10 opacity-20 animate-float-delayed">
        <FaHeart size={25} className="text-secondary-light" />
      </div>
      
      <div className="container-custom mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-md text-secondary font-semibold text-sm mb-6">
              <FaStar size={14} className="text-secondary-light" />
              <span>Historical Fiction | Civil War Epic</span>
              <FaStar size={14} className="text-secondary-light" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
              {authorData.fullName}
              <span className="block text-secondary-light text-2xl md:text-3xl mt-2">Historical Fiction Author</span>
            </h1>
            <p className="text-lg text-secondary/90 mb-8 leading-relaxed">
              Award-winning author of "By Lantern's Light" - a dramatic, fact-based story of courageous women who launched the first MASH Unit on American soil during the Civil War.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#book" className="bg-secondary hover:bg-secondary-dark text-primary-dark px-8 py-3 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5 shadow-lg">
                Explore By Lantern's Light
                <FaArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary-dark px-8 py-3 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                Meet the Author
                <FaChevronRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative rounded-md overflow-hidden shadow-2xl max-w-md mx-auto bg-gradient-to-br from-secondary/20 via-secondary/10 to-primary/30 p-6 border-2 border-secondary/50">
              <div className="relative">
                <img 
                  src="/images/carol.png"
                  alt="Carol Cutrona"
                  className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-md shadow-xl"
                  style={{ maxHeight: '450px' }}
                />
                <div className="absolute -bottom-4 -right-4 bg-secondary text-primary-dark rounded-full p-3 shadow-lg">
                  <FaFire size={24} />
                </div>
              </div>
              
              {/* Civil War era decorations with interchanged colors */}
              <div className="flex justify-center gap-3 mt-4">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary-dark text-sm shadow-md transform hover:scale-110 transition-transform">
                  ⚔️
                </div>
                <div className="w-10 h-10 bg-secondary-light rounded-full flex items-center justify-center text-primary-dark text-sm shadow-md transform hover:scale-110 transition-transform">
                  🏥
                </div>
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-secondary text-sm shadow-md transform hover:scale-110 transition-transform">
                  🕯️
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;