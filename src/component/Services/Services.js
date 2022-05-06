import useCard from '../../Hooks/useCard';
import Service from '../Home/Service/Service';
import './Services.css';

const Services = () => {
    const [cards, setCards] = useCard();




    return (
        <div className=" serv-section container">
            <div className="row">
                {
                    cards.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)

                }
            </div>
            
        </div>
    );
};

export default Services;