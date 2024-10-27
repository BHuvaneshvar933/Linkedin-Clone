import React, { useState,useEffect } from 'react';
import user1 from "../assets/user-1.png";
import image from "../assets/image.png";
import calender from "../assets/calender.png";
import article from "../assets/article.png";
import { posts } from '../constants';
import x from "../assets/x.png";
import dots from "../assets/dots.png";
import slike from "../assets/slike.svg";
import repost from "../assets/repost.png";
import commentimg from "../assets/comment.png";
import send from "../assets/send.png";
import { ThumbsUp } from "lucide-react";
import smile from "../assets/smile.png"
import frame from "../assets/frame.png"

const ContainerMain = () => {
  const [expandedPosts, setExpandedPosts] = useState({});
  const [clicked, setClicked] = useState({});
  const [liked, setLiked] = useState({});
  const [comment,setComment]=useState({});
  const [commentlist, setCommentlist] = useState(
    JSON.parse(localStorage.getItem("comment")) || Array(posts.length).fill([]) 
  );
  
  
  const [text,setText]=useState("");
  

  const handleMore = (index) => {
    setExpandedPosts((prevState) => ({
      ...prevState,
      [index]: !prevState[index], 
    }));
  };

  const handleComment = (index) => {
    setComment((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }))
  }

  const handleButtons = (index) => {
    setClicked((prevState) => ({
      ...prevState,
      [index]: !prevState[index], 
    }));
  };

  const handleLikes = (index) => {
    setLiked((prevState) => ({
      ...prevState,
      [index]: (prevState[index] || 0) + (prevState[index] ? -1 : 1),
    }));
  };
  
  const handleCommentSection = (index) => {
    if (!text) {
      alert("Please fill the field");
      return;
    }
    const updatedCommentList = [...commentlist];
    updatedCommentList[index] = [...(updatedCommentList[index] || []), { commentText: text }];
    setCommentlist(updatedCommentList);
    localStorage.setItem("comment", JSON.stringify(updatedCommentList));
    setText("");
  };
  
  
  useEffect(()=>{
    const savedComment=JSON.parse(localStorage.getItem("comment"))|| [];
    setCommentlist(savedComment);
   
  },[])
  return (
    <div className='relative right-5 basis-5/12 ml-10' id="sec">
      <div className='flex flex-col rounded-xl h-32 border-2 bg-white w-full'>
        <div className='flex cursor-pointer'>
          <img src={user1} className='w-14 mt-4 ml-4' id="img1" alt="User avatar" />
          <p className='absolute ml-24 mt-4 border-2 pr-48 text-black font-semibold pl-4 py-3 rounded-3xl border-gray-400 text-left' id="back">
            Start a post, try writing with AI
          </p>
        </div>
        <div className='flex space-x-20 pl-6 pt-2 pb-2'>
          <div className='flex py-3 px-2 space-x-2' id="post1">
            <img src={image} className='w-7 h-7' alt="Media" />
            <p className='text-base font-semibold'>Media</p>
          </div>
          <div className='flex py-3 px-2 space-x-2' id="post">
            <img src={calender} className='w-7 h-7' alt="Events" />
            <p className='text-base font-semibold'>Events</p>
          </div>
          <div className='flex py-3 px-2 space-x-2' id="post">
            <img src={article} className='w-7 h-7' alt="Write article" />
            <p className='text-base font-semibold'>Write article</p>
          </div>
        </div>
      </div>

      <div className='flex py-1'>
        <div className='w-10/12 relative mt-3 h-0.5 bg-gray-400'></div>
        <p className='ml-5 text-xs'>sort by: Top</p>
      </div>

      <section>
        {posts.map((post, index) => (
          <article key={index} className='bg-white rounded-xl mb-3'>
            <header className='flex px-6 py-3'>
              <div>
                <img src={post.image} id="img1" className='w-12' alt={`${post.user}'s avatar`} />
              </div>
              <div className='flex flex-col'>
                <div className='flex space-x-2 ml-3'>
                  <p className='text-black font-semibold cursor-pointer hover:text-indigo-600 hover:underline'>{post.user}</p>
                  <p>{post.gender}</p>
                  <div className='bg-neutral-500 w-1 h-1 mt-3 rounded'></div>
                  <p>{post.num}</p>
                </div>
                <p className='text-xs text-neutral-500 ml-3'>{post.desc}</p>
                <p className='text-xs ml-3'>{post.time}</p>
              </div>
              <div className='absolute flex justify-end w-11/12'>
                <img src={dots} className='w-5 h-5' alt="Options" />
                <img src={x} className='w-5 h-5' alt="Close" />
              </div>
            </header>

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
              <button onClick={() => handleMore(index)} className="text-blue-600 hover:underline">
                {expandedPosts[index] ? 'Read less' : 'Read more'}
              </button>
            </div>

            <div>
              <img src={post.pimage} className='px-1' alt="Post content" />
            </div>

            <div className='flex space-x-1'>
  <img src={slike} className='w-4 py-3 ml-5' alt="Likes icon" onClick={() => handleLikes(index)} />
  <p className='mt-2 text-base'>{liked[index] || 0}</p>
</div>


            <div className='h-px ml-5 w-11/12 bg-gray-200'></div>

            <footer className='flex pl-1 py-2'>
              <section >
              <button
                className='flex space-x-1 cursor-pointer h-14 py-4 px-7 rounded-md'
                id="post"
                onClick={() => {handleButtons(index),handleLikes(index)}
                  
                }
              >
                <ThumbsUp color={`${clicked[index] ? '#0a66c2' : '#8a8a8a'}`} fill={`${!clicked[index] ? '#FFFFFF' : '#0a66c2'}`} onClick={()=>handleLikes(index)}/>
                <span className={`font-semibold ${clicked[index] ? 'text-blue-700' : ''}`}>Like</span>
              </button>
              </section>
              <button className='flex space-x-1 cursor-pointer h-14 py-4 px-7 rounded-md' id="post" onClick={()=>handleComment(index)}>
                <img src={commentimg} className='w-7 h-7'  />
                <span className='font-semibold'>Comment</span>
              </button>
              <button className='flex space-x-1 cursor-pointer h-14 px-7 py-4 rounded-md' id="post">
                <img src={repost} className='w-7 h-7' alt="Repost icon" />
                <span className='font-semibold'>Repost</span>
              </button>
              <button className='flex space-x-1 cursor-pointer h-14 px-7 py-4 rounded-md' id="post">
                <img src={send} className='w-7 h-7' alt="Send icon" />
                <span className='font-semibold'>Send</span>
              </button>
              
            </footer>
            {comment[index] && (
              <div className='pb-3 pr-4 flex-col space-x-3'>
                <div className='flex mb-6 space-x-3'>
                <img src={user1} className='w-11 mr-0  mt-4 ml-2' id="img1" alt="User avatar" />
                <div className='flex border-2 border-zinc-400 rounded-full w-full mt-4 h-12 space-x-44'>
                  <form  onSubmit={(e) => {
                   e.preventDefault();
                    handleCommentSection(index);
                  }}>
               <input type="text" placeholder='Comment here' className='w-full bg-transparent  pl-5 pb-1 h-12 outline-none ' value={text} onChange={(e)=>setText(e.target.value)} /></form>
               
               <section className='flex'>
               <img src={smile} className='w-7 h-7 mt-2 mr-3'/>
               <img src={frame} className='w-7 h-7  mt-2'/>
               </section>
              </div>
              </div>
               {commentlist[index]?.map((item, i) =>(
                <div key={i}>
                  <div className='flex space-x-2'>
                    <div >
                    <img src={user1} className='w-11 ' id="img1"/></div>
                    <div className='flex flex-col w-full  '>
                    <section className='flex space-x-1 '>
                    <p className='text-black font-semibold'>Ryan Gosling</p>
                    <section className='py-3'>
                    <div className="bg-gray-500 w-1 h-1 rounded-full "></div></section>
                    <p className='text-xs mt-1.5'>You</p>
                    
                    </section>
                    <section className='space-y-1'>
                    <p className='text-xs font-light'>Tech Enthusiast | Student at Cambridge institute of technology | Web Developer</p>
                    <p className='text-black'>{item.commentText}</p>
                    <section className='flex space-x-2'>
                    <p className='text-sm font-semibold'>Like</p>
                    <p className='text-sm font-light'>|</p>
                    <p className='text-sm font-medium'>Reply</p>
                    </section>
                    </section>
                    </div>
                    <img src={dots} className='w-5 h-5 ml-10'/>
                    </div>
                    
                </div>
               ))}
              </div>
            )}
            
          </article>
        ))}
      </section>
    </div>
  );
};

export default ContainerMain;


