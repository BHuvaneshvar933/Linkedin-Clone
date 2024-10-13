import React,{useState} from 'react'
import user1 from "../assets/user-1.png";
import image from "../assets/image.png"
import calender from "../assets/calender.png"
import article from "../assets/article.png"
import { posts } from '../constants';
import x from "../assets/x.png"
import dots from "../assets/dots.png"
import like from "../assets/like.png"
import slike from "../assets/slike.svg"
import repost from "../assets/repost.png"
import comment from "../assets/comment.png"
import send from "../assets/send.png"
import {ThumbsUp} from "lucide-react"
const ContainerMain = () => {
  const [expandedPosts, setExpandedPosts] = useState({});
  const [clicked,setClicked]=useState({});
  const handleMore = (index) => {
    setExpandedPosts((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the current post
    }));
  };
  const handleButtons=(index)=>{
    
    setClicked((prevState)=>({
      ...prevState,
      [index]:!prevState[index], //Toggle the buttons
      
    }))
    
  } 
  return (
    
    <div className='relative right-5 basis-5/12 ml-10' id="sec">
      <div className='flex flex-col rounded-xl h-32 border-2 bg-white w-full'>
        <div className='flex cursor-pointer'>
        <img src={user1} className='w-14 mt-4 ml-4' id="img1"/>
        <p className='absolute ml-24 mt-4 border-2 pr-48 text-black font-semibold bg- pl-4 py-3 rounded-3xl border-gray-400 text-left' id="back">Start a post, try writing with AI</p>
        </div>
        <div className='flex space-x-20 pl-6 pt-2 pb-2 '>
        <div className='flex py-3 px-2 space-x-2' id="post1">
          <img src={image} className='w-7 h-7'/>
          <p className='text-base font-semibold'>Media</p>
        </div>
        <div className='flex py-3 px-2 space-x-2' id="post">
          <img src={calender} className='w-7 h-7'/>
          <p className='text-base font-semibold'>Events</p>
        </div>
        <div className='flex py-3 px-2 space-x-2' id="post">
          <img src={article} className='w-7 h-7'/>
          <p className='text-base font-semibold'>Write article</p>
        </div>
        </div>
      </div>
      <div className='flex py-1'>
      <div className='w-10/12 relative mt-3  h-0.5 bg-gray-400 '></div>
      <p className=' ml-5 text-xs'>sort by: Top</p>
      </div>
      <div>
         {posts.map((post,index) => (
         
          <div key={index} className='bg-white rounded-xl mb-3 ' >
          <div  className='flex px-6 py-3 '>
            <div >
              <img src={post.image} id="img1" className='w-12'/>
            </div>
            <div className='flex flex-col '>
              <div className='flex space-x-2 ml-3'>
              <p className='text-black font-semibold cursor-pointer hover:text-indigo-600 hover:underline'>{post.user}</p>
              <p >{post.gender}</p>
              <div className='bg-neutral-500 w-1 h-1 mt-3 rounded'></div>
              <p>{post.num}</p>
              </div>
              <p className='text-xs text-neutral-500 ml-3'>
              {post.desc}</p>
              <p className='text-xs ml-3'>{post.time}</p>
            </div>
            <div className='absolute flex justify-end w-11/12 '>
            <img src={dots} className='w-5 h-5'/>
              <img src={x} className='w-5 h-5'/>
            </div>
            
          </div>
          <div className='w-11/12 pb-5 pl-8 space-y-3' id='text'>
              <p>{post.text1}<span>{!expandedPosts[index] ? '...' : ''}</span></p>
              
              {expandedPosts[index] && (
                <>
                <p>{post.text2}</p>
                <p>{post.text3}</p>
                <p>{post.text4}</p>
                <p className='text-indigo-600 font-bold'>{post.text5}</p>
                </>
              )}

              <button onClick={() => handleMore(index)}>
                {expandedPosts[index] ? 'Read less' : 'Read more'}
              </button>
            </div>
            <div>
            <img src={post.pimage} className='px-1'/>
            </div>
            <div className='flex space-x-1 '>
              <img src={slike} className='w-4 py-3 ml-5'/>
              <p className='mt-2 text-base '>2</p>
              
            </div>
            <div className='h-px ml-5 w-11/12 bg-gray-200' ></div>
            <div className='flex pl-2 py-2'>
              <div className='flex space-x-1 cursor-pointer h-14 py-4 px-7 rounded-md' id="post" onClick={()=>handleButtons(index)}>
              <ThumbsUp  color={`${!clicked[index] ? '#8a8a8a' : '#0a66c2'}`} fill={`${clicked[index] ? '#0a66c2' : '#FFFFFF'}`}/><span id={`${clicked[index] ? 'case1':'case2'}`} className='font-semibold'>Like</span></div>
              <div className='flex space-x-1 cursor-pointer h-14 py-4 px-7 rounded-md' id="post">
              <img src={comment} className='w-7 h-7 '/><span>Comment</span></div>
              <div className='flex space-x-1 cursor-pointer h-14 px-7 py-4 rounded-md' id="post">
              <img src={repost} className='w-7 h-7 '/><span>Repost</span></div>
              <div className='flex space-x-1 cursor-pointer h-14 px-7 py-4 rounded-md' id="post">
              <img src={send} className='w-7 h-7 '/><span>Send</span></div>
            </div>
        </div>
      
         ))}
      </div>
    </div>
  )
}
export default ContainerMain;
