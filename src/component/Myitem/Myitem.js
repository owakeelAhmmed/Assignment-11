import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Myitem = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch('http://localhost:4000/user')
        .then((response) => response.json())
        .then(data => setUsers(data))

     }, []);

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
       <div className="container mt-5 col-sm-12 col-lg-4">
            <h1>Available Users: { users.length }</h1>
            <div>
                {
                    users.map(user => <p
                    key={user._id}
                    >{user.name}
                    
                        <button
                            onClick={() => handleUserDelete(user._id)}
                            className="btn btn-primary">delete</button>
                    
                    </p>)
                }
            </div>
        </div>


//  <div className="card" style={{ width: "18rem"}} >
//                 <img src={picture} alt="" />
//                 <div className="card-body">
//                     <h5 className="card-title">{ name }</h5>
//                     <p className="card-text">Provider: { suppliername }</p>
//                     <p className="card-text">{ description }</p>
//                     <p className="card-text">Price: { price }</p>
//                     <p className="card-text">Quantity: { quantity }</p>
//                     <div className='d-flex justify-content-between'>
//                         <button className='btn btn-primary fw-bold'>Delete</button>
//                         {/* <button className='btn btn-primary fw-bold' > */}
//                             <Link className="btn btn-primary text-white fw-bold nav-link active text-black" to="/update">Update</Link>
                            
                       
//                     </div>
//                 </div>
//             </div>       
        
        
    );
};

export default Myitem;



