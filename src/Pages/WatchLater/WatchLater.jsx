import React, { useContext } from "react";
import { AiFillEye } from "react-icons/ai";

import NavBar from "../../Components/NavBar/NavBar";
import { DataContext } from "../../Context/DataContext";
import "./WatchLater.css";

const WatchLater = () => {
  const { watch_later } = useContext(DataContext);
  console.log(watch_later, "watchLater Page");
  return (
    <div className="watch-later">
      <div className="navbar-side">
        <NavBar />
      </div>
      <div className="watchlater-section">
        <h3 className="watchlater-text">Watch Later</h3>
        <div className="watchlater-video">
          {watch_later.length > 0 ? (
            watch_later.map((video) => (
              <div className="watch-later-container" key={video._id}>
                <div className="video-container">
                  <div className="video-thumbnail">
                    <img src={video.thumbnail} alt="origami" />
                  </div>
                  <p className="video-title">{video.title}</p>
                  <div className="video-views-creator">
                    <p className="views">
                      <AiFillEye />
                      {video.views}
                    </p>
                    <p className="creator">{video.creator}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="add-to-watch-later">No Videos Yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchLater;
