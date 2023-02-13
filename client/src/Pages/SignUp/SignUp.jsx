import React,{ useState } from 'react'
import './style.css'
import logo from '../../Helper/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

  const [user ,setUser] = useState({
    email : "",
    password : "",
    name : "",
    sex : "",
    age : null
  })
  const getUserData = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setUser({...user, [name] : value});
  }
  const submitRegistration = async (e)=>{
    e.preventDefault();
    const {email , password,name,sex,age} = user;
    console.log(user);

    const url = 'http://localhost:4000/signup';
    const data = JSON.stringify ({
      email ,password,name,sex,age
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
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='login-signup-main'>
      <div className="signup-head">
        <img src={logo} alt="" />
        <Link to='/login'><button>Login</button></Link>
      </div>
      <div className="signup-body">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <form method='POST'>
          <span>
            <input type="email" placeholder='Email' value={user.email} onChange={getUserData} name="email" id="" />
            <input type="password" placeholder='Password' value={user.password} onChange={getUserData} name="password" id="" />
          </span>
          <span>
            <input type="text" placeholder='Name' value={user.name} onChange={getUserData} name="name" id="" />
            <input type="text" placeholder='Sex' value={user.sex} onChange={getUserData} name="sex" id="" />
            <input type="number" placeholder='Age' value={user.age} onChange={getUserData} name="age" id="" />
          </span>
          <button type="submit" onClick={submitRegistration}>GET STARTED</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp