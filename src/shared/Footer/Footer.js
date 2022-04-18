import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-dark text-white text-center'>
            <small>Copy Right Reserved {year}</small>
        </div>
    );
};

export default Footer;