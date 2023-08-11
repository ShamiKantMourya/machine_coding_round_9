import React, {useContext, useState} from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';

import NavBar from '../../Components/NavBar/NavBar';
import { DataContext } from '../../Context/DataContext';
import "./Playlist.css";

const Playlist = () => {
const {playlist} = useContext(DataContext);
const [playlistModel, setPlaylistModel] = useState(false);
console.log(playlist);

  return (
    <div className='playlist'>
    <div className='navbar-side'>
        <NavBar />
    </div>
    <div className='playlist-section'>
        <h3 className='playlist-list'>Playlists</h3>
        <div className='playlist-options'>
          {
            playlist.length > 0 ? (
              <div>

              </div>
            ) : (
              <div className='create-playlist' onClick={() => setPlaylistModel(!playlistModel)}>
                <div>
                <p className='create-playlist-text'>Click to</p>
                <p className='create-playlist-text'>Create a playlist</p>
                </div>
                <button><IoAddCircleOutline /></button>
              </div>
            )
          }
        </div>
    </div>
</div>
  )
}

export default Playlist;