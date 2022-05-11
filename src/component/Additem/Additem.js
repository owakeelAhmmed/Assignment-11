import React from 'react';
import '../Additem/Additem.css';




const Additem = () => {

    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value; 

        const user = { name, email};
       
        //send data to the server
        fetch('http://localhost:4000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)

        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Added Successfully')
                event.target.reset();
        })
    }



    return (
        <div className="container add-container d-flex justify-content-center">
            
            
            <form onSubmit={handleAddUser} className="form-container">
                <div className="mb-3">
                  
                    <input type="name" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter your name" required />
                </div>
                <div className="mb-3">
                    
                    <input type="email"  className="form-control" id="email" placeholder="Enter your email" aria-describedby="emailHelp" required />
                </div>
                
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Additem;