import React, { useState } from 'react';
import { Clock, MapPin, Phone, Star, UtensilsCrossed, Wine, Coffee, Calendar } from 'lucide-react';

const Restaurant = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(0);
  const [reservationData, setReservationData] = useState({
    restaurant: '',
    date: '',
    time: '',
    guests: 2,
    name: '',
    phone: '',
    specialRequests: ''
  });

  const restaurants = [
    {
      id: 'oceanview',
      name: 'Ocean View Restaurant',
      cuisine: 'International Fine Dining',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Experience exquisite international cuisine while enjoying panoramic ocean views. Our award-winning chefs create culinary masterpieces using the freshest local ingredients.',
      hours: '6:00 PM - 11:00 PM',
      rating: 4.9,
      priceRange: '$$$$',
      features: ['Ocean View', 'Fine Dining', 'Wine Pairing', 'Outdoor Seating']
    },
    {
      id: 'seaside',
      name: 'Seaside Grill',
      cuisine: 'Seafood & BBQ',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Casual beachfront dining featuring fresh seafood and grilled specialties. Perfect for a relaxed meal with your toes in the sand.',
      hours: '12:00 PM - 10:00 PM',
      rating: 4.8,
      priceRange: '$$$',
      features: ['Beach Front', 'Fresh Seafood', 'Casual Dining', 'Live Music']
    },
    {
      id: 'azure',
      name: 'Azure Bar & Lounge',
      cuisine: 'Cocktails & Light Bites',
      image: 'https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sophisticated cocktail lounge with artisanal drinks and gourmet appetizers. The perfect spot to watch the sunset with a premium cocktail.',
      hours: '4:00 PM - 2:00 AM',
      rating: 4.7,
      priceRange: '$$$',
      features: ['Craft Cocktails', 'Sunset Views', 'Live DJ', 'Premium Spirits']
    }
  ];

  const menuHighlights = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Fresh Oysters', description: 'Half dozen local oysters with mignonette', price: 28 },
        { name: 'Tuna Tartare', description: 'Sesame crusted with avocado and citrus', price: 24 },
        { name: 'Lobster Bisque', description: 'Rich and creamy with cognac cream', price: 18 }
      ]
    },
    {
      category: 'Main Courses',
      items: [
        { name: 'Grilled Red Snapper', description: 'With tropical fruit salsa and coconut rice', price: 42 },
        { name: 'Wagyu Beef Tenderloin', description: 'With truffle mashed potatoes and red wine jus', price: 68 },
        { name: 'Seafood Paella', description: 'Traditional Spanish rice with fresh seafood', price: 38 }
      ]
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Chocolate Lava Cake', description: 'With vanilla ice cream and berry coulis', price: 16 },
        { name: 'Key Lime Pie', description: 'Florida classic with graham cracker crust', price: 14 },
        { name: 'Crème Brûlée', description: 'Vanilla bean custard with caramelized sugar', price: 15 }
      ]
    }
  ];

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Table reservation submitted successfully! We will contact you to confirm your booking.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-900/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Restaurant & Dining</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Savor exceptional cuisine with breathtaking ocean views
          </p>
        </div>
      </section>

      {/* Restaurants Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Restaurants</h2>
            <p className="text-xl text-gray-600">Three unique dining experiences to satisfy every craving</p>
          </div>

          <div className="space-y-16">
            {restaurants.map((restaurant, index) => (
              <div key={restaurant.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{restaurant.name}</h3>
                  <p className="text-cyan-600 font-semibold mb-4">{restaurant.cuisine}</p>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">{restaurant.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-cyan-500" />
                      <span className="text-sm text-gray-600">{restaurant.hours}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{restaurant.rating} Rating</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {restaurant.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-cyan-50 text-cyan-600 px-3 py-1 rounded-full text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setReservationData(prev => ({ ...prev, restaurant: restaurant.id }))}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                  >
                    Make Reservation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Menu Highlights</h2>
            <p className="text-xl text-gray-600">A taste of our culinary excellence</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {menuHighlights.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <span className="text-cyan-600 font-bold">${item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Make a Reservation</h2>
            <p className="text-xl text-gray-600">Book your table for an unforgettable dining experience</p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleReservation} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Restaurant</label>
                <div className="relative">
                  <UtensilsCrossed className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    value={reservationData.restaurant}
                    onChange={(e) => setReservationData(prev => ({ ...prev, restaurant: e.target.value }))}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Restaurant</option>
                    {restaurants.map(restaurant => (
                      <option key={restaurant.id} value={restaurant.id}>{restaurant.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    value={reservationData.date}
                    onChange={(e) => setReservationData(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    value={reservationData.time}
                    onChange={(e) => setReservationData(prev => ({ ...prev, time: e.target.value }))}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Time</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                <select
                  value={reservationData.guests}
                  onChange={(e) => setReservationData(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={reservationData.name}
                  onChange={(e) => setReservationData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    value={reservationData.phone}
                    onChange={(e) => setReservationData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
                <textarea
                  value={reservationData.specialRequests}
                  onChange={(e) => setReservationData(prev => ({ ...prev, specialRequests: e.target.value }))}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Dietary restrictions, special occasions, seating preferences..."
                />
              </div>

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Reserve Table
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;