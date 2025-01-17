import React from 'react'
import info from '../assets/info.png'
import queens from "../assets/queens.svg"
import pinpoint from "../assets/pinpoint.svg"
import crossclimb from "../assets/crossclimb.svg"
import logotext from "../assets/logotext.svg"
const ContainerRight = () => {
  return (
    <div className=' basis-1/4 self-start '>
      <div className='bg-white rounded-xl '>
        <div className='border-2'>
        <div className='flex py-3 space-x-36 pl-6  '>
          <h2 className='text-xl font-semibold text-black'>Trending Now</h2>
          <img src={info} className='w-5 h-5 mt-1'/>
        </div>
        <div className='pl-6 space-y-3 pb-7'>
          <h3 className='text-base '>Top stories</h3>
          <div className='space-y-1'>
             <p className='text-black font-semibold text-sm'>India top 20 startups</p>
             <p className='text-xs'>6d ago • 45,497 readers</p>
          </div>
          <div>
            <p className='text-black font-semibold text-sm'>IT hiring</p>
            <p className='text-xs'>6d ago • 25,001 readers</p>
          </div>
          <div>
            <p className='text-black font-semibold text-sm'>Gujarat semiconductor hub</p>
            <p className='text-xs'>6d ago • 17,655 readers</p>
          </div>
          <div>
            <p className='text-black font-semibold text-sm'>Wedding business</p>
            <p className='text-xs'>6d ago • 9,037 readers</p>
          </div>
          <div>
          <p className='text-black font-semibold text-sm'>Farmers and climate change</p>
          <p className='text-xs'>6d ago • 6,992 readers</p>
          </div>
      </div>
      <div className='pl-6 space-y-2 pb-5'>
        <h2>Play today’s puzzle games</h2>
        <div className='space-y-4'>
        <div className='flex space-x-2 cursor-pointer ' id="post">
           <img src={queens}/>
           <div className='-space-y-1'>
            <p className='text-black font-semibold'>Queens</p>
            <p className='mt-0 text-xs '>Crown eash region</p>
           </div>
        </div>
        <div className='flex space-x-2 cursor-pointer ' id="post">
           <img src={pinpoint}/>
           <div className='-space-y-1'>
            <p className='text-black font-semibold'>Pinpoint</p>
            <p className='mt-0 text-xs '>Guess the category</p>
           </div>
        </div>
        <div className='flex space-x-2 cursor-pointer ' id="post">
           <img src={crossclimb}/>
           <div className='-space-y-1'>
            <p className='text-black font-semibold'>Crossclimb</p>
            <p className='mt-0 text-xs '>Unlock a trivia ladder</p>
           </div>
        </div>
        </div>
      </div>
      </div>
      <div className='text-xs  pl-16 py-2  flex-wrap space-y-3 pt-7' id="footer">
        <div className='space-x-4 flex '>
        <p>About</p>
        <p>Accessibility</p>
        <p>Help Center</p></div>
        <div className='flex space-x-4 ml-4'>
        <p>Privacy & Terms</p>
        <p>Ad Choices</p></div>
        
        <div className='flex space-x-10'>
        <p>Advertising</p>
        <p>Business Services</p></div>
        <div className='flex space-x-6 ml-4'>
        <p>Get the linkedin app</p>
        <p>more</p></div>
       <div className='flex space-x-1 -ml-3 mt-7'>
        <img src={logotext}/>
        <p > LinkedIn Corporation © 2024</p>
       </div>
      </div>
    </div>
    </div>
  )
}
export default ContainerRight;