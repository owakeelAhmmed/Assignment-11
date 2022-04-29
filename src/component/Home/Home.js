import React from 'react';
import './Home.css'
import img1 from '../images/headerimg.jpg'
const Home = () => {
    return (
        <div className='container'>
             <div className="row mt-5">
                <div className="col-6 text-start mt-5">
                    <h1>Welcome To Our MediHouse</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium soluta voluptatum maxime eligendi molestiae ullam eaque voluptate necessitatibus magnam praesentium.</p>
                    <button className="btn btn-primary rounded-pill">Buy Now</button>
                </div>
                <div className="col-6">
                    <img className='img-fluid' src={img1} alt="" />
                </div> 
            </div>
        </div>
    );
};

export default Home;