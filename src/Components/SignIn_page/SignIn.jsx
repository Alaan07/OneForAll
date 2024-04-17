import React from 'react'
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function SignIn() {
  return (
    <div>
      <div className=" grid place-items-center w-screen h-screen bg-gradient-to-r from-indigo-300 via-purple-200 to-pink-300 ...">
      <div className="bg-gray-400 w-3/4 h-[90%] flex rounded-xl">
        <div className="LoginMainpart m-5 p-5 w-[50%] flex flex-col justify-center">
          <div className="flex flex-col items-center mb-1">
            <h1 className="font-bold text-black text-4xl p-2">Register</h1>
          </div>
          <div className="my-4 w-full">
            <form method="post" className="flex flex-col items-center">
            <input
                type="text"
                placeholder="Username"
                className="rounded-xl py-2 px-4 w-[70%] mb-2 h-12 border-none"
              />
              <input
                type="text"
                placeholder="Email"
                className="rounded-xl py-2 px-4 w-[70%] mb-2 h-12 border-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="rounded-xl py-2 px-4 w-[70%] mb-2 h-12 border-none"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="rounded-xl py-2 px-4 w-[70%] mb-2 h-12 border-none"
              />
              <button className="buttonAnimaton rounded-xl py-2 px-4 w-[70%] mb-3 h-12 bg-gray-900 text-white font-bold text-lg">
                Sign In
              </button>
            </form>
            <div className="flex flex-col items-center mt-2">
              <p>
                or <span className="text-black text-lg">Continue</span> with
              </p>

              <div className="flex justify-evenly w-full my-2">
                <div className=" bg-gray-300 rounded-lg w-12 h-12 grid place-items-center hover:bg-gray-900 hover:text-white">
                  <GoogleIcon />
                </div>
                <div className=" bg-gray-300 rounded-lg w-12 h-12 grid place-items-center hover:bg-gray-900 hover:text-white">
                  <XIcon />
                </div>
                <div className=" bg-gray-300 rounded-lg w-12 h-12 grid place-items-center hover:bg-gray-900 hover:text-white">
                  <InstagramIcon />
                </div>
              </div>

              <p className="my-2">
                Aldready have an acount? 
                <Link
                  to="/login"
                  className="font-bold text-gray-800 hover:text-white px-2"
                >
                  Log In
                </Link>
              </p>
              <p className="my-2 text-center">
                By clicking the above login, you agree to our{" "}
                <span className=" underline">Terms & Tonditions.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="LoginSidepart bg-slate-500 rounded-xl m-5 p-4 w-[50%]">
          <h1 className="font-bold text-xl">
            <Link to="/">
              <ArrowBackIcon />
            </Link>
          </h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          quisquam, amet quia expedita molestiae praesentium sint hic quaerat
          id, explicabo recusandae debitis cumque officia libero ex maiores,
          voluptates saepe quae veritatis aliquam dolor numquam. Aperiam, ipsum,
          corporis, officia neque nemo natus asperiores dolor at reprehenderit
          doloremque fugiat odio recusandae! Esse?
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignIn
