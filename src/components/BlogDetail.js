import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Comment from '../components/Comment';

export default class BlogDetail extends React.Component {
    render(){
        const blog = this.props.blog;
        const comments = this.props.comments;
        const author = this.props.author;
        return (
            <div>
                <div className="blog-container container small flex column">
                    <h1>{blog.title}</h1>
                    <div className="blog-content-container" >
                        <div className="blog-img-full">
                            <img alt="logo" src={logo} />
                        </div>
                        <div className=" blog-body flex container">
                            <div className="blog-content-full" >
                                {blog.body}    
                            </div>
                            <div className="blog-author center" >
                                Written by: &nbsp;
                                <Link 
                                    to={`/authors/${(author) ? author.id : ""}`} 
                                >
                                    {(author) ? author.name : ""}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comments-container" >
                    <div className="blog-container container small flex column" >
                        <h2>Comments</h2>
                        {
                            comments.map((comment) => {
                                return (
                                    <Comment key={comment.id} name={comment.name} content={comment.body} email={comment.email}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}