import { useState } from 'react';
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {

  const [currState, setCurrentState] = useState("Login");

  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
        </div>
        <div className="login-popup-inputs">
          {
            currState === "Sign Up"? // sign up
              <> 
                <input type="text" placeholder='Enter your name' required/>
                <input type="email" placeholder='Enter your email' required/>
                <input type="password" placeholder='Enter your password' required/>
                <input type="password" placeholder='Confirm Password' required/>
              </>
              : // login
              <>
                <input type="email" placeholder='Enter your email' required/>
                <input type="password" placeholder='Enter your password' required/>
              </>
          }
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {
          currState === "Login" ? 
          <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Sign Up here</span></p> : 
          <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
