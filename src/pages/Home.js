import React from 'react';
import Hero from '../components/Hero';
import Baner from '../components/Baner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRoom from '../components/FeaturedRoom';

const Home = () => {
  return(
  <>
  <Hero hero="defaultHero" >
    <Baner title="Luxurious Rooms" subtitle="Deluxe room starting at $299">
      <Link to="/room" className='btn-primary'>
        Rooms
      </Link>
    </Baner>
  </Hero>
  <Services />
  <FeaturedRoom />
  </>
  );
};

export default Home;
