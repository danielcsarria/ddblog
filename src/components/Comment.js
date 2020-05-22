import React from 'react';
import profile from '../assets/images/profile.png';

class Comment extends React.Component {
    render() {
        return(
            <div className="blog-content-container flex row" >
                <div className="blog-img flex vert-center ">
                    <img alt="profile" src={profile} />
                    
                </div>
                <div className="blog-content">
                    <div className="blog-title" >{this.props.name}</div>
                    <div className="blog-body">
                        {this.props.content}
                    </div>
                    <a href={`mailto:${this.props.email}`} >{this.props.email}</a>
                </div>
                
            </div>
        )
    }
}

export default Comment;