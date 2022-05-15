import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './Deliverproduct.css';



const Deliverproduct = () => {
     const { id } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        
        fetch(`https://vast-plateau-84088.herokuapp.com/user/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data))
    }, []);




    const handleDeliverOder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            product: product.name,
            productId: product.id,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        axios.post('https://vast-plateau-84088.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                
                    alert('Order Successfully');
                event.target.reset();
           
        })
    }



    return (


        <div className="deliver-container container">

            <h1>Product Name:{ product.id}</h1>
            <div class="row">
                <div class="col-6">
                    
                    <div className=" item-card p-3 card"  >
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

                    </div>
                </div>

                <div class="col-6">
                    
                         <div className=' mt-3'>
                        <form onSubmit={handleDeliverOder} className="form-container">
                            <div className="mb-3">
                             <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter your name" value={user.displayName} disabled required />
                            </div>
                            <div className="mb-3">
                             <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email" value={user.email} disabled required />
                            </div>
                            <div className="mb-3">
                            <div className="mb-3">
                             <input type="text" className="form-control" id="product" aria-describedby="emailHelp" placeholder="Enter your product" value={ product.name } disabled required />
                            </div>
                             <input type="text" className="form-control" id="address" aria-describedby="emailHelp" placeholder="Enter your address" required />
                            </div>
                            <div className="mb-3">
                             <input type="text" className="form-control" id="phone" aria-describedby="emailHelp" placeholder="Enter your phone number" required />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    
                </div>
        </div>
</div>



        
    );
};

export default Deliverproduct;