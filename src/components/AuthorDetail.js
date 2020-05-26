import React from 'react';
import profile from '../assets/images/profile.png';

export default class AuthorDetail extends React.Component {
    render() {
        const address = this.props.address;
        const company = this.props.company;
        const author = this.props.author;

        return (
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
                            {address.street}<br />
                            {address.suite} <br />
                            {address.city} {address.zipcode}
                        </div>
                        <div className="detail">
                            <span className='title'>Company: </span><br />
                            {company.name} <br />
                            {company.catchPhrase} <br />
                            {company.bs}
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
        )
    }
}