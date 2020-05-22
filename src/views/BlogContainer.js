import React, {useState, useEffect} from 'react';
import BlogSingle from '../components/BlogSingle';
import Pagination from '../components/Pagination';

function BlogContainer(){

    useEffect(() => {
        fetchBlogs();
    }, [])

    const [blogs, setBlogs] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const fetchBlogs = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const blogs = await data.json();
        setBlogs(blogs)
    }

    const totalBlogs = blogs.length;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return(
        <div>
            <div className="blog-container container small flex column">
                <h1>Delta Defense Blog</h1>
                {
                    currentPosts.map((blog) => {
                        return (
                            <BlogSingle 
                                key={blog.id} 
                                id={blog.id} 
                                title={blog.title} 
                                content={blog.body} 
                                author={blog.userId} 
                            />
                        )
                    })
                }
                <Pagination currentPage={currentPage} postsPerPage={postsPerPage} totalPosts={totalBlogs} paginate={paginate} />
            </div>
        </div>
    )  
}

export default BlogContainer;