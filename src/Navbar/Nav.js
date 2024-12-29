import React from 'react'
import avatar from './avatar.png'
import logo from './jiocinema-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import './Nav.css'
const Nav=()=>{
return (
<div className='navbar'>
    <div className='left-navbar'>
      <div className='logo' > 
        <img src={logo} alt="error"/></div>
        <button>Go Premium</button>
       <div className='short-nav'>
        
         <h4>Home</h4> 
        <h4>Sport</h4>
        <h4>Movies</h4>
        <h4>TV Shows</h4>
        <h4>More <ArrowDropDownIcon/></h4>
        </div>
    </div>
    <div className='right-navbar'>
      <div className="Searchbar">  < SearchIcon className="search-icon"/>
        <input type="text" placeholder='Movies,Shows and More'  /></div>
        <div className="avatar">
            
            <img src={avatar} alt="Avatar" className="avatar-img" />
          </div>
    </div>

</div>
);
}

export default Nav;
