import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { MdOutlineWatchLater, MdWatchLater, MdPlaylistAdd, MdCreate } from "react-icons/md";

import { videos } from "../../Data/VideosData";
import NavBar from "../NavBar/NavBar";
import "./VideoPage.css";
import AddNote from '../AddNote/AddNote';

const VideoPage = () => {
    const { id } = useParams();
    const [model, setModel] = useState(false);
    const [icon, setIcon] = useState(false);

    const singleVideo = videos.filter((video) => video._id === Number(id));
    const watchLaterHandler = () => {
        setIcon(!icon);
    }
    return (
        <div className='videoPage'>
            <div className='navbar-side'>
                <NavBar />
            </div>
            <div className='videoPage-container'>
                <div className='single-video'>
                    {
                        singleVideo && singleVideo.map((video) => (
                            <div className='single-video-box' key={video._id}>
                                <div className='video-iframe'>
                                    <iframe src={video.src} title={video.title} height="400" className='video-src-iframe'></iframe>
                                </div>
                                <div className='single-video-title-icons'>
                                    <p className='single-video-title-text'>{video.title}</p>
                                    <div className='icons'>
                                        <button className='icon' onClick={watchLaterHandler}>{icon ? <MdWatchLater/> : <MdOutlineWatchLater />}</button>
                                        <button className='icon'><MdPlaylistAdd /></button>
                                        <button className='icon' onClick={() => setModel(!model)}><MdCreate /></button>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                    {
                        model && <AddNote />
                    }
                </div>
                <div className='more-video-section'>
                    <div className='more-video-text'>
                        <h3>More Videos</h3>
                    </div>
                    <div className='more-video-section'>
                        {
                            videos && videos.map((video) => (
                                <Link to={`/category/${video._id}`}>
                                 <div className='more-video-list' key={video._id}>
                                    <div className='more-video-img'>
                                        <img src={video.thumbnail} alt="thumbnail"/>
                                    </div>
                                    <div className='more-video-title-creator'>
                                        <p className='more-video-title'>{video.title}</p>
                                        <p className='more-video-creator'>{video.creator}</p>
                                    </div>
                                </div>
                                </Link>
                               
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPage;