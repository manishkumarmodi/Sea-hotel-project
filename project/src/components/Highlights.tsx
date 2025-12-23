import React from 'react';
import { Sparkles, Waves, UtensilsCrossed, Dumbbell, Car, Shield } from 'lucide-react';

const Highlights = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: 'Luxury Spa',
      description: 'Rejuvenate your body and soul with our world-class spa treatments'
    },
    {
      icon: Waves,
      title: 'Private Beach',
      description: 'Exclusive access to pristine white sand beaches and crystal clear waters'
    },
    {
      icon: UtensilsCrossed,
      title: 'Fine Dining',
      description: 'Award-winning restaurants serving international and local cuisine'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'State-of-the-art gym facilities with ocean views'
    },
    {
      icon: Car,
      title: 'Valet Parking',
      description: 'Complimentary valet parking and concierge services'
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Round-the-clock security and guest services for your peace of mind'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Sea Breeze Hotel?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience unparalleled luxury and comfort with our premium amenities and services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;