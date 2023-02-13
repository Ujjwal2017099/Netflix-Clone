import React from 'react'
import ParentCard from '../ParentCard/ParentCard'

const UserList = ({myList,className,userId}) => {
  // console.log(myList.length);
  const list = myList;
  return (
    <div className={className} >
        {/* <h2>My List</h2> */}
        <ParentCard props={list} userId={userId}></ParentCard>
    </div>
  )
}

export default UserList