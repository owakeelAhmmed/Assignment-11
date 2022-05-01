import React from 'react';
import img404 from '../images/404.png';
import './Notfound.css';
const Notfound = () => {
    return (
        <div className="notfound mb-5">
            <div>
                 <img src={img404} alt="" />
            </div>
            <h1>Not Found Your Page</h1>
        </div>
    );
};

export default Notfound;