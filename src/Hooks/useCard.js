import {useState, useEffect } from 'react';

const useCard = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        fetch('https://vast-plateau-84088.herokuapp.com/user')
        .then(Response => Response.json())
        .then(data => setProducts(data))
        
    }, []);
    
   
    
    return [products, setProducts];
    
};

export default useCard;