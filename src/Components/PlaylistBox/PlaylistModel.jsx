import React, { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { v4 as uuid } from "uuid";

import { videos } from "../../Data/VideosData";
import { DataContext } from "../../Context/DataContext";
import "./PlaylistModel.css";
import { useParams } from "react-router";

const PlaylistModel = () => {
  const [playlistData, setPlaylistData] = useState({
    name: "",
    description: "",
    videos: [],
  });
  const { playlist, addDataDispatch, setPlaylistModel } =
    useContext(DataContext);

  const { id } = useParams();
  const singleVideo = videos.find((video) => video._id === Number(id));

  const createPlaylistHandler = () => {
    if (playlistData.name === "" || playlistData.description === "") {
      alert("fill input part");
    } else {
      addDataDispatch({
        type: "create_playlist",
        payload: {
          _id: uuid(),
          ...playlistData,
        },
      });
      setPlaylistData({ name: "", description: "", videos: [] });
      setPlaylistModel(false);
    }
  };
  const addToPlaylistHandler = (playlistId) => {
    addDataDispatch({
      type: "add_to_playlist",
      payload: { singleVideo, playlistId },
    });
  };

  const deletePlaylistHandler = (playlistId) => {
    addDataDispatch({
      type: "delete_playlist",
      payload: playlistId,
    });
  };

  return (
    <div className="playlistModel">
      <div className="paylistModel-box">
        <div className="text-icon-add-to-playlist">
          <p className="add-to-playlist-txt">Add to playlist</p>
          <p className="close-icon" onClick={() => setPlaylistModel(false)}>
            <IoClose />
          </p>
        </div>
        <input
          type="text"
          placeholder="Playlist Name"
          onChange={(event) =>
            setPlaylistData((prevState) => ({
              ...prevState,
              name: event.target.value,
            }))
          }
          required
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(event) =>
            setPlaylistData((prevState) => ({
              ...prevState,
              description: event.target.value,
            }))
          }
          required
        />
        <button onClick={createPlaylistHandler}>Create Playlist</button>
        <hr style={{ margin: "2px 0px" }} />
        {playlist.map((data) => (
          <div className="playlistModel-list" key={data._id}>
            <p
              className="playlist-box-name"
              onClick={() => addToPlaylistHandler(data._id)}
            >
              {data.name}
            </p>
            <p
              className="close-playlist-btn"
              onClick={() => deletePlaylistHandler(data._id)}
            >
              {" "}
              <IoClose />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistModel;
