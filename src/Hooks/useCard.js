import {useState, useEffect } from 'react';

const useCard = () => {

    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/user')
        .then(Response => Response.json())
        .then(data => setCards(data))
        
    }, []);
    
    return [cards, setCards];
};

export default useCard;