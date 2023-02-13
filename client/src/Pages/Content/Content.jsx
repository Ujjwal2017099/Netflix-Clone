import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '../../Components/Card/Card';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import star from '../../Helper/star.png'
const Content = () => {
  const temp = useParams().name;
  let name = "";
  let id = "";
  const getNameAndId = ()=>{
    let f=false;
    for(let i=0;i<temp.length;i++){
      if(f){
        id = id+temp[i];
      }
      else if(temp[i]==='+'){
        f=true;
      }
      else{
        name = name + temp[i];
      }
    }
  }
  getNameAndId();
  console.log(name);
  console.log(id);
  const fun = async (options)=>{
    return await axios(options);
  }
  const data = JSON.stringify({name});
  const url = 'http://localhost:4000/movie';
  const options = {
    method : 'POST',
    headers : {'content-type' : 'application/json'},
    data,
    url
  }
  const [movieData,setMovieData] = useState({});
  fun(options)
  .then((curr)=>{
      setMovieData(curr.data[0]);
      // console.log(movieData);
  })
  const style = {
    width : '500px'
  }
  return (
    <div style={{backgroundColor:'#0c0c0c',color:'#fff',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Navbar user={id}/>
      <div className='noto-sans' style={{display:'flex',alignItems:'center',paddingTop:'35px'}} >
        <Card props={name} userId={id} style={style} />
        
      </div>
        <div className='noto-sans' style={{display:'flex',alignItems:'center'}}>
          <h3 style={{margin:'0px 15px'}}>Rating : {movieData.rating}/5</h3>
          <img src={star} alt="" style={{width:'35px'}} />
        </div>
      <div className='noto-sans' style={{width:'87%',padding:'30px 0px'}}>
        <h3 style={{color:'red',marginBottom:'10px'}}>Description:</h3>
        <h4>
          {movieData.description}
        </h4>
      </div>
      <Footer/>
    </div>
  )
}

export default Content