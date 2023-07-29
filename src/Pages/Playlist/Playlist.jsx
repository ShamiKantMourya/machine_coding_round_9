import React from 'react';

import NavBar from '../../Components/NavBar/NavBar';
import "./Playlist.css";

const Playlist = () => {
  return (
    <div className='playlist'>
    <div className='navbar-side'>
        <NavBar />
    </div>
    <div className='playlist-section'>
        <h3 className='playlist-list'>Playlists</h3>
    </div>
</div>
  )
}

export default Playlist;