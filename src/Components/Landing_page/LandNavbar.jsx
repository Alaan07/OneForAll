import React from "react";
import { Link } from "react-router-dom";

function LandNavbar() {
  return (
    <div>
      <nav className="flex justify-between py-4 px-4 text-lg text-white">
        <div className="text-gray-500">
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

        <div className="text-gray-500">
          <ul className="flex landnav">
            <li className="px-4">
              <Link to="/signin">Sign In</Link>
            </li>
            <li className="px-4">
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default LandNavbar;
