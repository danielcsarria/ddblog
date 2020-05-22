import React from 'react';

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <div>
            <ul className="pagination flex row wrap">
                {
                    pageNumbers.map(number => {
                        return (
                            <li key={number} className="page">
                                <div className={`page-link ${(currentPage === number) ? "active" : ""}`} onClick={() => paginate(number)}>
                                    {number}
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Pagination