import React,{useEffect,useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import './Home.css'
// import ParentCard from '../../Components/ParentCard/ParentCard';
import Footer from '../../Components/Footer/Footer';
import UserList from '../../Components/UserList/UserList';
import axios from 'axios';

const Home = (props) => {
  let user = useParams();
  // console.log(user);
  const navigate = useNavigate();
  useEffect(()=>{
    if(user===null){
      navigate('/login');
    }
  })
  const data = JSON.stringify({_id:user.id});
  const url = 'http://localhost:4000/profile'
  const options = {
    method : 'POST',
    headers: { 'content-type': 'application/json' },
    data,
    url,
  }
  const url2 = 'http://localhost:4000/content'
  const data2 = JSON.stringify({});
  const options2 = {
    method : 'POST',
    headers: { 'content-type': 'application/json' },
    data:data2,
    url:url2,
  }
  let [myList,setMyList] = useState([]);
  let [totalList,setTotalList] = useState([]);
  const fun = async (options)=>{
      return await axios(options);
  }
  fun(options).then((curr)=>{
    // myList.push(curr.data[0].mylist);
    setMyList(curr.data[0].mylist);
    // console.log(myList);
  })
  fun(options2).then((curr)=>{
    const temp = [];
    curr.data.forEach((e)=>{
      temp.push(e.name);
    })
    // console.log(temp);
    setTotalList(temp);
  })
  // console.log(myList.length);
  return (
    <div className='home-main'>
      <Navbar user={user.id} />
      <div className="home-content my-list noto-sans">
        {
          myList.length > 0?
          <>
           <h2>My List</h2>
          <UserList className='profile-user-list' myList={myList} userId={user.id} /></> :
          <br/>
        }
      </div>
      <div className="home-content my-list noto-sans">
        <h2>Popular on Netflix</h2>
        <UserList className='profile-user-list' myList={totalList} userId={user.id} />
      </div>
      <Footer/>
    </div>
  )
}

export default Home