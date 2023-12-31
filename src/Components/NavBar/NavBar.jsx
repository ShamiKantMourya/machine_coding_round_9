import React from 'react';
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';
import { MdExplore, MdOutlinePlaylistAdd, MdOutlineWatchLater } from "react-icons/md";

import "./NavBar.css";
const NavBar = () => {

    const getStyle = ({ isActive }) => {
        return {
            textDecoration: "none",
            backgroundColor: isActive ? "#06272b" : "",
            color: isActive ? "white" : "",
        };
    };

    return (
        <div className='navbar'>
            <div className='link-routes'>
                <NavLink
                    style={getStyle}
                    className="navlink"
                    to="/"
                >
                    <div className='navlink-icons'>
                        <AiOutlineHome />
                        <p className='navlink-text'>Home</p>
                    </div>
                </NavLink>
            </div>
            <div className='link-routes'>
                <NavLink
                    style={getStyle}
                    className="navlink"
                    to="/explore"
                >
                    <div className='navlink-icons'>
                        <MdExplore />
                        <p className='navlink-text'>Explore</p>
                    </div>
                </NavLink>
            </div>
            <div className='link-routes'>
                <NavLink
                    style={getStyle}
                    className="navlink"
                    to="/playlist"
                >
                    <div className='navlink-icons'>
                        <MdOutlinePlaylistAdd />
                        <p className='navlink-text'>PlayList</p>
                    </div>
                </NavLink>
            </div>
            <div className='link-routes'>
                <NavLink
                    style={getStyle}
                    className="navlink"
                    to="/watchlater"
                >
                    <div className='navlink-icons'>
                        <MdOutlineWatchLater />
                        <p className='navlink-text'>Watch Later</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar;