import React, {useState, useEffect} from 'react';
import AuthorSingle from '../components/AuthorSingle'

function AuthorContainer(){
    useEffect(() => {
        fetchAuthors();
    }, [])

    const [authors, setAuthors] = useState([]);

    const fetchAuthors = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const authors = await data.json();
        setAuthors(authors)
    }

    return(
        <div className="author-container container small flex column">
            <h1>Authors</h1>
            <div className="flex row wrap space-between">
                {
                    authors.map((author) => {
                        return <AuthorSingle key={author.id} data={author} />
                    })
                }
            </div>
        </div>
    )
}

export default AuthorContainer;