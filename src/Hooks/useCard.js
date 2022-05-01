import {useState, useEffect } from 'react';

const useCard = () => {

    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(Response => Response.json())
        .then(data => setCards(data))
        
    }, []);
    
    
    console.log(cards);
    return [cards, setCards];
};

export default useCard;