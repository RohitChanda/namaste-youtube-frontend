import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, toggleMenu } from "../store/slice/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChats from "./LiveChats";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log("video id", searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div classNam=" flex flex-row">
      <div className="px-10 flex w-full">
        <div>
          <iframe
            width="900"
            height="400"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="w-full">
          <LiveChats />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
