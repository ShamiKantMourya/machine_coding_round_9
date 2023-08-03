import React from 'react';
import { useParams} from "react-router-dom";


import NavBar from '../NavBar/NavBar';
import { videos } from "../../Data/VideosData";
import "./Category.css";
import Video from '../Video/Video';

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
                           <Video video = {video}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Category;