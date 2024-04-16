import React from 'react'
import { FaUserAlt } from "react-icons/fa";
const ChatMessages = ({name, message}) => {
  return (
    <div className='flex item-center shadow-sm p-2'>
       <div>
  <FaUserAlt
   
  />
</div>
        <span className='font-bold px-2 font-sans'>{name}</span>
        <span className='font-sans'>{message}</span>
    </div>
  )
}

export default ChatMessages