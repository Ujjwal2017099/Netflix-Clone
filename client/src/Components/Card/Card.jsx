import React from 'react'
import './Card.css'
// import content from 'https://asset.cloudinary.com/dazwiajhz/e736a6ce50c9df38e61347ec30a7f424'
// import content2 from '../../Helper/content2.png'
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';
import {AdvancedImage} from '@cloudinary/react';
import {Link} from 'react-router-dom'

const Card = ({props,userId,style}) => {
  const myImage = new CloudinaryImage(`${props}`, {cloudName: 'dazwiajhz'}).resize(fill().width(250).height(140));
  // const id = useParams();
  // console.log(id);
  // console.log(props);
  return (
    <>
      <Link to={`/content/${props}+${userId}`}>
        <AdvancedImage cldImg={myImage} style={style} />
      </Link>
    </>
  )
}

export default Card