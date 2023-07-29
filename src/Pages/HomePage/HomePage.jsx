import React from 'react';
import {categories} from "../../Data/CategoriesData";

import "./HomePage.css";
import NavBar from '../../Components/NavBar/NavBar';

const HomePage = () => {
    // console.log(categories);
    return (
        <div className='homepage'>
            <div className='navbar-side'>
                <NavBar />
            </div>
            <div className='categories'>
                <h3 className='categories-list'>Categories</h3>
                <div className='category-data'>
            {
                    categories && categories.map((category) => (
                        <div className='category-conatiner' key={category._id}>
                        <div className='category-box'>
                            <div className='img-box'>
                                <img src= {category.thumbnail} alt='thumbnail' />
                            </div>
                            <div className='category-name'>
                                <p className='category-name-text'>{category.category}</p>
                            </div>
                        </div>
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    )
}

export default HomePage;