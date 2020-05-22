import React, {useState, useEffect} from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import BlogSingle from '../components/BlogSingle';
import profile from '../assets/images/profile.png';

function Author({match}) {

    const [author, setAuthor] = useState(null);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        const fetchAuthor = async () => {
            const fetchAuthor = await fetch (`https://jsonplaceholder.typicode.com/users/${match.params.id}`);
            const author = await fetchAuthor.json();
    
            setAuthor(author);
        }

        const fetchBlogs = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts');
            const blogs = await data.json();
            setBlogs(blogs)
        }

        fetchAuthor();
        fetchBlogs();

    }, [match.params.id])

    const AuthorDetails = () => {
        if(author) {
            return (
                <div>
                    <div className="author-details-container container flex small mp-5"> 
                        <div className="img-container">
                            <img src={profile} alt={author.name} />
                        </div>
                        <div className="details-container">
                            <h1>{author.name}</h1>
                            <div className="details">
                                <div className="detail">
                                    <span className='title'>Username:</span><br/>{author.username}
                                </div>
                                <div className="detail">
                                    <span className='title'>Address:</span><br/>
                                    {author.address.street}<br />
                                    {author.address.suite} <br />
                                    {author.address.city} {author.address.zipcode}
                                </div>
                                <div className="detail">
                                    <span className='title'>Company: </span><br />
                                    {author.company.name} <br />
                                    {author.company.catchPhrase} <br />
                                    {author.company.bs}
                                </div>
                                <div className="detail">
                                    <span className='title'>Email:</span> <br />
                                    <a href={`mailto:${author.email}`} >{author.email}</a>
                                </div>
                                <div className="detail">
                                    <span className='title'>Phone:</span> <br />
                                    <a href={`tel:${author.phone}`} >{author.phone}</a>
                                </div>
                                <div className="detail">
                                    <span className='title'>Website:</span> <br />
                                    <a href={author.website} >{author.website}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="related-blogs container small" >
                        <h2>
                            Blogs by {author.name}
                        </h2>
                        <div className="related-blogs-container container flex column" >
                            <div className="blog-container small flex column">
                                {
                                    blogs.map((blog) => {
                                        if(blog.userId === author.id) {
                                            return (
                                                <BlogSingle 
                                                    key={blog.id} 
                                                    id={blog.id} 
                                                    title={blog.title} 
                                                    content={blog.body} 
                                                    author={blog.userId} 
                                                />
                                            )
                                        } else {
                                            return null;
                                        }
                                    })
                                }
                            </div>
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

     return AuthorDetails();
    
}

export default Author;