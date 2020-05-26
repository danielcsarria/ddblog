import React, {useState, useEffect} from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
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
    
    return <AuthorDetail author={author} address={address} company={company} blogs={blogs}/>
    
}

export default Author;