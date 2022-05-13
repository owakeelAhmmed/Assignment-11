import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCard from '../../Hooks/useCard';
import Service from '../Home/Service/Service';




const Myitem = () => {
    const [users, setUsers] = useCard();

   


    
    return (
       <div className="container mt-5 col-sm-12 col-lg-4">
            <h1>Available Users: { users.length }</h1>
            <div className=''>
                {
                    users.map(user => <Service key={user._id} service={user}>
                    
                    
                    
                        
                    
                    
                    </Service>)
                }

 


            </div>
        </div>


       
        
        
    );
};

export default Myitem;



