import React from 'react';
import './Reviews.css';
import img1 from '../images/girl-1.png';
import img2 from '../images/girl-2.png';
import img3 from '../images/girl-3.png';






const Reviews = () => {
    return (
        <div className=" review-cont mb-5">
            <div>
                <h1 className="mb-5">
                    What Our Clients Says
                </h1>
            </div>
            
      <div className="cards-container row row-cols-1 row-cols-md-3  g-4">
                <div className="col col-sm-12 col-lg-4">
                    <div className="card card-style h-100">
                        <div className="card-imgs mx-auto d-block p-1" alt>
                                <img src={img1} className=" card-img-top" alt="..."/>
                            </div>
                        <div className="card-body">
                            <h5 className="card-title">Rosa Adams</h5>
                            <p className="card-text">Had a good experience when I went for purchasing medicine.Good product knowledge, humble, respect the customers.Appreciate the service.</p>
                        </div>
                    
                    </div>
                </div>
                
          
                <div className="col col-sm-12 col-lg-4">
                    <div className="card card-style h-100">
                    <div className="card-imgs mx-auto d-block p-1" alt>
                            <img src={img2} className=" card-img-top" alt="..."/>
                        </div>
                    <div className="card-body">
                        <h5 className="card-title">Annie Sanchez</h5>
                        <p className="card-text">Had a better experience in purchasing medicines with home delivery option, with discount.Well maintained staffs.Appreciate the service.</p>
                    </div>
                    
                    </div>
                </div> 
          

                <div className="col col-sm-12 col-lg-4">
                    <div className="card card-style h-100">
                        <div className="card-imgs mx-auto d-block p-1" alt>
                            <img src={img3} className=" card-img-top" alt="..."/>
                        </div>
                    <div className="card-body">
                        <h5 className="card-title">Marlyn Gilliland</h5>
                        <p className="card-text">Very good customer service, staff's are really concerned about customers,If any medicines are out of stock, staff arranges the stock immediately from nearest branch & deliver medicines to the customer same day home delivery</p>
                    </div>
                   
                    </div>
                </div>
                </div>

       

        </div>
    );
};

export default Reviews;






