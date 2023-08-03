import React from 'react';
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

const Video = ({ video }) => {
    // console.log(video, "video component")
    return (
        <div>
            {
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
            }
        </div>
    )
}

export default Video;