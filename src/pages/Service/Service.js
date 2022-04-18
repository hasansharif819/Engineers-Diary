import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {id, name, services, price, img, email} = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>Service-Name: {services}</p>
            <p>Price: ${price}</p>
            <p><small>Email: {email}</small></p>
            <button>Service Details</button>

        </div>
    );
};

export default Service;