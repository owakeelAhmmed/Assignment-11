import './Home.css'
import img1 from '../images/pik.png';
import useCard from '../../Hooks/useCard';
import Service from './Service/Service';
import { Link } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';


const Home = () => {
const [cards, setCards] = useCard();
    
    return (
        <section className='container'>
            
            <section className='home-section'>
                    <div className="row ">
                        <div className=" col-sm-12 col-lg-4 text-start mt-5 me-5">
                            <h1 className=""> <span className='text-danger'>Welcome</span> To Our <span className='fw-bold'>MediHouse</span> </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium soluta voluptatum maxime eligendi molestiae ullam eaque voluptate necessitatibus magnam praesentium.</p>
                            <button className="btn btn-primary rounded-pill">Order Now</button>   
                        </div>
                        <div className=" col-sm-12 col-lg-6">
                            <img className='img-fluid' src={img1} alt="" />
                        </div> 
                    </div>
            </section>
            
            

           
            <div className=" mb-5 ">
                <h1>
                    My <span>Cata</span><span>Log</span>
                </h1>
                    <div className="row ">
                        {
                            cards.slice(0,6).map(card => <Service key={card.id} service={card} />)
                        }
                </div>
                <Link to='/services'><button className='btn btn-danger rounded-pill'>See All</button></Link>
                
             </div>
            <Reviews/>
            
           
        </section>
    );
};

export default Home;