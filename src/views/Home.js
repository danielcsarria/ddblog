import React from 'react';
import logo from '../assets/images/logo.png';

class Logo extends React.Component {
    render() {
        return(
            <div className="home container flex center column vert-center mt-5">
                <div className="logo-container">
                    <img alt="Delta Defense" src={logo} />
                </div>
                <h1>Delta Defense Blog</h1>
            </div>
        )
    }
}

export default Logo;