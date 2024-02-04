import React, { useEffect, useState } from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { addLiveMessages } from '../store/slice/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';

const LiveChats = () => {

    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector((state) => state.chat.messages);
    
    useEffect(() => {
        const interval = setInterval(()=> {
            dispatch(addLiveMessages({
                name: generateRandomName(),
                message: generateRandomMessage(30)
            }))
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const handleSendLiveMessage = () => {
        dispatch(addLiveMessages({
            name: "Rohit",
            message: liveMessage
        }))
    }
  return (
    <>
    <div className=' w-full h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((item, i) => (
            <ChatMessages
            key={i}
            name={item.name}
            message={item.message}
            />
        ))}
    </div>
    <div className=' w-full p-2 ml-2 border border-black'>
        <input
        className=' px-2 w-[15rem]'
         type="text"
         value={liveMessage}
         onChange={(e) => setLiveMessage(e.target.value)}
         />
         <button className=' px-2 mx-2 bg-green-100'
         onClick={handleSendLiveMessage}
         >send</button>
    </div>
    
    </>
  )
}

export default LiveChats