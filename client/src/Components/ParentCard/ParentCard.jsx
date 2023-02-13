import React from 'react'
import Card from '../Card/Card'

const ParentCard = ({props,userId}) => {
  // console.log(props.length);
  return (
    <div>
        {
            props.map((e)=>{
                return <Card userId={userId} props={e} />
            })
        }
    </div>
  )
}

export default ParentCard