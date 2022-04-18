import React from 'react';

const Client = ({client}) => {
    const {name, email, review, img} = client;
    return (
        <div>
            <div className="service">
                <img src={img} alt="" />
            <h6>Name: {name}</h6>
            <p>Email: {email}</p>
            <small>Feedback: {review}</small>
            </div>
        </div>
    );
};

export default Client;