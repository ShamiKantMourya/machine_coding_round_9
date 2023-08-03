import React, { useState } from 'react';

import { videos } from "../../Data/VideosData";
import NavBar from '../../Components/NavBar/NavBar';
import "./Explore.css";
import Video from '../../Components/Video/Video';

const Explore = () => {
  const [query, setQuery] = useState("");

  const searchedVideo = videos.filter((video) => video.category.toLowerCase().includes(query.toLowerCase()));

  console.log(searchedVideo);
  return (
    <div className='explore'>
      <div className='navbar-side'>
        <NavBar />
      </div>
      <div className='explore-section'>
        <div className='explore-section-text'>
          <h3 className='explore-text'>
            Explore
          </h3>
        </div>
        <div className='search-input'>
          <input
            type='text'
            className='input-search'
            placeholder='Search by title'
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        <div className='searched-video'>
          {
            searchedVideo && searchedVideo.map((video) => (
             <Video video = {video} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Explore;