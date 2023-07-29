import React from 'react';

import NavBar from '../../Components/NavBar/NavBar';
import "./Explore.css";

const Explore = () => {
  return (
    <div className='explore'>
      <div className='navbar-side'>
        <NavBar />
      </div>
      <div className='explore-section'>
        <h3 className='explore-text'>
          Explore
        </h3>
      </div>
    </div>
  )
}

export default Explore;