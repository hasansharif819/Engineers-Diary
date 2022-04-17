import React from 'react';

const Footer = () => {
    const today = Date();
    const year = year();
    return (
        <div>
            <small>Copy Right Reserved</small>
            <h6>{year}</h6>
        </div>
    );
};

export default Footer;