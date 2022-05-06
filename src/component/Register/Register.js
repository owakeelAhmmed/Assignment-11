import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';



const provider = new GoogleAuthProvider();











const Register = () => {

const navigate = useNavigate();


  const googleAuth = () => {
    

    signInWithPopup(auth, provider)
      .then((result) => {
       
        
        const user = result.user;
        navigate('/');
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      
      });
  };



    return (
           <div className='auth-form-container '>
      <div className='auth-form'>
        <h1>Register</h1>
        <form >
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input type='text' name='email'  id='email' />
            </div>
            
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input
                type='password'
                name='password'
                id='password'
              />
            </div>
           
          </div>
          <button type='submit' className='auth-form-submit'>
            Login
          </button>
        </form>
        <p className='redirect'>
          New to Tech Geeks?{" "}
          <Link className="nav-link active text-black" to="/login">Login</Link>
        </p>
        <div className='horizontal-divider'>
          <div className='line-left' />
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className='input-wrapper'>
          <button className='google-auth' onClick={googleAuth} >
            
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};


export default Register;