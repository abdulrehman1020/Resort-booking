import React from 'react';
import loading from '../images/gif/loading-arrow.gif';

export default function Loading() {
  return <div className='loading'>
      <h4>Data is Loading...</h4>
      <img src={loading}></img>
  </div>;
}
