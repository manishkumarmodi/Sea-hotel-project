import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Car, Coffee, Waves } from 'lucide-react';

const FeaturedRooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Ocean View Suite',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 299,
      description: 'Luxurious suite with panoramic ocean views and private balcony',
      amenities: ['Ocean View', 'Balcony', 'King Bed', 'Mini Bar']
    },
    {
      id: 2,
      name: 'Deluxe Sea View',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 199,
      description: 'Elegant room with sea views and modern amenities',
      amenities: ['Sea View', 'Queen Bed', 'Work Desk', 'Smart TV']
    },
    {
      id: 3,
      name: 'Luxury Villa',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 499,
      description: 'Private villa with beach access and personal butler service',
      amenities: ['Private Beach', 'Butler Service', 'Pool', 'Kitchen']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Rooms & Suites
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated accommodations, each designed to provide the ultimate in comfort and luxury
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-cyan-600 font-bold">${room.price}/night</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((amenity, index) => (
                    <span key={index} className="bg-cyan-50 text-cyan-600 px-3 py-1 rounded-full text-sm font-medium">
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3 text-cyan-500">
                    <Wifi className="h-5 w-5" />
                    <Car className="h-5 w-5" />
                    <Coffee className="h-5 w-5" />
                    <Waves className="h-5 w-5" />
                  </div>
                  <Link
                    to="/booking"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/rooms"
            className="inline-flex items-center bg-white border-2 border-cyan-500 text-cyan-600 px-8 py-3 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
          >
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;