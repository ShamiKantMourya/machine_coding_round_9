import React from 'react';

import "./HomePage.css";
import NavBar from '../../Components/NavBar/NavBar';

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='navbar-side'>
                <NavBar />
            </div>
            <div className='categories'>
                <h3 className='categories-list'>Categories</h3>
            </div>
        </div>
    )
}

export default HomePage;