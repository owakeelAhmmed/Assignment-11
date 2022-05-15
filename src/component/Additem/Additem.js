import React from 'react';
import '../Additem/Additem.css';




const Additem = () => {

    const handleAddUser = event => {
        event.preventDefault();
        const images = event.target.images.value;
        const name = event.target.name.value;
        const suppliername = event.target.suppliername.value; 
        const price = event.target.price.value; 
        const quantity = event.target.quantity.value; 
        const description = event.target.description.value; 

        const user = { images, name, suppliername, price, quantity, description};
       
        //send data to the server
        fetch('https://vast-plateau-84088.herokuapp.com/user', {
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
            
            

            <div className=''>
                
                <h2 className='mb-5'>
                    Add Your Item....
                </h2>
            
                <form onSubmit={handleAddUser} className="form-container">
                
                <div className="mb-3">
                    <input type="images" className="form-control" id="images" aria-describedby="emailHelp" placeholder="Enter your images url" required />
                </div>
                <div className="mb-3">
                    <input type="name" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter your product name" required />
                </div>
                <div className="mb-3">
                    <input type="suppliername"  className="form-control" id="suppliername" placeholder="Enter your suppliername" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <input type="price"  className="form-control" id="price" placeholder="Enter your price" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <input type="quantity"  className="form-control" id="quantity" placeholder="Enter your Quantity" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <input type="description"  className="form-control" id="description" placeholder="Enter your Description" aria-describedby="emailHelp" required />
                </div>
                
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    );
};

export default Additem;