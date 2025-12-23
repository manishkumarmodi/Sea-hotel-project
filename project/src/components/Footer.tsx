import React from 'react';
import { Waves, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold">Sea Breeze Hotel</span>
            </div>
            <p className="text-gray-300">
              Experience luxury by the ocean. Your perfect seaside getaway awaits with breathtaking views and world-class amenities.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-cyan-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-cyan-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-cyan-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="/rooms" className="text-gray-300 hover:text-cyan-400 transition-colors">Rooms & Suites</a></li>
              <li><a href="/restaurant" className="text-gray-300 hover:text-cyan-400 transition-colors">Restaurant</a></li>
              <li><a href="/spa" className="text-gray-300 hover:text-cyan-400 transition-colors">Spa & Activities</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span className="text-gray-300">123 Ocean Drive, Paradise Bay</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span className="text-gray-300">info@seabreezehotel.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe for exclusive offers and updates</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:border-cyan-400 text-white"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-md font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Sea Breeze Hotel. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;