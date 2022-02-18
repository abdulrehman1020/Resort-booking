import React from 'react';
import Hero from '../components/Hero';
import Baner from '../components/Baner';
import { Link } from 'react-router-dom';


const Error = () => {
  return <Hero hero="defaultHero" >
  <Baner title="404" subtitle="Page not found">
    <Link to="/" className='btn-primary'>
      Return Home
    </Link>
  </Baner>
</Hero>;
};

export default Error;
