import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1600")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="block">Welcome to</span>
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Sea Breeze Hotel
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience luxury by the ocean with breathtaking views, world-class amenities, and unforgettable memories
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/booking"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Your Stay
          </Link>
          <button className="flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
            <Play className="h-5 w-5" />
            <span>Watch Video</span>
          </button>
        </div>
      </div>

      {/* Animated Waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 text-white" viewBox="0 0 1200 120" fill="currentColor">
          <path d="M0,60 C300,120 500,0 800,60 C1000,120 1200,60 1200,60 L1200,120 L0,120 Z">
            <animate attributeName="d" 
              values="M0,60 C300,120 500,0 800,60 C1000,120 1200,60 1200,60 L1200,120 L0,120 Z;
                      M0,40 C300,0 500,120 800,40 C1000,0 1200,40 1200,40 L1200,120 L0,120 Z;
                      M0,60 C300,120 500,0 800,60 C1000,120 1200,60 1200,60 L1200,120 L0,120 Z"
              dur="10s" 
              repeatCount="indefinite"/>
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;