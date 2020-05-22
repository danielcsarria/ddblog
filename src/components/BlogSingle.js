import React from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

class BlogSingle extends React.Component {
    render() {
        return(
            <div className="blog-content-container flex row" >
                <div className="blog-img flex vert-center desktop">
                    <img alt="logo" src={logo} />
                </div>
                <div className="blog-content">
                    <div className="blog-title" >{this.props.title}</div>
                    <div className="blog-body">
                        {this.props.content}
                        <div className="read-more">
                            <Link to={`/blogs/${this.props.id}`} className="cta" >Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogSingle;