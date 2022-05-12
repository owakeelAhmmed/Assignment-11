import React from 'react';
import img1 from '../images/6159289.jpg';
import './ContactUs.css';



const CountactUs = () => {
    return (
        <div className="container contact-us">
            <div>
                <h1>
                    Contact Us
                </h1>
            </div>
            <div className="form-body row">
                <div className="form-box col-md-8">
                    <div className="row">
                        <div className="col-6 col-sm-12 col-lg-6"  >
                             <div className="mb-3">
                                <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="First Name"/>
                            </div>  
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your phone number"/>
                            </div>
                        </div>
                        <div className="col-6 col-sm-12 col-lg-6">
                             <div className="mb-3">
                                <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Last Name"/>
                            </div> 
                               <div className="mb-3">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email"/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-12">
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Write your message" rows="3"></textarea>
                        </div>  
                        <div className="">
                            <button className="btn btn-primary btn-lg mt-3 rounded-pill">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
                <div className="img-contact col-md-4">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CountactUs;