import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Mycatalog.css'






const Mycatalog = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:4000/user')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);


    const handleUserDelete = id => {
        console.log('deleted',id);
        const proceed = window.confirm('Are you sure you want to delete this item?')
        if (proceed) {
            console.log('delete id', id);
            const url = `http://localhost:4000/user/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(response => response.json())
                .then(data => { 
                    if (data.deletedCount > 0) {
                        console.log("deleted");
                        const remaining = products.filter(user => user._id !== id);
                        setProducts(remaining);
                   }
                })
        }
     }





    
    return (



        <div className="container catalog-cont">
            
    <div className="">
        <div className="row">
            {
            products.slice(0,10).map(product =>
                <div className=" mb-5 col-md-6 col-lg-4" key={product.id} product={product}>
                        <div className="card-container item-card p-3 card" style={{ width: "22rem"}} >
                                <div className="product-img">
                                    <img className=' rounded img-fluid p-3' src={product.picture} alt="" />
                                </div>
                            <div className="card-body">
                                <h5 className="card-title">{ product.name }</h5>
                                <p className="card-text">Provider: { product.suppliername }</p>
                                <p className="card-text">Price: { product.price }</p>
                                <p className="card-text">Quantity: { product.quantity }</p>
                                <p className="card-text">{ product.description }</p>
                            </div>
                           
                        <div className='d-flex justify-content-between'>
                                <button onClick={() => handleUserDelete(product._id)}className="btn btn-danger">Delete</button>
                            <Link to={`/updateuser/${product._id}`}><button className='btn btn-success'>Update</button></Link>
                
                            </div>
                        </div>
                </div>)
            }
        </div>
    </div>
 </div>


        
        
        
        
       
    );
};

export default Mycatalog;



