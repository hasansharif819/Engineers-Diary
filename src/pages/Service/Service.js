import React from 'react';

const Service = ({service}) => {
    const {id, name, services, price, img, email} = service;
    return (
        <div>
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>Service-Name: {services}</p>
            <p>Price: ${price}</p>
            <p><small>Email: {email}</small></p>

        </div>
    );
};

export default Service;