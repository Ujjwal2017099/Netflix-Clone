import React, { useState } from 'react'
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';
import {AdvancedImage} from '@cloudinary/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const SelectContent = ({className,myList,totalList}) => {
    let [list,setList] = useState(myList);
    // console.log(myList);
    // console.log(totalList);
    // const img = new CloudinaryImage(`${props}`, {cloudName: 'dazwiajhz'}).resize(fill().width(250).height(140));
    let img= [];
    const addImg = ()=>{
        // console.log('hello');
        for(let j=0;j<totalList.length;j++){
            let f = false;
            for(let i=0;i<myList.length;i++){
                if(myList[i]===totalList[j]){
                    f=true;
                    break;
                }
            }
            if(f) continue;
            img.push({name:totalList[j],link : new CloudinaryImage(`${totalList[j]}`, {cloudName: 'dazwiajhz'}).resize(fill().width(250).height(140))});
        }
    }
    addImg();
    // console.log(img.length);
    const id = useParams();
    // console.log(id.usrid);
    const Add = (name)=>{
        list.push(name);
        setList(list);
        // console.log(list);
        const fun = async (options)=>{
            return await axios(options);
        }
        
        const data = JSON.stringify({_id:id.usrid,mylist:list});
        const url = 'http://localhost:4000/profile'
        const options = {
          method : 'PATCH',
          headers: { 'content-type': 'application/json' },
          data,
          url,
        }
        fun(options).then(()=>{console.log('done')})
    }
  return (
    <div className={className}>
        {
            img.map((e)=>{
                return <div id={e.name} style={{display:"flex",alignItems:'center',marginBottom:'10px'}}> <AdvancedImage cldImg={e.link} style={{width:'250px'}} /> <input type="button" value="Add" onClick={()=>{Add(e.name)}} style={{padding:'5px 10px',fontFamily:'noto sans',fontWeight:'600',color:'#fff',backgroundColor:'red',borderRadius:'5px'}} /> </div>
            })
        }
    </div>
  )
}

export default SelectContent