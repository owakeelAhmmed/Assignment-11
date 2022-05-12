import React from 'react';
import './Footer.css';



const Footer = () => {
    const todays = new Date();
    const year = todays.getFullYear();


    return (
        <div className="footer-container ">
            <small className="footer-text fw-bold  fs-6">
                &copy; Copyright {year}
            </small>
        </div>
    );
};

export default Footer;