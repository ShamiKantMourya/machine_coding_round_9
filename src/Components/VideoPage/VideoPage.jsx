import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MdOutlineWatchLater,
  MdWatchLater,
  MdPlaylistAdd,
  MdCreate,
  MdDelete,
} from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";

import { videos } from "../../Data/VideosData";
import NavBar from "../NavBar/NavBar";
import { DataContext } from "../../Context/DataContext";
import AddNote from "../AddNote/AddNote";
import "./VideoPage.css";

const VideoPage = () => {
  const { id } = useParams();
  const [model, setModel] = useState(false);
  const { notes, addDataDispatch, watch_later } = useContext(DataContext);
  // console.log(id, "myId");
  // console.log(watch_later, "watchLater");
  // console.log(notes, "my notes");
  // console.log(watch_later, "watch later video")
  const singleVideo = videos.filter((video) => video._id === Number(id));
  const isInWatchLater = watch_later?.some((video) => video._id === Number(id));

  const watchLaterHandler = () => {
    singleVideo.map((video) =>
      addDataDispatch({ type: "watch_video_later", payload: video })
    );
  };
  const removeWatchLaterHandler = () => {
    addDataDispatch({ type: "remove_from_watch_later", payload: id });
  };
  return (
    <div className="videoPage">
      <div className="navbar-side">
        <NavBar />
      </div>
      <div className="videoPage-container">
        <div className="single-video">
          {singleVideo &&
            singleVideo.map((video) => (
              <div className="single-video-box" key={video._id}>
                <div className="video-iframe">
                  <iframe
                    src={video.src}
                    title={video.title}
                    height="400"
                    className="video-src-iframe"
                  ></iframe>
                </div>
                <div className="single-video-title-icons">
                  <p className="single-video-title-text">{video.title}</p>
                  <div className="icons">
                    {isInWatchLater ? (
                      <button
                        className="icon"
                        onClick={removeWatchLaterHandler}
                      >
                        <MdWatchLater />
                      </button>
                    ) : (
                      <button className="icon" onClick={watchLaterHandler}>
                        <MdOutlineWatchLater />
                      </button>
                    )}
                    <button className="icon">
                      <MdPlaylistAdd />
                    </button>
                    <button className="icon" onClick={() => setModel(!model)}>
                      <MdCreate />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {model && <AddNote />}
          <div className="showNotes">
            <h2 className="my-note-text">My Notes</h2>
            <div className="my-notes-box">
              <div className="notes-icons">
                {notes.map((note) => (
                  <div className="my-notes" key={note._id}>
                    <p className="my-notes-text">{note.text}</p>
                    <div className="my-note-icons">
                      <BiSolidEditAlt />
                      <MdDelete />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="more-video-section">
          <div className="more-video-text">
            <h3>More Videos</h3>
          </div>
          <div className="more-video-section">
            {videos &&
              videos.map((video) => (
                <Link to={`/category/${video._id}`}>
                  <div className="more-video-list" key={video._id}>
                    <div className="more-video-img">
                      <img src={video.thumbnail} alt="thumbnail" />
                    </div>
                    <div className="more-video-title-creator">
                      <p className="more-video-title">{video.title}</p>
                      <p className="more-video-creator">{video.creator}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
