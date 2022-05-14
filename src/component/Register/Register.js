import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
// import './Register.css';


const provider = new GoogleAuthProvider();


const Register = () => {
const navigate = useNavigate();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setconfirmPassword] = useState({ value: "", error: "" });

console.log(email);


  const googleAuth = () => {
    


    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      
      });
  };


  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    navigate('/');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  };

   const handleEmail = (event) => {
    const emailInput = event.target.value;
    if (/\S+@\S+\.\S+/.test(emailInput)) {
      setEmail({ value: emailInput, error: "" });
    } else {
      setEmail({ value: "", error: "Please Enter a valid Email" });
    }
  };

  const handlePassword = (event) => {
    const passwordInput = event.target.value;
    if (passwordInput.length < 8) {
      setPassword({ value: "", error: "Password 6" });
      
    } else {
      setPassword({ value: "passwordInput", error: "" });
      
    }
  }

  const handleConfirmPassword = (ConfirmPasswordInput) => {
    setconfirmPassword(ConfirmPasswordInput);
  }

  const resetPassword = () => {

  }

    return (
     <div className='form-container container '>
      <div className='auth-form'>
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input onChange={handleEmail} type='text' name='email'  id='email'  required/>
              </div>
              {
                email?.error && <p className='text-danger'>{email.error}</p>
              }
            
            </div>
            
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input onChange={handlePassword} type='password' name='password' id='password' required/>
            </div>
              {
                password.error && <p className='text-danger'>{password.error}</p>
            }
          </div>
          
             <div className='input-field'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <div className='input-wrapper'>
              <input onBlur={handleConfirmPassword} type='password' name='confirmPassword' id='confirm-password' required/>
            </div>
            </div>


          <button type='submit' className='auth-form-submit'>
            Login
          </button>
        </form>
        <p className='redirect'>
          New to Medi-House?{" "}
          <Link className="nav-link active text-black" to="/login">Login</Link>
          </p>
          <p onClick={resetPassword}>
            Reset Password
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