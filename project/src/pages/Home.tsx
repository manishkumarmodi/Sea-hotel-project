import React from 'react';
import Hero from '../components/Hero';
import FeaturedRooms from '../components/FeaturedRooms';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedRooms />
      <Highlights />
      <Testimonials />
    </div>
  );
};

export default Home;