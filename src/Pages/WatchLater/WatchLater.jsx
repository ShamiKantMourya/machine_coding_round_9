import React from 'react';

import NavBar from "../../Components/NavBar/NavBar";
import "./WatchLater.css";

const WatchLater = () => {
  return (
    <div className='watch-later'>
      <div className='navbar-side'>
        <NavBar />
      </div>
      <div className='watchlater-section'>
        <h3 className='watchlater-text'>
          Watch Later
        </h3>
      </div>
    </div>
  )
}

export default WatchLater;