import { useContext, useState } from 'react';
import './LoginPopup.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
const LoginPopup = ({setShowLogin}) => {
  const {url, setToken} = useContext(StoreContext);

  const [currState, setCurrentState] = useState("Login");

  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData(data => ({...data, [name]: value}));
  }

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if(currState === "Sign Up"){
      newUrl += '/api/user/register';
    }
    else{
      newUrl += '/api/user/login';
    }
    
    const response = await axios.post(newUrl, data);

    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      setShowLogin(false);
    } else{
      alert(response.data.message);
    }

  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">

        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
        </div>

        <div className="login-popup-inputs">
          {
            currState === "Sign Up"? // sign up
              <> 
                <input onChange={onChangeHandler} name='name' value={data.name} type="text" placeholder='Enter your name' required/>
                <input onChange={onChangeHandler} name='email' value={data.email} type="email" placeholder='Enter your email' required/>
                <input onChange={onChangeHandler} name='password' value={data.password} type="password" placeholder='Enter your password' required/>
              </>
              : // login
              <>
                <input onChange={onChangeHandler} name='email' value={data.email} type="email" placeholder='Enter your email' required/>
                <input onChange={onChangeHandler} name='password' value={data.password} type="password" placeholder='Enter your password' required/>
              </>
          }
        </div>

        <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>

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
