import React from 'react'
import { 
  EllipsisHorizontalIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  FaceSmileIcon,
  BookmarkIcon, 
  HeartIcon,
} from '@heroicons/react/24/outline'


export default function Post({img, userImg, caption, username, id}) {
  return (
    <div className='bg-white my-7 border rounded-md'>
    {/* Post Header  */}
      <div className='flex items-center p-5'>
          <img src={userImg} alt={username} 
          className="h-12 rounded-full object-cover border p-1 mr-3" 
          />
          <p className='font-bold flex-1'>{username}</p>
          <EllipsisHorizontalIcon className='h-5'/>
      </div>

      {/* Post Image */}
      <img className='object-cover w-full' src={img} alt="" />

      {/* Post Likes And Comments */}
      <div className='flex justify-between px-4 pt-4'>
        <div className='flex space-x-4'>
          <HeartIcon className='post_btn'/>
          <ChatBubbleOvalLeftEllipsisIcon className='post_btn'/>
        </div>
        <BookmarkIcon className='post_btn' />
      </div>

      {/* Post Comments  */}
      <p className='p-5 truncate'>
        <span className='font-bold mr-2'>
          {username}
        </span>
          {caption}
      </p>

      {/* Post Input Box */}
      <form className='flex items-center p-4'>
        <FaceSmileIcon className='post_btn h-7'/>
        <input className='border-none flex-1 focus:ring-0' type="text" placeholder='Enter your comment ...' />
        <button className='text-blue-400 font-bold'>Publish</button>
      </form>

    </div>
  )
}
