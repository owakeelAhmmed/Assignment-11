import React from 'react';


const Service = ({ service }) => {
    const {name, price, picture, description, quantity, suppliername} = service;
    return (
        <div className="mt-5 col-lg-4">
            <div className="card" style={{ width: "18rem"}} >
                <img src={picture} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    <p className="card-text">Provider: { suppliername }</p>
                    <p className="card-text">{ description }</p>
                    <p className="card-text">Price: { price }</p>
                    <p className="card-text">Quantity: { quantity }</p>
                    <button className='btn btn-primary'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;