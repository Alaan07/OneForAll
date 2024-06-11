import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DeleteIcon from '@mui/icons-material/Delete';

function StoreNav() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isCatVisible, setCatVisible] = useState(false);
  const [CartMenu, setCartMenu] = useState(false);

  const handleMouseOver = () => {
    setSearchVisible(true);
  };

  const handleMouseOut = () => {
    setSearchVisible(false);
  };

  const ToggleCart = () => {
    setCartMenu((preCartMenu) => !preCartMenu);
  };

  const visibleCat = () => {
    setCatVisible((preisCatVisible) => !preisCatVisible);
  };

  function toggleMenu() {
    setMenuToggle((prevMenuToggle) => !prevMenuToggle);
  }

  function menuX() {
    setMenuToggle(false);
  }

  function cartmenuX() {
    setCartMenu(false);
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
              </div>
              <div
                style={{ display: isCatVisible ? "inline" : "none" }}
                className="dropdownmenu absolute top-15 text-gray-500 bg-gray-900 z-10 p-4"
              >
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
              <div
                className="flex searchbtn"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <div>
                  <input
                    style={{ display: isSearchVisible ? "inline" : "none" }}
                    className="bg-transparent w-40 border-none"
                    type="text"
                    placeholder="Search"
                  />
                </div>
                <button>
                  <SearchIcon />
                </button>
              </div>
            </li>
            <li className="hide border-2 border-gray-500 hover:border-white rounded-full mx-2 ">
              <PersonIcon />
            </li>
            <li
              className="border-2 border-gray-500 hover:border-white rounded-full mx-2"
              onClick={ToggleCart}
            >
              <ShoppingBagIcon />
              {console.log("fromcart", CartMenu)}
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
          style={
            menuToggle
              ? { transform: "translateX(0)", transitionDuration: ".3s" }
              : { transform: "translateX(400px)", transitionDuration: ".3s" }
          }
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
            </div>
            <div
              style={{ display: isCatVisible ? "inline" : "none" }}
              className="text-gray-500 "
            >
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

      <div className="text-gray-500">
        <ul
          style={
            CartMenu
              ? { transform: "translateX(0)", transitionDuration: ".3s" }
              : { transform: "translateX(400px)", transitionDuration: ".3s" }
          }
          className="sidebar landnav flex-col absolute  right-0 top-0 bg-slate-300 w-[400px] h-screen"
        >
          <li onClick={cartmenuX} className="MenuX">
            <button className="absolute right-8">
              <ClearIcon />
            </button>
          </li>
          <div className="flex border-b-2 border-b-gray-400 mx-4">
            <div className="flex w-[20%] ml-8 my-8">
              <img
                src="/public/image/profilepic/The-6-Different-Types-Of-Face-Shapes.jpg"
                alt="pic"
                className="object-cover h-[60px] w-[60px] rounded-full"
              />
            </div>
            <div className="flex justify-center flex-col w-[60%] ml-2 my-8">
              <h2 className="font-bold text-black text-2xl">Ravi Sing</h2>
              <p className="text-lg">Example87@gmail.com</p>
            </div>
          </div>



          <div className="itemsection relative flex flex-col items-center my-2 mx-2 h-[300px]">
            
          
          {/* ******************************************************* */}
            <div className="flex  mx-4 shadow-sm w-full hover:shadow-lg">
              <div className="flex w-[30%] ml-8 my-8 items-center justify-center p-2 shadow-lg mr-4">
                <img
                  src="/public/image/landing_banner_image/mpuse.png"
                  alt="pic"
                  className="object-cover h-[80px] w-[80px] "
                />
              </div>
              <div className="flex justify-center flex-col w-[60%] ml-2 my-8">
                <h2 className="font-bold text-black text-xl">Mouse</h2>
                <p className="text-lg my-1">
                  <span>
                    <CurrencyRupeeIcon />
                  </span>
                  500.
                </p>
                <div className=" flex justify-between my-1">
                  <input type="number" placeholder="1" className=" w-14 text-center mr-2"/>
                  <span className=" hover:text-black"><DeleteIcon/></span>
                </div>
              </div>
            </div>
            {/* ******************************************************************* */}

            <div className="flex  mx-4 shadow-sm w-full hover:shadow-lg">
              <div className="flex w-[30%] ml-8 my-8 items-center justify-center p-2 shadow-lg mr-4">
                <img
                  src="/public/image/landing_banner_image/mpuse.png"
                  alt="pic"
                  className="object-cover h-[80px] w-[80px] "
                />
              </div>
              <div className="flex justify-center flex-col w-[60%] ml-2 my-8">
                <h2 className="font-bold text-black text-xl">Mouse</h2>
                <p className="text-lg my-1">
                  <span>
                    <CurrencyRupeeIcon />
                  </span>
                  500.
                </p>
                <div className=" flex justify-between my-1">
                  <input type="number" placeholder="1" className=" w-14 text-center mr-2"/>
                  <span className=" hover:text-black"><DeleteIcon/></span>
                </div>
              </div>
            </div>
            <div className="flex  mx-4 shadow-sm w-full hover:shadow-lg">
              <div className="flex w-[30%] ml-8 my-8 items-center justify-center p-2 shadow-lg mr-4">
                <img
                  src="/public/image/landing_banner_image/mpuse.png"
                  alt="pic"
                  className="object-cover h-[80px] w-[80px] "
                />
              </div>
              <div className="flex justify-center flex-col w-[60%] ml-2 my-8">
                <h2 className="font-bold text-black text-xl">Mouse</h2>
                <p className="text-lg my-1">
                  <span>
                    <CurrencyRupeeIcon />
                  </span>
                  500.
                </p>
                <div className=" flex justify-between my-1">
                  <input type="number" placeholder="1" className=" w-14 text-center mr-2"/>
                  <span className=" hover:text-black"><DeleteIcon/></span>
                </div>
              </div>
            </div>
            <div className="flex  mx-4 shadow-sm w-full hover:shadow-lg">
              <div className="flex w-[30%] ml-8 my-8 items-center justify-center p-2 shadow-lg mr-4">
                <img
                  src="/public/image/landing_banner_image/mpuse.png"
                  alt="pic"
                  className="object-cover h-[80px] w-[80px] "
                />
              </div>
              <div className="flex justify-center flex-col w-[60%] ml-2 my-8">
                <h2 className="font-bold text-black text-xl">Mouse</h2>
                <p className="text-lg my-1">
                  <span>
                    <CurrencyRupeeIcon />
                  </span>
                  500.
                </p>
                <div className=" flex justify-between my-1">
                  <input type="number" placeholder="1" className=" w-14 text-center mr-2"/>
                  <span className=" hover:text-black"><DeleteIcon/></span>
                </div>
              </div>
            </div>
            <div className="flex  mx-4 shadow-sm w-full hover:shadow-lg">
              <div className="flex w-[30%] ml-8 my-8 items-center justify-center p-2 shadow-lg mr-4">
                <img
                  src="/public/image/landing_banner_image/mpuse.png"
                  alt="pic"
                  className="object-cover h-[80px] w-[80px] "
                />
              </div>
              <div className="flex justify-center flex-col w-[60%] ml-2 my-8">
                <h2 className="font-bold text-black text-xl">Mouse</h2>
                <p className="text-lg my-1">
                  <span>
                    <CurrencyRupeeIcon />
                  </span>
                  500.
                </p>
                <div className=" flex justify-between my-1">
                  <input type="number" placeholder="1" className=" w-14 text-center mr-2"/>
                  <span className=" hover:text-black"><DeleteIcon/></span>
                </div>
              </div>
            </div>
           
         
 


          </div>




          <div className="calculations fixed bottom-0 left-0 right-0 flex flex-col justify-center items-center mx-2 border-t-2 border-t-gray-500 ">

            <div className="flex justify-between my-2 w-full ">
                <h2 className=" text-red-600 font-bold text-lg">Total Charges :</h2>
                <p className="text-lg"><span><CurrencyRupeeIcon /></span> 2000.</p>
            </div>
            <div className="flex justify-between my-2 w-full">
                <h2 className=" text-red-600 font-bold text-lg">Delivery Charges :</h2>
                <p className="text-lg"><span><CurrencyRupeeIcon /></span> 300.</p>
            </div>
            <div className="flex justify-between my-2 w-full">
                <h2 className=" text-red-600 font-bold text-lg">Total Discount :</h2>
                <p className="text-lg"><span><CurrencyRupeeIcon /></span> 100.</p>
            </div>
            <div className="flex justify-between my-2 w-full mt-10 ">
                <h2 className=" text-red-600 font-bold text-lg">Total  :</h2>
                <p className="text-lg"><span><CurrencyRupeeIcon /></span> 2200.</p>
            </div>

            <button className=" text-lg my-2 bg-orange-500 w-full px-2 py-2 rounded-lg hover:text-black hover:font-bold">Buy Now</button>

          </div>


        </ul>
      </div>
    </div>
  );
}

export default StoreNav;
