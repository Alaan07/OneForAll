import React from 'react'
import { Link } from "react-router-dom";
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function LandFooter() {
  return (
    <>
        <div className="flex flex-col justify-start items-start px-2 mt-4 py-2 bg-gray-900">
            <div className="flex  my-10 mx-4 p-4">
                <div className="flex flex-col  mr-6 w-[40%]">
                    <h2 className="text-white font-bold text-3xl truncate my-2 p-2">OneForAll</h2>
                    <p className="text-gray-400 text-lg my-4 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto earum quos tempora minima quaerat sunt facere, error ab sapiente ipsa?</p>
                </div>
                <div className="flex flex-col  mr-6 w-[20%]">
                    <h2 className="text-white font-bold text-2xl truncate my-2 py-2 px-4">About</h2>
                    <div className="text-gray-400 text-lg my-2 p-2 ">
                        <ul >
                            <li className="m-2 py-2 hover:text-white"><Link to={"/about"}>Company</Link></li>
                            <li className="m-2 py-2 hover:text-white"><Link to={"/about"}>Quality Garantee</Link></li>
                            <li className="m-2 py-2 hover:text-white"><Link to={"/about"}>Store Location</Link></li>
                            <li className="m-2 py-2 hover:text-white"><Link to={"/about"}>Sustainability</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col  mr-6 w-[20%]">
                    <h2 className="text-white font-bold text-2xl truncate my-2 py-2 px-4">Support</h2>
                    <div className="text-gray-400 text-lg my-2 p-2">
                        <ul >
                            <li className="m-2 py-2 hover:text-white"><Link to={"/contact"}>Contact us</Link></li>
                            <li className="m-2 py-2 hover:text-white"><Link to={"/contact"}>Promotion & Sale</Link></li>
                            <li className="m-2 py-2 hover:text-white"><Link to={"/contact"}>Privacy Policy</Link></li>
                            <li className="m-2 py-2 hover:text-white"><Link to={"/contact"}>Terms & Conditions</Link></li>
                            <li className="m-2 py-2 hover:text-white"><Link to={"/contact"}>Track your Orders </Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col  mr-6 w-[20%]">
                    <h2 className="text-white font-bold text-2xl truncate my-2 py-2 px-4">Category</h2>
                    <div className="text-gray-400 text-lg my-2 p-2">
                        <ul >
                            <li className="m-2 py-2 hover:text-white"><Link to={"/Category"}>Men Fassion</Link></li>
                            <li className="m-2 py-2 hover:text-white"><Link to={"/Category"}>Women Fassion</Link></li>
                            <li className="m-2 py-2 hover:text-white"><Link to={"/Category"}>Electronic Gadgets</Link></li>
                            <li className="m-2 py-2 hover:text-white"><Link to={"/Category"}>SmartPhones</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className=" mx-4">
                <div className=" flex my-4 mx-8">
                    <span ><YouTubeIcon className="mx-4 text-xl text-red-500"/></span>
                    <span><FacebookIcon className="mx-4 text-xl text-red-500"/></span>
                    <span><InstagramIcon className="mx-4 text-xl text-red-500"/></span>
                    <span><WhatsAppIcon className="mx-4 text-xl text-red-500"/></span>
                </div>
                <div className="my-4 mx-8">
                    <p className=" text-gray-400 text-lg">© 2024 OneForAll. All Rights are Reserved</p>
                </div>

            </div>
        </div>
    </>
  )
}

export default LandFooter
