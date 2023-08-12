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
import PlaylistModel from "../PlaylistBox/PlaylistModel";

const VideoPage = () => {
  const { id } = useParams();
  const [model, setModel] = useState(false);

  const {
    notes,
    addDataDispatch,
    watch_later,
    noteId,
    setNoteId,
    setPlaylistModel,
    playlistModel,
  } = useContext(DataContext);
  // const [editNote, setEditNote] = useState();
  const singleVideo = videos.find((video) => video._id === Number(id));
  const isInWatchLater = watch_later?.some((video) => video._id === Number(id));
  const videoNote = notes.filter((note) => note.videoId === id);
  // console.log(videoNote);
  const watchLaterHandler = () => {
    addDataDispatch({ type: "watch_video_later", payload: singleVideo });
  };

  const removeWatchLaterHandler = () => {
    addDataDispatch({ type: "remove_from_watch_later", payload: id });
  };

  const deleteNoteHandler = (noteId) => {
    addDataDispatch({ type: "delete_note", payload: noteId });
  };
  const { _id, src, title } = singleVideo;

  return (
    <div className="videoPage">
      <div className="navbar-side">
        <NavBar />
      </div>
      <div className="videoPage-container">
        <div className="single-video">
          <div className="single-video-box" key={_id}>
            <div className="video-iframe">
              <iframe
                src={src}
                title={title}
                height="400"
                className="video-src-iframe"
              ></iframe>
            </div>
            <div className="single-video-title-icons">
              <p className="single-video-title-text">{title}</p>
              <div className="icons">
                {isInWatchLater ? (
                  <button className="icon" onClick={removeWatchLaterHandler}>
                    <MdWatchLater />
                  </button>
                ) : (
                  <button className="icon" onClick={watchLaterHandler}>
                    <MdOutlineWatchLater />
                  </button>
                )}
                <button
                  className="icon"
                  onClick={() => setPlaylistModel(!playlistModel)}
                >
                  <MdPlaylistAdd />
                </button>
                <button className="icon" onClick={() => setModel(!model)}>
                  <MdCreate />
                </button>
              </div>
            </div>
          </div>
          {/* Add Note Model */}
          <div className="add-note-model">
            {model && <AddNote NoteId={noteId} />}
          </div>

          {/* Playlist Model */}
          <div className="add-playlist-model">
            {playlistModel && <PlaylistModel />}
          </div>

          <div className="showNotes">
            <h2 className="my-note-text">My Notes</h2>
            <div className="my-notes-box">
              <div className="notes-icons">
                {videoNote.map((note) => (
                  <div className="my-notes" key={note._id}>
                    <div className="notes-text-div">
                      {" "}
                      <p className="my-notes-text">{note.text}</p>
                    </div>
                    <div className="my-note-icons">
                      <button
                        className="my-note-icons-btn"
                        onClick={() => {
                          setModel(!model);
                          setNoteId(note._id);
                        }}
                      >
                        {" "}
                        <BiSolidEditAlt />
                      </button>
                      <button
                        className="my-note-icons-btn"
                        onClick={() => deleteNoteHandler(note._id)}
                      >
                        {" "}
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="more-video-section">
          <div className="more-video-text">
            <h3 className="more-videos">More Videos</h3>
          </div>
          <div className="more-video-section-box">
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
