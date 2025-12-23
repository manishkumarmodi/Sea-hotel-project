import React, { useState } from 'react';
import { Sparkles, Clock, Users, Calendar, Phone, Mail, Waves, Heart, Leaf, Sun } from 'lucide-react';

const Spa = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    duration: '',
    name: '',
    phone: '',
    email: '',
    preferences: ''
  });

  const spaServices = [
    {
      id: 'massage',
      name: 'Signature Massage Treatments',
      icon: Waves,
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Rejuvenating massage therapies using premium oils and ancient techniques',
      treatments: [
        { name: 'Deep Ocean Massage', duration: '90 min', price: 180, description: 'Full body massage with sea minerals and essential oils' },
        { name: 'Hot Stone Therapy', duration: '75 min', price: 160, description: 'Relaxing treatment using heated volcanic stones' },
        { name: 'Swedish Relaxation', duration: '60 min', price: 130, description: 'Classic Swedish massage for ultimate relaxation' },
        { name: 'Couples Massage', duration: '90 min', price: 320, description: 'Romantic massage experience for two' }
      ]
    },
    {
      id: 'facial',
      name: 'Luxury Facial Treatments',
      icon: Sparkles,
      image: 'https://images.pexels.com/photos/3757943/pexels-photo-3757943.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Advanced skincare treatments for radiant, healthy skin',
      treatments: [
        { name: 'Marine Collagen Facial', duration: '75 min', price: 150, description: 'Anti-aging treatment with marine collagen and peptides' },
        { name: 'Hydrating Sea Salt Facial', duration: '60 min', price: 120, description: 'Deep hydration with mineral-rich sea salt' },
        { name: 'Gentleman\'s Facial', duration: '60 min', price: 110, description: 'Tailored skincare treatment for men' },
        { name: 'Express Glow Facial', duration: '45 min', price: 90, description: 'Quick refresh for immediate radiance' }
      ]
    },
    {
      id: 'body',
      name: 'Body Treatments',
      icon: Heart,
      image: 'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxurious body treatments for complete renewal',
      treatments: [
        { name: 'Seaweed Body Wrap', duration: '90 min', price: 170, description: 'Detoxifying wrap with organic seaweed extracts' },
        { name: 'Salt Scrub & Massage', duration: '75 min', price: 145, description: 'Exfoliating scrub followed by moisturizing massage' },
        { name: 'Coconut Sugar Polish', duration: '60 min', price: 115, description: 'Gentle exfoliation with tropical coconut oils' },
        { name: 'Mud Therapy Treatment', duration: '60 min', price: 125, description: 'Purifying treatment with therapeutic mud' }
      ]
    },
    {
      id: 'wellness',
      name: 'Wellness & Activities',
      icon: Leaf,
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Holistic wellness activities for mind, body, and spirit',
      treatments: [
        { name: 'Beach Yoga Session', duration: '60 min', price: 50, description: 'Sunrise or sunset yoga on the private beach' },
        { name: 'Meditation Workshop', duration: '45 min', price: 40, description: 'Guided meditation with ocean sounds' },
        { name: 'Aqua Fitness Class', duration: '45 min', price: 35, description: 'Low-impact water exercises in our pool' },
        { name: 'Wellness Consultation', duration: '30 min', price: 75, description: 'Personal wellness plan with our expert' }
      ]
    }
  ];

  const facilities = [
    {
      name: 'Thermal Pools',
      description: 'Relax in our heated pools with therapeutic minerals',
      icon: Waves
    },
    {
      name: 'Steam Rooms',
      description: 'Purifying steam therapy with aromatic herbs',
      icon: Sun
    },
    {
      name: 'Meditation Garden',
      description: 'Peaceful outdoor space for mindfulness practice',
      icon: Leaf
    },
    {
      name: 'Relaxation Lounge',
      description: 'Quiet areas to unwind before and after treatments',
      icon: Heart
    }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Spa appointment booked successfully! We will contact you to confirm your booking.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-900/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Spa & Wellness</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Rejuvenate your body and soul in our oceanside sanctuary
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Spa Services</h2>
            <p className="text-xl text-gray-600">Indulge in our comprehensive wellness offerings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spaServices.map((service, index) => (
              <div key={service.id} className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.treatments.slice(0, 2).map((treatment, treatmentIndex) => (
                      <div key={treatmentIndex} className="bg-white p-3 rounded-lg border border-gray-200">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900 text-sm">{treatment.name}</h4>
                          <div className="text-right">
                            <div className="text-cyan-600 font-bold">${treatment.price}</div>
                            <div className="text-xs text-gray-500">{treatment.duration}</div>
                          </div>
                        </div>
                        <p className="text-gray-600 text-xs">{treatment.description}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedService(service.id)}
                    className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    View All Treatments
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Spa Facilities</h2>
            <p className="text-xl text-gray-600">Complete wellness amenities for your comfort</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <facility.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.name}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Book Your Spa Experience</h2>
            <p className="text-xl text-gray-600">Schedule your personalized wellness journey</p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Category</label>
                <div className="relative">
                  <Sparkles className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    value={bookingData.service}
                    onChange={(e) => setBookingData(prev => ({ ...prev, service: e.target.value }))}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Service</option>
                    {spaServices.map(service => (
                      <option key={service.id} value={service.id}>{service.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    value={bookingData.date}
                    onChange={(e) => setBookingData(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    value={bookingData.time}
                    onChange={(e) => setBookingData(prev => ({ ...prev, time: e.target.value }))}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <select
                  value={bookingData.duration}
                  onChange={(e) => setBookingData(prev => ({ ...prev, duration: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Duration</option>
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">60 minutes</option>
                  <option value="75">75 minutes</option>
                  <option value="90">90 minutes</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={bookingData.name}
                  onChange={(e) => setBookingData(prev => ({ ...prev, name: e.target.value }))}
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
                    value={bookingData.phone}
                    onChange={(e) => setBookingData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => setBookingData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of People</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People (Couples)</option>
                  </select>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests or Preferences</label>
                <textarea
                  value={bookingData.preferences}
                  onChange={(e) => setBookingData(prev => ({ ...prev, preferences: e.target.value }))}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Any allergies, preferences, or special requests..."
                />
              </div>

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Book Spa Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Wellness Tips */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Wellness Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Sun className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Stay Hydrated</h3>
              <p className="text-sm text-gray-600">Drink plenty of water before and after your spa treatments</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Arrive Early</h3>
              <p className="text-sm text-gray-600">Come 15 minutes early to enjoy our relaxation areas</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Leaf className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Digital Detox</h3>
              <p className="text-sm text-gray-600">Disconnect from devices for a truly peaceful experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spa;