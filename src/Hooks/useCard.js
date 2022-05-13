import {useState, useEffect } from 'react';

const useCard = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        fetch('http://localhost:4000/user')
        .then(Response => Response.json())
        .then(data => setProducts(data))
        
    }, []);
    
   
    
    return [products, setProducts];
    
};

export default useCard;