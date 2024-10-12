import React from 'react'
import coverpic from "../assets/cover-pic.png"
import user1 from "../assets/user-1.png";
import premium from "../assets/premium.png"
import bookmark from "../assets/bookmark.png"
import hash from "../assets/hash.png"
 const ContainerLeft = () => {
  return (
    <div >
        <div className='basis-1/5 self-start w-64 ml-20 border '>
            <div className='bg-white rounded-xl border-2'>

              <img src={coverpic} width="100%" className='-z-10 rounded-t-lg' />
              <div className='py-0 px-0'>
                <img src={user1} className='w-20  p-1 -mt-11 ml-' id="img"/>

                <h1 className='mt-5 text-lg font-bold text-gray-800 text-center'>Ryan Gosling</h1>
                <h3 className='text-center text-sm mt-3 w-44 ml-10'>Tech Enthusiast | Student at Cambridge institute of technology | Web Developer</h3>
                <div className='w-64 relative right-6 mt-4  h-0.5 bg-gray-200 ml-6'></div>
                <ul className=' space-y-1 py-4'>
                  
                  <li className='relative pl-4 w-full text-sm cursor-pointer ' id="post">Profile viewers<span className='ml-28 left-60 text-indigo-500 font-medium cursor-pointer' >52</span></li>
                 
                  <li className='relative pl-4  w-full text-sm cursor-pointer 'id="post" >Post Impressions<span className='ml-24  left-52 text-indigo-500 font-medium cursor-pointer' >200</span></li>
                </ul>
                <div className='w-64 relative right-6   h-0.5 bg-gray-200 ml-6'></div>
                <div className='py-3 space-y-1 cursor-pointer' id="post">
                  <p className='text-sm ml-3'>Unlock Premium tools & insights</p>
                  <div className='flex space-x-2 ml-3'>
                    <img src={premium} className='w-4 h-4'/>
                    <p className='text-xs font-bold'>Try for ₹0</p>
                  </div>
                </div>
                <div className='w-64 relative right-6   h-0.5 bg-gray-200 ml-6'></div>
                <div className='flex space-x-1 py-3 cursor-pointer' id="post">
                   <img src={bookmark} className='ml-2 '/>
                   <p className='text-sm text-black font-semibold'>Saved items</p>
                </div>
              </div>
            </div>
            <div className='bg-white rounded-xl border-2 mt-2'>
               <div className='py-4 space-y-2'>
                <p className='text-sm ml-4'>Recent</p>
                 <div className='flex space-x-2 pl-3 cursor-pointer' id="post">
                  <img src={hash} className='w-5 h-5'/>
                  <p className='text-sm mb-1 font-semibold'>adastra</p>
                 </div>
                 <div className='flex space-x-2 pl-3 cursor-pointer' id="post">
                  <img src={hash} className='w-5 h-5'/>
                  <p className='text-sm mb-1 font-semibold'>freecodecamp</p>
                 </div>
               </div>
               <div className='flex flex-col pl-4 space-y-4'>
                <a href="#" className='text-blue-600 cursor-pointer text-sm font-semibold' id="link">Groups</a>
                <a href="#" className='text-blue-600 cursor-pointer text-sm font-semibold' id="link">Events</a>
               </div>
               <div className='py-5 space-y-2'>
               <a href="#" className='text-blue-600 cursor-pointer text-sm font-semibold pl-4' id="link">Followed Hashtags</a>
               <div className='flex space-x-2 pl-3 cursor-pointer' id="post">
                  <img src={hash} className='w-5 h-5'/>
                  <p className='text-sm mb-1 font-semibold'>adastra</p>
                 </div>
                 <div className='flex space-x-2 pl-3 cursor-pointer' id="post">
                  <img src={hash} className='w-5 h-5'/>
                  <p className='text-sm mb-1 font-semibold'>freecodecamp</p>
                 </div>
                 <div>
                  <p className='pl-7 cursor-pointer' id="post">see all</p>
                 </div>
               </div>
               <div className='w-64 relative right-6   h-0.5 bg-gray-200 ml-6'></div>
               <div className='py-4 text-center cursor-pointer' id="post">
                <h3 className='font-semibold' >Discover More</h3>
               </div>
            </div>
        </div>
        
    </div>
  )
}
export default ContainerLeft;