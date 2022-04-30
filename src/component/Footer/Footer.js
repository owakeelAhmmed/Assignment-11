import React from 'react';
import './Footer.css';



const Footer = () => {
    const todays = new Date();
    const year = todays.getFullYear();


    return (
        <div className="bg-primary h-5">
            <small>
                &copy; Copyright {year}
            </small>
        </div>
    );
};

export default Footer;