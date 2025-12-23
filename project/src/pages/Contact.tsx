import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check, MessageCircle, Car, Plane, Ship } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Ocean Drive', 'Paradise Bay, FL 33139', 'United States'],
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['Reception: +1 (555) 123-4567', 'Reservations: +1 (555) 123-4568', 'Spa: +1 (555) 123-4569'],
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@seabreezehotel.com', 'reservations@seabreezehotel.com', 'concierge@seabreezehotel.com'],
      color: 'text-purple-500'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Front Desk: 24/7', 'Concierge: 6:00 AM - 10:00 PM', 'Check-in: 3:00 PM | Check-out: 11:00 AM'],
      color: 'text-orange-500'
    }
  ];

  const inquiryTypes = [
    { id: 'general', name: 'General Inquiry' },
    { id: 'booking', name: 'Room Booking' },
    { id: 'dining', name: 'Restaurant Reservation' },
    { id: 'spa', name: 'Spa Services' },
    { id: 'events', name: 'Events & Weddings' },
    { id: 'concierge', name: 'Concierge Services' }
  ];

  const directions = [
    {
      icon: Car,
      title: 'By Car',
      description: 'From Miami Airport: Take I-95 South to Exit 1A. Follow signs to Paradise Bay. Hotel is 2 miles on the right.',
      duration: '45 minutes'
    },
    {
      icon: Plane,
      title: 'By Air',
      description: 'Miami International Airport (MIA) is 35 miles away. We offer complimentary airport shuttle service.',
      duration: '45 minutes'
    },
    {
      icon: Ship,
      title: 'By Sea',
      description: 'Private marina available for guests arriving by boat. Contact concierge for slip reservations.',
      duration: 'Direct access'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-900/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl">We're here to help make your stay perfect</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => handleInputChange('inquiryType', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    >
                      {inquiryTypes.map(type => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    placeholder="Brief description of your inquiry"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Please provide details about your inquiry..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-600 mb-6">Thank you for contacting Sea Breeze Hotel. We'll get back to you within 24 hours.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">For immediate assistance, please call us at <strong>+1 (555) 123-4567</strong></p>
                </div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gray-100`}>
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm mb-1">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Directions */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Find Us</h3>
              <div className="space-y-6">
                {directions.map((direction, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                      <direction.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{direction.title}</h4>
                        <span className="text-sm text-cyan-600 font-medium">{direction.duration}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{direction.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
            <p className="text-gray-600">Find us on the beautiful Paradise Bay coastline</p>
          </div>
          
          <div className="h-96 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
              <p className="text-gray-700 font-medium">Interactive Map</p>
              <p className="text-gray-500 text-sm">123 Ocean Drive, Paradise Bay, FL 33139</p>
              <button className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                Get Directions
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What are your check-in/check-out times?</h4>
              <p className="text-gray-600 text-sm mb-4">Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request.</p>
              
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer airport transportation?</h4>
              <p className="text-gray-600 text-sm mb-4">Yes, we provide complimentary shuttle service to and from Miami International Airport. Please contact us 24 hours in advance to arrange.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is parking available?</h4>
              <p className="text-gray-600 text-sm mb-4">We offer complimentary valet parking for all hotel guests. Self-parking is also available.</p>
              
              <h4 className="font-semibold text-gray-900 mb-2">Are pets allowed?</h4>
              <p className="text-gray-600 text-sm">We welcome well-behaved pets under 25 lbs with advance notice. Additional fees may apply.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;