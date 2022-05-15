import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loding from '../Shared/Loading/Loding';
import './Myitem.css';




const Myitem = () => {
    const [products, setProducts, loading] = useState([]);
    console.log(products);



    useEffect(() => {
        fetch('https://vast-plateau-84088.herokuapp.com/user')
            .then(Response => Response.json())
            .then(data => setProducts(data))
    },[]);       

    
   const handleUserDelete = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure you want to delete this item?')
        if (proceed) {
            console.log('delete id', id);
            const url = `https://vast-plateau-84088.herokuapp.com/user/${id}`;
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
if (loading) {
        return <Loding/>
    }

    
    return (
       <div className="container myitem-cont ">
            <h1 className="mb-5"> <span className="
            ">Available</span>  <span className="text-style">Products</span>: {products.length}</h1>
            
                <div className="row">
            {
            products.map(product =>
                <div className=" col-sm-12 col-lg-4 mb-5" key={product.id} product={product}>
                        <div className="card-container item-card p-3 card"  >
                                <div className="item-ima">
                                    <img className='rounded img-fluid p-3' src={product.picture} alt="" />
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
                            <Link to={`/updateuser/${product._id}`}><button className='btn btn-primary'>Update</button></Link>
                
                            </div>
                        </div>
                </div>)
            }
        </div>

                   

           
        </div>


       
        
        
    );
};

export default Myitem;



