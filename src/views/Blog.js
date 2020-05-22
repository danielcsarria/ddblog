import React, {useState, useEffect} from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Comment from '../components/Comment';

function Blog({match}) {

    const [blog, setBlog] = useState(null);
    const [author, setAuthor] = useState(null);
    const [comments, setComments] = useState([]);


    useEffect(() => {

        const fetchBlog = async () => {
            const fetchBlog = await fetch (`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
            const blog = await fetchBlog.json();
    
            const fetchAuthor = await fetch (`https://jsonplaceholder.typicode.com/users/${blog.userId}`)
            const author = await fetchAuthor.json();
    
            setBlog(blog)
            setAuthor(author);
        }
    
        const fetchComments = async () => {
            const fetchComments = await fetch (`https://jsonplaceholder.typicode.com/posts/${match.params.id}/comments`)
            const comments = await fetchComments.json();
            setComments(comments);
        }

        fetchBlog();
        fetchComments();

    }, [match.params.id])

    const BlogDetails = () => {
        if(blog) {
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
                                    Written by: 
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
        } else {
            return (
                <div className="loader flex vert-align">
                    <SyncLoader
                        color={"#d0122c"}
                        loading={true}
                    />
                </div>
            )
        }
    }

    return BlogDetails();
    
}

export default Blog;