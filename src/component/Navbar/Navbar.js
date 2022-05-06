import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo-1.png'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase.init';





const Navbar = () => {
  const [user, setUser] = useState({});

          useEffect(() => {
              onAuthStateChanged(auth, (user) => {
              if (user) {
              setUser(user);
              } else {
                setUser({});
              }
              });
        },[])

  const handlelogout = () => {
       signOut(auth).then(() => {
       
      }).catch((error) => {
      
      });
     }
  
  
  
  
  


    return (
        <div>
          <nav className=" fixed-top bg-primary nav-header navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid container">
            <Link className="navbar-brand" to="/">
              <img style={{ width:'160px'}} src={logo} alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-black" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-black" to="/services">MyItems</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-black" to="/blogs">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-black" to="/about">About</Link>
              </li>

              
            </ul>
           
            </div>
            <nav className="nav-item">
              {user?.uid ? <button onClick={handlelogout} className=" btn btn-danger"> logout </button> : <Link className="nav-link active text-white" to="/login">Login</Link>}
              </nav>
            <p>{ user?.displayName}</p>
        </div>
    </nav>
        </div>
    );
};

export default Navbar;