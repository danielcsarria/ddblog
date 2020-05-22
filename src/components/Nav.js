import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Nav() {

    return(
        <nav>
            <div className="nav desktop">
                <div className="container flex vert-center wrap"> 
                    <div className="logo-container">
                        <NavLink to="/"><img alt="logo" src={logo} /></NavLink>
                    </div>
                    <div className="links-container">
                        <ul>
                            <NavLink to="/blogs"><li>Blogs</li></NavLink>
                            <NavLink to="/authors"><li>Authors</li></NavLink>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="nav mobile" >
                <div className="container flex vert-center wrap"> 
                    <div className="logo-container">
                        <NavLink to="/"><img alt="logo" src={logo} /></NavLink>
                    </div>
                    <div className="links-container flex column">
                        <NavLink to="/blogs"><li>Blogs</li></NavLink>
                        <NavLink to="/authors"><li>Authors</li></NavLink>
                    </div>
                </div>
            </div>
        </nav>
        
        
    )
}

export default Nav;