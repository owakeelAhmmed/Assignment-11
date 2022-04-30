import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(Response => Response.json())
        .then (data => setServices(data))
    },[])




    return (
        <div className="container">
            <div className="row">
                {
                    services.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)

                }
            </div>
            
        </div>
    );
};

export default Services;