import React, {useState, useEffect} from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import BlogSingle from '../components/BlogSingle';
import AuthorDetail from '../components/AuthorDetail';

function Author({match}) {

    const [author, setAuthor] = useState({});
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState({});
    const [company, setCompany] = useState({});

    useEffect(() => {

        setLoading(true)

        const fetchAuthor = async () => {
            const fetchAuthor = await fetch (`https://jsonplaceholder.typicode.com/users/${match.params.id}`);
            const author = await fetchAuthor.json();
            if(author) setLoading(false);

            const address = (author.address);
            const company = (author.company)

            setAuthor(author);
            setCompany(company);
            setAddress(address);
        }

        const fetchBlogs = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts');
            const blogs = await data.json();
            setBlogs(blogs)
        }

       
        fetchAuthor();
        fetchBlogs();

    }, [match.params.id])

    if(loading) {
        return (
            <div className="loader flex vert-align">
                <SyncLoader
                    color={"#d0122c"}
                    loading={true}
                />
            </div>
        )
    }
    return (
        <div>
            <AuthorDetail author={author} address={address} company={company}/>
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
    
}

export default Author;