import React from 'react'
import logo from '../../Helper/logo.png'
import './Navbar.css'
import Avatar  from '../Avatar/Avatar'
import { Link} from 'react-router-dom'

const Navbar = ({user}) => {
  // const path = `/${user}`;
  // console.log(path);
  return (
    <div className='nav noto-sans'>
        <div className="nav-left">
            <ul>
                <li><img src={logo} alt=""  /></li>
                <Link to={`/${user}`}><li>Home</li></Link>
                <Link to={`/${user}`}><li>TV Shows</li></Link>
                <Link to={`/${user}`}><li>Movies</li></Link>
                <Link to={`/${user}`}><li>New & Popular</li></Link>
                <Link to={`/${user}`}><li>My List</li></Link>
            </ul>
        </div>
        <div className="nav-right">
            <Link to={`/profile/${user}`} ><Avatar/></Link>
            {/* <NavLink to={path}><Avatar/></NavLink> */}
        </div>
    </div>
  )
}

export default Navbar