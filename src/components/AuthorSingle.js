import React from 'react';
import profile from '../assets/images/profile.png';
import { Link } from 'react-router-dom';

class AuthorSingle extends React.Component {
    render() {
        const author = this.props.data
        return(
            <div className="author-single">
                <Link className="hotspot" to={`/authors/${author.id}`} />
                <div className="author-img">
                    <img alt="img" src={profile} />
                </div>
                <div className="author-details">
                    <div className="name" >
                        {author.name}
                    </div>
                    <div className="details" >
                        {author.company.name}
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default AuthorSingle;