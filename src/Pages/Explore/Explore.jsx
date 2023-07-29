import React, { useState } from 'react';
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

import { videos } from "../../Data/VideosData";
import NavBar from '../../Components/NavBar/NavBar';
import "./Explore.css";

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
              <div className='video-box' key={video._id}>
                <Link to={`/category/${video._id}`} className='video-links'>
                  <div className='video-container'>
                    <div className='video-thumbnail'>
                      <img src={video.thumbnail} alt='origami' />
                    </div>
                    <p className='video-title'>{video.title}</p>
                    <div className='video-views-creator'>
                      <p className='views'><AiFillEye />{video.views}</p>
                      <p className='creator'>{video.creator}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Explore;