import React from 'react';
import useCard from '../../Hooks/useCard';
import Service from '../Home/Service/Service';
import Updatecard from './Updatecard';






const Update = () => {
    const [cards, setCards] = useCard();


    return (
        <div className=" serv-section container">
            <div className="row">
                {
                    cards.map(service => <Updatecard
                    key={service.id}
                    service={service}
                    ></Updatecard>)

                }
            </div>
            
        </div>
    );
};

export default Update;