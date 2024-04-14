import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

function LandNavbar() {
  const [menuToggle, setMenuToggle] = useState(false);

  function toggleMenu() {
    setMenuToggle(prevMenuToggle => !prevMenuToggle);
  }

  function menuX(){
    setMenuToggle(false)
  }




  return (
    <div>
      <nav className="flex justify-between py-4 px-4 text-lg text-white">
        <div className="text-gray-500 hide">
          <ul className="flex landnav">
            <li> 
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="">
          <span>OneForAll</span>
        </div>

        <div className="text-gray-500 ">
          <ul className="flex landnav">
            <li className="px-4 hide">
              <Link to="/signin">Sign In</Link>
            </li>
            <li className="px-4 hide">
              <Link to="/login">Log In</Link>
            </li>
            <li className="px-4 SadwitchMenu">
              <button onClick={toggleMenu}><MenuIcon/></button>
            </li>
          </ul>
        </div>
      </nav>

        <div className="text-gray-500  p-4">
        
          <ul style={menuToggle ? {display : "flex"} : { display : "none"}} className="sidebar landnav flex-col absolute  right-0 top-0 min-h-full bg-slate-300 w-[400px] ">
            <li onClick={menuX} className="MenuX">
             <button ><ClearIcon/></button>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-4">
              <Link to="/signin">Sign In</Link>
            </li>
            <li className="px-4">
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default LandNavbar;
