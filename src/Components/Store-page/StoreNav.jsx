import React, {useState} from 'react'
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';


function StoreNav() {
    const [menuToggle, setMenuToggle] = useState(false);
    const [isSearchVisible, setSearchVisible] = useState(false);
    const [isCatVisible, setCatVisible] = useState(false);

  const handleMouseOver = () => {
    setSearchVisible(true);
  };

  const handleMouseOut = () => {
    setSearchVisible(false);
  };

 const visibleCat =() =>{
    setCatVisible((preisCatVisible) => ! preisCatVisible);
 }

  function toggleMenu() {
    setMenuToggle((prevMenuToggle) => !prevMenuToggle);
  }

  function menuX() {
    setMenuToggle(false);
  }
  return (
    <div className="bg-gray-900">
      <nav className="flex justify-between py-4 px-4 text-lg text-white bg-transparent">
        <div className="text-gray-500 hide">
          <ul className="flex landnav">
          <li>
              <Link to="/">land</Link>
            </li>
            <li>
              <Link to="/store">Home</Link>
            </li>
            <li>
                <div className="relative categorydrop " onClick={visibleCat}>
                  <p>Category</p>
                  {console.log(isCatVisible)}
                </div>
                <div style={{display: isCatVisible ? "inline" : "none"}} className="dropdownmenu absolute top-15 text-gray-500 bg-gray-900 z-10 p-4">
                        <ul>
                            <li>
                                <p>Camera</p>
                            </li>
                            <li>
                                <p>Fashion</p>
                            </li>
                            <li>
                                <p>SmartPhone</p>
                            </li>
                            <li>
                                <p>Computer</p>
                            </li>
                            <li>
                                <p>TV</p>
                            </li>
                            <li>
                                <p>Furniture</p>
                            </li>
                        </ul>
                    </div>
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
            <li className="border-2 border-gray-500 hover:border-white rounded-full mx-2 ">
              <div className="flex searchbtn" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div>
                    <input style={{display: isSearchVisible ? "inline" : "none"}} className="bg-transparent w-40 border-none"  type="text" placeholder='Search'/>
                </div>
                <button>
                <SearchIcon/></button>
              </div>
            </li>
            <li className="hide border-2 border-gray-500 hover:border-white rounded-full mx-2 ">
              <PersonIcon/>
            </li>  
            <li className="hide border-2 border-gray-500 hover:border-white rounded-full mx-2 ">
            <Link to="/cart"><ShoppingBagIcon/></Link>
            </li>
            <li className="px-4 SadwitchMenu">
              <button onClick={toggleMenu}>
                <MenuIcon />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="text-gray-500">
        <ul
          // style={menuToggle ? { display: "flex"} : { display: "none"}}  just in case if the trasformations doesnt work
          style={menuToggle ? {transform: "translateX(0)", transitionDuration:".3s" } : {transform: "translateX(400px)", transitionDuration:".3s" }}
          className="sidebar landnav flex-col absolute  right-0 top-0 bg-slate-300 w-[400px] h-screen"
        >
          <li onClick={menuX} className="MenuX">
            <button className="absolute right-8">
              <ClearIcon />
            </button>
          </li>
          <li>
            <Link to="/store">Home</Link>
          </li>
          <li>
                <div className="relative categorydrop " onClick={visibleCat}>
                  <p>Category</p>
                  {console.log(isCatVisible)}
                </div>
                <div style={{display: isCatVisible ? "inline" : "none"}} className="text-gray-500 ">
                        <ul>
                            <li>
                                <p>Camera</p>
                            </li>
                            <li>
                                <p>Fashion</p>
                            </li>
                            <li>
                                <p>SmartPhone</p>
                            </li>
                            <li>
                                <p>Computer</p>
                            </li>
                            <li>
                                <p>TV</p>
                            </li>
                            <li>
                                <p>Furniture</p>
                            </li>
                        </ul>
                    </div>
            </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StoreNav
