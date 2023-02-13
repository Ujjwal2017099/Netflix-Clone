import React ,{useState} from 'react'
import avatar from '../../Helper/avatar.png'
import Navbar from '../../Components/Navbar/Navbar'
import './Profile.css'
import Footer from '../../Components/Footer/Footer'
import UserList from '../../Components/UserList/UserList'
import { useParams } from 'react-router-dom'
// import $ from 'jquery'
import axios from 'axios'
import SelectContent from '../../Components/SelectContent/SelectContent'

const Profile = (props) => {
  const usrid = useParams();
  // console.log(usrid);
  const id = usrid.usrid;
  const data = JSON.stringify({_id:id});
  const url = 'http://localhost:4000/profile'
  const options = {
    method : 'POST',
    headers: { 'content-type': 'application/json' },
    data,
    url,
  }
  var user ={
    name : "",
    email : "",
    sex : "",
    age : null,
    list : []
  };
  const fun = async(options)=>{
    // let temp = null;
    return await axios(options);
  }
  let [myList , setMyList] = useState([]);
  let [totalList,setTotalList] = useState([]);
  // $(document).ready(async()=>{
  //   let curr = await fun().then(()=>{
  //     myList = curr.data[0].mylist;
  //     document.getElementById('name').innerText = user.name;
  //     document.getElementById('age').innerText = user.age;
  //     document.getElementById('email').innerText = user.email;
  //     document.getElementById('sex').innerText = user.sex;
  //   });
  //   console.log(curr);
    // user.name = curr.data[0].name;
    // user.email = curr.data[0].email;
    // user.sex = curr.data[0].sex;
    // user.age= curr.data[0].age;
    // user.list = curr.data[0].mylist;
    
  //   // return user.list;
  //   // console.log(myList);
  // })
   fun(options).then((curr)=>{
      // myList.push(curr.data[0].mylist);
      user.name = curr.data[0].name;
      user.email = curr.data[0].email;
      user.sex = curr.data[0].sex;
      user.age= curr.data[0].age;
      user.list = curr.data[0].mylist;
      document.getElementById('name').innerText = user.name;
      document.getElementById('age').innerText = user.age;
      document.getElementById('email').innerText = user.email;
      document.getElementById('sex').innerText = user.sex;
      
      // console.log(myList);
      setMyList(user.list);
    });
    // console.log(myList);
  const style = {
    width : '100%',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    backgroundColor: "#000"
  }
  const editList = ()=>{
    const url = 'http://localhost:4000/content';
    const data = JSON.stringify({});
    const options = {
      method : 'POST',
      headers: { 'content-type': 'application/json' },
      data,
      url,
    }
    fun(options)
      .then((allList)=>{
          let temp = [];
          // console.log(allList.data);
          allList.data.forEach((e)=>{
            temp.push(e.name);
          })
          setTotalList(temp);
        })
        // console.log(totalList);
  }
  
  return (
    <>
    {
      user === null ?  user
      :
      <div style={style}>
        <Navbar user={id}/>
        <div className='main-profile'>
            <div className="profile-user-details noto-sans">
                <div className="profile-user-details-left">
                    <img src={avatar} alt="" />
                </div>
                <div className="profile-user-details-right">
                    <table>
                      <tr>
                        <td>Name</td>
                        <td id='name' ></td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td id='email' ></td>
                      </tr>
                      <tr>
                        <td>Sex</td>
                        <td id='sex' ></td>
                      </tr>
                      <tr>
                        <td>Age</td>
                        <td id='age' ></td>
                      </tr>
                    </table>
                </div>
            </div>
        </div>
        {
          myList.length > 0 ?
          <>
          <div style={{display:'flex',marginBottom:'15px'}}>
            <h2 className='profile-list-h2 noto-sans' >My List</h2> 
            <input type="button" value="Add More" onClick={editList} style={{fontFamily : 'noto sans',backgroundColor:'red',padding:'0px 15px',marginLeft:'15px',color:'#fff',borderRadius:'5px',cursor:'pointer',fontSize:'17px'}} />
  
          </div>
          {
            totalList.length === 0 ?
            <UserList className='profile-user-list noto-sans' myList={myList} userId={id}  ></UserList>
            :<SelectContent className='profile-user-list noto-sans profile-selection' myList={myList} totalList={totalList} ></SelectContent>
          }
          </>
          :<br/>
        }
        <Footer/>
    </div>
    }
    </>
  )
}

export default Profile