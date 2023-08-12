import React, { useContext } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

import NavBar from "../../Components/NavBar/NavBar";
import { DataContext } from "../../Context/DataContext";
import "./Playlist.css";
import { Link } from "react-router-dom";
import PlaylistModel from "../../Components/PlaylistBox/PlaylistModel";
import {deletedPlayList} from "../../Animations/toast";

const Playlist = () => {
  const {
    playlist,
    addDataDispatch,
    playlistModel,
    setPlaylistModel,
  } = useContext(DataContext);
  console.log(playlist);
  const deletePlaylistHandler = (playlistId) => {
    addDataDispatch({
      type: "delete_playlist",
      payload: playlistId,
    });
    deletedPlayList();
  };

  return (
    <div className="playlist">
      <div className="navbar-side">
        <NavBar />
      </div>
      <div className="playlist-section">
        <h3 className="playlist-list">Playlists</h3>
        <div className="playlist-options">
          {/* Show Playlist */}
          {playlist.map((data) => (
            <div className="playlist-box" key={data._id}>
              <div className="playlist-box-img"></div>
              <Link to={`/playlist/${data._id}`}>
                <p className="playlist-box-name">{data.name}</p>
                <p className="playlist-box-description">{data.description}</p>
              </Link>
              <button
                className="delete-playlist"
                onClick={() => deletePlaylistHandler(data._id)}
              >
                <MdDelete />
              </button>
            </div>
          ))}
          {/* Create Playlist */}
          <div
            className="create-playlist"
            onClick={() => setPlaylistModel(!playlistModel)}
          >
            <div>
              <p className="create-playlist-text">Click to</p>
              <p className="create-playlist-text">Create a playlist</p>
            </div>

            <button className="create-playlist-btn">
              <IoAddCircleOutline />
            </button>
          </div>
        </div>
        <div className="playlist-model">
          {playlistModel ? <PlaylistModel /> : null}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
