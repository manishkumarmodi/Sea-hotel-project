import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Car, Coffee, Waves, Users, Bed, Bath, Home, Filter, X } from 'lucide-react';

const Rooms = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

  const rooms = [
    {
      id: 1,
      name: 'Standard Ocean View',
      category: 'standard',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 159,
      description: 'Comfortable room with partial ocean views and modern amenities',
      size: '35 m²',
      guests: 2,
      beds: '1 Queen Bed',
      bathroom: '1 Bathroom',
      amenities: ['Ocean View', 'WiFi', 'AC', 'Mini Bar', 'Safe', 'Balcony']
    },
    {
      id: 2,
      name: 'Deluxe Sea View',
      category: 'deluxe',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 199,
      description: 'Elegant room with panoramic sea views and premium furnishings',
      size: '45 m²',
      guests: 2,
      beds: '1 King Bed',
      bathroom: '1 Bathroom',
      amenities: ['Sea View', 'WiFi', 'AC', 'Mini Bar', 'Safe', 'Balcony', 'Smart TV', 'Work Desk']
    },
    {
      id: 3,
      name: 'Ocean View Suite',
      category: 'suite',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 299,
      description: 'Luxurious suite with separate living area and stunning ocean panorama',
      size: '65 m²',
      guests: 4,
      beds: '1 King Bed + Sofa Bed',
      bathroom: '2 Bathrooms',
      amenities: ['Ocean View', 'WiFi', 'AC', 'Mini Bar', 'Safe', 'Large Balcony', 'Living Area', 'Kitchenette']
    },
    {
      id: 4,
      name: 'Family Ocean View',
      category: 'family',
      image: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 249,
      description: 'Spacious family room with connecting doors and ocean views',
      size: '55 m²',
      guests: 6,
      beds: '2 Queen Beds',
      bathroom: '2 Bathrooms',
      amenities: ['Ocean View', 'WiFi', 'AC', 'Mini Bar', 'Safe', 'Connecting Rooms', 'Kids Area']
    },
    {
      id: 5,
      name: 'Premium Suite',
      category: 'suite',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 399,
      description: 'Elegant suite with premium amenities and exclusive access to club lounge',
      size: '75 m²',
      guests: 4,
      beds: '1 King Bed + Sofa Bed',
      bathroom: '2 Bathrooms',
      amenities: ['Ocean View', 'WiFi', 'AC', 'Premium Bar', 'Safe', 'Club Access', 'Butler Service', 'Jacuzzi']
    },
    {
      id: 6,
      name: 'Luxury Villa',
      category: 'villa',
      image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 499,
      description: 'Private villa with beach access, personal butler, and infinity pool',
      size: '120 m²',
      guests: 6,
      beds: '2 King Beds',
      bathroom: '3 Bathrooms',
      amenities: ['Private Beach', 'Butler Service', 'Private Pool', 'Kitchen', 'WiFi', 'AC', 'Garden', 'BBQ Area']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Rooms' },
    { id: 'standard', name: 'Standard' },
    { id: 'deluxe', name: 'Deluxe' },
    { id: 'suite', name: 'Suites' },
    { id: 'family', name: 'Family' },
    { id: 'villa', name: 'Villas' }
  ];

  const filteredRooms = rooms.filter(room => {
    const categoryMatch = selectedCategory === 'all' || room.category === selectedCategory;
    const priceMatch = room.price >= priceRange[0] && room.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-900/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Rooms & Suites</h1>
          <p className="text-xl md:text-2xl">Discover your perfect ocean sanctuary</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </button>

            <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">Price Range:</span>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="accent-cyan-500"
                />
                <span className="text-cyan-600 font-semibold">${priceRange[0]} - ${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-cyan-600 font-bold">${room.price}/night</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{room.description}</p>
                
                {/* Room Details */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Home className="h-4 w-4 text-cyan-500" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-cyan-500" />
                    <span>{room.guests} guests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bed className="h-4 w-4 text-cyan-500" />
                    <span>{room.beds}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="h-4 w-4 text-cyan-500" />
                    <span>{room.bathroom}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {room.amenities.slice(0, 4).map((amenity, index) => (
                    <span key={index} className="bg-cyan-50 text-cyan-600 px-2 py-1 rounded-full text-xs font-medium">
                      {amenity}
                    </span>
                  ))}
                  {room.amenities.length > 4 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      +{room.amenities.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3 text-cyan-500">
                    <Wifi className="h-4 w-4" />
                    <Car className="h-4 w-4" />
                    <Coffee className="h-4 w-4" />
                    <Waves className="h-4 w-4" />
                  </div>
                  <Link
                    to="/booking"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRooms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No rooms found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rooms;