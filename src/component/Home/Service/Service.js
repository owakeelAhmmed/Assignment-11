import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCard from '../../../Hooks/useCard';


const Service = ({ service }) => {
    const {name, price, picture, description, quantity, suppliername} = service;
    const [users, setUsers] = useCard();



const handleUserDelete = id => {
        
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
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                   }
                })
        }
     }
    


    return (
        <div className="mt-5 col-sm-12 col-lg-4">
            <div className="card" style={{ width: "18rem"}} >
                <img src={picture} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    <p className="card-text">Provider: { suppliername }</p>
                    <p className="card-text">{ description }</p>
                    <p className="card-text">Price: { price }</p>
                    <p className="card-text">Quantity: { quantity }</p>
                    <div className='d-flex justify-content-between'>
                    <button onClick={() => handleUserDelete(users._id)}className="btn btn-primary">delete</button>
                        <Link to={`/updateuser/${users._id}`}><button>Update</button></Link>
                                  
                            
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;