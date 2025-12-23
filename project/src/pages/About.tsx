import React from 'react';
import { Award, Users, Clock, Heart, Star, Shield, Leaf, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '15+', label: 'Years of Excellence', icon: Clock },
    { number: '50,000+', label: 'Happy Guests', icon: Users },
    { number: '25+', label: 'Awards Won', icon: Award },
    { number: '4.9/5', label: 'Guest Rating', icon: Star }
  ];

  const awards = [
    {
      title: 'Best Luxury Resort 2024',
      organization: 'Travel Excellence Awards',
      icon: Award
    },
    {
      title: 'Eco-Friendly Hotel of the Year',
      organization: 'Green Hospitality Initiative',
      icon: Leaf
    },
    {
      title: 'World\'s Best Spa Resort',
      organization: 'International Spa Association',
      icon: Heart
    },
    {
      title: 'Outstanding Guest Service',
      organization: 'Hospitality Excellence Board',
      icon: Shield
    }
  ];

  const team = [
    {
      name: 'Alexandra Rivera',
      position: 'General Manager',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '15 years of luxury hospitality experience'
    },
    {
      name: 'Chef Marcus Laurent',
      position: 'Executive Chef',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Michelin-starred chef with international expertise'
    },
    {
      name: 'Dr. Sophia Chen',
      position: 'Spa Director',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Certified wellness expert and aromatherapist'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-900/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Sea Breeze Hotel</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Where luxury meets the ocean, creating unforgettable experiences since 2009
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Sea Breeze Hotel was born from a dream to create a sanctuary where the beauty of the ocean meets unparalleled luxury. Founded in 2009 by hospitality veterans Maria and Carlos Rodriguez, our resort began as a small boutique property with just 20 rooms.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Today, we've grown into a world-renowned destination while maintaining our commitment to personalized service and environmental sustainability. Every aspect of our resort is designed to complement the natural beauty of our oceanfront location.
              </p>
              <div className="flex items-center space-x-4">
                <Globe className="h-8 w-8 text-cyan-500" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                  <p className="text-gray-600">Creating memories that last a lifetime while preserving our ocean paradise for future generations.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Hotel exterior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-red-500" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                    <div className="text-gray-600">Guest Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Recognition & Awards</h2>
            <p className="text-xl text-gray-600">Our commitment to excellence has been recognized by leading industry organizations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-cyan-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-4">
                  <award.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-600 text-sm">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Dedicated professionals committed to creating exceptional experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-cyan-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <Shield className="h-16 w-16 text-cyan-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">We strive for perfection in every detail, from the moment you arrive until you departure.</p>
            </div>
            <div className="text-center p-8">
              <Leaf className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600">Protecting our ocean environment while providing luxury experiences for future generations.</p>
            </div>
            <div className="text-center p-8">
              <Heart className="h-16 w-16 text-red-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hospitality</h3>
              <p className="text-gray-600">Genuine care and personalized service that makes every guest feel like family.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;