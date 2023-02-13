import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './style.css'
import logo from '../../Helper/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

// import Home from '../Home/Home'

const Login = () => {

  const navigate = useNavigate();
  const [user ,setUser] = useState({
    email : "",
    password : ""
  })
  const getData = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setUser({...user,[name] : value});
  }

  const submitLogin = async (e)=>{
    e.preventDefault();
    const url = 'http://localhost:4000/login';
    const {email,password} = user;
    const data = JSON.stringify({
      email,password
    })
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data,
      url,
    };
    try {
      const res = await axios(options)

      console.log(res);
      if(res.data.length) {navigate(`/${res.data[0]._id}`);}
      else alert('email or password is incorrect');
    } catch (error) {
      console.log(error);
    }
  }

  return (
      <div className='login-signup-main'>
      <div className="login-head">
        <img src={logo} alt="" />
        <Link to='/signup'><button>Sign-Up</button></Link>
      </div>
      <div className="login-body">
        <form method='POST' onSubmit={submitLogin}>
          <h1>Sign In</h1>
          <input type="email" placeholder='Email' value={user.email} onChange={getData} name="email"  />
          <input type="password" placeholder='Password' value={user.password} onChange={getData} name="password"  />
          <button type="submit">Sign-In</button>
        </form>
      </div>
    </div>
  )
}

export default Login