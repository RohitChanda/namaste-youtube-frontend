import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addLiveMessages } from "../store/slice/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import { HiUserCircle } from "react-icons/hi";
import { AiOutlineSend } from "react-icons/ai";

const LiveChats = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((state) => state.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addLiveMessages({
          name: generateRandomName(),
          message: generateRandomMessage(30),
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleSendLiveMessage = () => {
    dispatch(
      addLiveMessages({
        name: "Me",
        message: liveMessage,
      })
    );
  };
  return (
    < div className="ml-3">
      <div className=" w-[350px] h-[400px]  mt-[10px] p-2 border border-gray-400 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((item, i) => (
          <ChatMessages key={i} name={item.name} message={item.message} />
        ))}
      </div>
      <div className="w-[350px] p-2 border border-gray-400 flex items-center">
        <HiUserCircle
          style={{
            width: "50px",
            height: "32px",
          }}
        />
        <input
          className=" px-2 w-3/4  border border-gray-300 rounded-md"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />

        <button
          type="button"
          class="font-small rounded-full text-sm px-5 py-2.5 m-2"
          onClick={handleSendLiveMessage}
        >
          <AiOutlineSend  style={{
            width: "20px",
            height: "20px",
          }}/>
        </button>
    </div> 
      
    </div>
  );
};

export default LiveChats;
/**
 * {/* 
 */