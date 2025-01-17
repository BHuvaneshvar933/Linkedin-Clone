import React, { useState } from 'react'
import logo from "../assets/logo.png";
import home from "../assets/home.png";
import network from "../assets/network.png";
import jobs from "../assets/jobs.png";
import message from "../assets/message.png";
import notification from "../assets/notification.png";
import user1 from "../assets/user-1.png";
import search from "../assets/search.png";
import { Link } from "react-router-dom";

 const NavBar = () => {
    const [clicked,setClicked]=useState(false);
  return (
    <div className=' z-50 w-full'>
    <nav className='fixed top-0 w-full z-50 flex items-center bg-white ' id='navb'>
    <div className='flex items-center mr-72 '>
        <a href="#" ><img src={logo} className='w-7 mr-4 block'/></a>
        <div className='bg-gray-200 w-80 rounded-lg flex items-center px-4 py-0'>
            <img src={search} className='w-4'/>
            <input type="text" placeholder='Search' className='w-full bg-transparent p-2 outline-none border-0'/>
        </div>
    </div>
    <div >
        <ul>
            <Link to="/">
            <li className='inline-block list-none ' ><a href="#" className='flex items-center text-sm mx-2 my-1 pr-1'onClick={()=>setClicked(true)} ><img src={home} className='w-8'/><span>Home</span></a></li>
            </Link>
            <Link to="/my-network">
            <li className='inline-block list-none'><a href="#" className='flex items-center text-sm mx-2 my-1 pr-1'><img src={network} className='w-8'/><span>My Network</span></a></li>
            </Link>
            <Link to="/jobs">
            <li className='inline-block list-none'><a href="#" className='flex items-center text-sm mx-2 my-1 pr-1'><img src={jobs} className='w-8'/><span>Jobs</span></a></li>
            </Link>
            <Link to="/messaging">
            <li className='inline-block list-none'><a href="#" className='flex items-center text-sm mx-2 my-1 pr-1'><img src={message} className='w-8'/><span>Messaging</span></a></li>
            </Link>
            <Link to="/notifications">
            <li className='inline-block list-none'><a href="#" className='flex items-center text-sm mx-2 my-1 pr-1'><img src={notification} className='w-8'/><span>Notifications</span></a></li>
            </Link>
        </ul>
      
    </div>
    
    <div className='ml-5'>
        <div className='relative' id="online"></div>
        <img src={user1} className='w-14 cursor-pointer relative' id="user"/>
    </div>
    </nav>
    </div>
  )
}
export default NavBar;