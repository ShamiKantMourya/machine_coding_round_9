import React from 'react';
import { useParams, Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai"

import NavBar from '../NavBar/NavBar';
import { videos } from "../../Data/VideosData";
import "./Category.css";

const Category = () => {
    const { category } = useParams();

    const filterVideo = videos.filter((video) => video.category === category);
    // console.log(filterVideo);

    return (
        <div className='subcategory-container'>
            <div className='navbar-side'>
                <NavBar />
            </div>
            <div className='video-category-container'>
                <div>
                    <h3 className='video-category'>{category}</h3>
                </div>
                <div className='video-box-container'>
                    {
                        filterVideo && filterVideo.map((video) => (
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

export default Category;