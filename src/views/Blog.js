import React, {useState, useEffect} from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import BlogDetail from '../components/BlogDetail';

function Blog({match}) {

    const [blog, setBlog] = useState([]);
    const [author, setAuthor] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false)


    useEffect(() => {

        const fetchBlog = async () => {

            setLoading(true)

            const fetchBlog = await fetch (`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
            const blog = await fetchBlog.json();
    
            const fetchAuthor = await fetch (`https://jsonplaceholder.typicode.com/users/${blog.userId}`)
            const author = await fetchAuthor.json();

            if(blog) setLoading(false);
    
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

    return <BlogDetail blog={blog} comments={comments} author={author}/>
    
}

export default Blog;