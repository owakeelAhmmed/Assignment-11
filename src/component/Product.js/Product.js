import React from 'react';
import useCard from '../../Hooks/useCard';
import Mycatalog from '../Mycatalog/Mycatalog';





const Product = () => {
    const [products, setProducts] = useCard();
console.log(products);


    return (
        <div className='row'>
            {
                products.map(product => <Mycatalog
                key={product.id}

                product={product}    
                ></Mycatalog>)
            }
        </div>
    );
};

export default Product;