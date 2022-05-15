import './Home.css'
import img1 from '../images/pik.png';
import { Link } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import CountactUs from '../ContactUs/CountactUs';
import React, { useEffect, useState } from 'react';
import Loding from '../Shared/Loading/Loding';




const Home = () => {
    const [products, setProducts, loading] = useState([]);




    useEffect(() => {
        fetch('https://vast-plateau-84088.herokuapp.com/user')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);
    
    const handleUserDelete = id => {
        console.log('deleted', id);
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
    };

  if (loading) {
        return <Loding/>
    }



    return (
        <section className='container'>
            
            <section className='home-section'>
                    <div className="row ">
                        <div className=" col-sm-12 col-lg-6 text-start mt-5 me-5">
                            <h1 className=""> <span className='text-danger'>Welcome</span> To Our <span className='fw-bold'>MediHouse</span> </h1>
                            <p>Medicine is the field of health and healing. It includes nurses, doctors, and various specialists. It covers diagnosis, treatment, and prevention of disease, medical research, and many other aspects of health. Medicine aims to promote and maintain health and wellbeing.</p>
                            <button className="btn btn-primary rounded-pill">Order Now</button>   
                        </div>
                        <div className=" col-sm-12 col-lg-4">
                            <img className='img-fluid' src={img1} alt="" />
                        </div> 
                    </div>
            </section>
            
            

            <div className="  ">
                <h1 className="mb-5">
                    My <span>Cata</span><span>Log</span>
                </h1>
               
              
                <div className="row">
                    {
                        products.slice(0, 6).map(product =>
                            
                        <div className="home-card-container col-sm-12 col-lg-4" key={product.id} product={product}>
                            <div >
                                <div className="card card-box mb-4" style={{ width: "22rem"}} >
                                        <div className="card-img">
                                            <img className='rounded img-fluid p-3' src={product.picture} alt="" />
                                        </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{ product.name }</h5>
                                        <p className="card-text">Provider: { product.suppliername }</p>
                                        <p className="card-text">Price: { product.price }</p>
                                        <p className="card-text">Quantity: { product.quantity }</p>
                                        <p className="card-text">{ product.description }</p>
                                        </div>
                                    <div className='d-flex justify-content-between p-3'>
                                        <button onClick={() => handleUserDelete(product._id)}className="btn btn-danger">Delete</button>
                                        <Link to={`/updateuser/${product._id}`}><button className='btn btn-success'>Update</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    
                    
                    }
                    </div>
                    
                

                <Link to='/mycatalog'><button className='btn btn-danger rounded-pill'>See All</button></Link>
                
            </div>
            
            <Reviews/>
           <CountactUs/>
        </section>
    );
};

export default Home;