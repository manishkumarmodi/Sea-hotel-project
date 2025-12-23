import React, { useState } from 'react';
import { Calendar, Users, Bed, CreditCard, Check, MapPin, Phone, Mail } from 'lucide-react';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    rooms: 1,
    roomType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    paymentMethod: 'credit-card'
  });

  const roomTypes = [
    { id: 'standard', name: 'Standard Ocean View', price: 159 },
    { id: 'deluxe', name: 'Deluxe Sea View', price: 199 },
    { id: 'suite', name: 'Ocean View Suite', price: 299 },
    { id: 'family', name: 'Family Ocean View', price: 249 },
    { id: 'premium', name: 'Premium Suite', price: 399 },
    { id: 'villa', name: 'Luxury Villa', price: 499 }
  ];

  const calculateDays = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const checkIn = new Date(bookingData.checkIn);
      const checkOut = new Date(bookingData.checkOut);
      return Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 3600 * 24));
    }
    return 1;
  };

  const calculateTotal = () => {
    const selectedRoom = roomTypes.find(room => room.id === bookingData.roomType);
    if (!selectedRoom) return 0;
    const days = calculateDays();
    const subtotal = selectedRoom.price * days * bookingData.rooms;
    const tax = subtotal * 0.12;
    return subtotal + tax;
  };

  const handleInputChange = (field: string, value: string | number) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle booking submission
    alert('Booking submitted successfully!');
    setStep(4);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-900/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Book Your Stay</h1>
          <p className="text-xl">Reserve your perfect ocean getaway</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            {/* Progress Steps */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                {[1, 2, 3].map((stepNum) => (
                  <div key={stepNum} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step >= stepNum ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step > stepNum ? <Check className="h-5 w-5" /> : stepNum}
                    </div>
                    {stepNum < 3 && (
                      <div className={`w-16 h-1 mx-4 ${
                        step > stepNum ? 'bg-cyan-500' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Dates & Room</span>
                <span>Guest Details</span>
                <span>Payment</span>
              </div>
            </div>

            {/* Step 1: Dates & Room Selection */}
            {step === 1 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Dates & Room</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        value={bookingData.checkIn}
                        onChange={(e) => handleInputChange('checkIn', e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        value={bookingData.checkOut}
                        onChange={(e) => handleInputChange('checkOut', e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <select
                        value={bookingData.guests}
                        onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        {[1, 2, 3, 4, 5, 6].map(num => (
                          <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Rooms</label>
                    <div className="relative">
                      <Bed className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <select
                        value={bookingData.rooms}
                        onChange={(e) => handleInputChange('rooms', parseInt(e.target.value))}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        {[1, 2, 3, 4].map(num => (
                          <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-4">Room Type</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {roomTypes.map((room) => (
                      <label key={room.id} className="cursor-pointer">
                        <input
                          type="radio"
                          name="roomType"
                          value={room.id}
                          checked={bookingData.roomType === room.id}
                          onChange={(e) => handleInputChange('roomType', e.target.value)}
                          className="sr-only"
                        />
                        <div className={`p-4 border-2 rounded-lg transition-all duration-200 ${
                          bookingData.roomType === room.id
                            ? 'border-cyan-500 bg-cyan-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}>
                          <div className="flex justify-between items-center">
                            <h4 className="font-semibold text-gray-900">{room.name}</h4>
                            <span className="text-cyan-600 font-bold">${room.price}/night</span>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={nextStep}
                    disabled={!bookingData.checkIn || !bookingData.checkOut || !bookingData.roomType}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Guest Details */}
            {step === 2 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Guest Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      value={bookingData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={bookingData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        value={bookingData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        value={bookingData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
                  <textarea
                    value={bookingData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Any special requests or dietary requirements..."
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-200"
                  >
                    Previous
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!bookingData.firstName || !bookingData.lastName || !bookingData.email || !bookingData.phone}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h2>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-4">Payment Method</label>
                  <div className="space-y-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="payment"
                        value="credit-card"
                        checked={bookingData.paymentMethod === 'credit-card'}
                        onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                        className="mr-3"
                      />
                      <CreditCard className="h-5 w-5 mr-2 text-gray-600" />
                      <span>Credit/Debit Card</span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Your payment information is encrypted and secure</span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-200"
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    Complete Booking
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for choosing Sea Breeze Hotel. Your booking has been confirmed and a confirmation email has been sent to your registered email address.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Booking Reference: #SB2025001</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Check-in: {bookingData.checkIn}</div>
                    <div>Check-out: {bookingData.checkOut}</div>
                    <div>Room: {roomTypes.find(r => r.id === bookingData.roomType)?.name}</div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                  View Booking Details
                </button>
              </div>
            )}
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Summary</h3>
              
              {bookingData.roomType && (
                <div className="space-y-4">
                  <div className="pb-4 border-b border-gray-200">
                    <h4 className="font-semibold text-gray-900">
                      {roomTypes.find(r => r.id === bookingData.roomType)?.name}
                    </h4>
                    <div className="text-sm text-gray-600 space-y-1 mt-2">
                      <div>Check-in: {bookingData.checkIn || 'Select date'}</div>
                      <div>Check-out: {bookingData.checkOut || 'Select date'}</div>
                      <div>{calculateDays()} night{calculateDays() > 1 ? 's' : ''}</div>
                      <div>{bookingData.guests} guest{bookingData.guests > 1 ? 's' : ''}</div>
                      <div>{bookingData.rooms} room{bookingData.rooms > 1 ? 's' : ''}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Room rate (per night)</span>
                      <span>${roomTypes.find(r => r.id === bookingData.roomType)?.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Subtotal ({calculateDays()} nights)</span>
                      <span>${(roomTypes.find(r => r.id === bookingData.roomType)?.price || 0) * calculateDays() * bookingData.rooms}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Taxes & fees</span>
                      <span>${Math.round((roomTypes.find(r => r.id === bookingData.roomType)?.price || 0) * calculateDays() * bookingData.rooms * 0.12)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-cyan-600">${Math.round(calculateTotal())}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 p-4 bg-cyan-50 rounded-lg">
                <div className="flex items-center space-x-2 text-cyan-700">
                  <Check className="h-5 w-5" />
                  <span className="text-sm font-medium">Free cancellation until 48 hours before check-in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;