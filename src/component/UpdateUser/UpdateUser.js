import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateUser.css';
const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        
        fetch(`http://localhost:4000/user/${id}`)
        .then(response => response.json())
        .then(data => setUser(data))
    }, []);




        const handleQuantity = event => {
            event.preventDefault();
            const number = event.target.number.value;
        

            const quantity = { number };
       
            //send data to the server
            fetch(`http://localhost:4000/user/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(quantity)

            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    alert('Added Successfully')
                    event.target.reset();
                })
        }







    return (
        <div className="up-cont container mb-5 ">
            <div className="row justify-content-center">
                <div className="item-card p-3 card" style={{ width: "22rem"}} >
                        <div className="item-ima">
                            <img className='rounded img-fluid p-3' src={user.picture} alt="" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{ user.name }</h5>
                            <p className="card-text">Provider: { user.suppliername }</p>
                            <p className="card-text">Price: { user.price }</p>
                            <p className="card-text">Quantity: { user.quantity }</p>
                            <p className="card-text">{ user.description }</p>
                        </div>
                           
                        <div className='d-flex justify-content-between'>
                                <button className="btn btn-danger">Delivered</button>
                            
                    </div>
                    
                        <div className='d-flex justify-content-between mt-3'>
                        <form onSubmit={handleQuantity} className="form-container">
                            <div className="mb-3">
                             <input type="number" className="form-control" id="number" aria-describedby="emailHelp" placeholder="Enter your name" required />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>





                </div>
            </div>
        </div>
    );
};

export default UpdateUser;