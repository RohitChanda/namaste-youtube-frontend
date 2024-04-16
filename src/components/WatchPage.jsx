import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../store/slice/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChats from "./LiveChats";
import { getCommentsList, getYoutubeVideoDetails } from "../utils/youtubeApi";
// import RelatedVideosList from "./RelatedVideosList";
import Avatar from "react-avatar";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";

const VideoDescription = (props) => {
  const { text, maxLength } = props;
  const [showFullDescription, setShowFullDescription] = useState(false);
  // console.log("text", text.length, maxLength);

  return (
    <>
      {showFullDescription ? (
        text
      ) : (
        <>
          {text.substring(0, maxLength)}
          <span
          style={{
            cursor:'pointer',
            fontWeight: 'bold'
          }}
            onClick={() => {
              setShowFullDescription((prev) => !prev);
            }}
          >
            .....more
          </span>
        </>
      )}
    </>
  );
};

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log("video id", searchParams.get("v"));
  const iFrameRef = useRef();
  const dispatch = useDispatch();
  const [videoDetails, setVideoDetails] = useState({});
  const [showLiveChat, setShowLiveChat] = useState(false);
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const maxDescriptionLength = 200;

  const fetchVideoDetails = async () => {
    try {
      const data = await getYoutubeVideoDetails(searchParams.get("v"));
      // console.log("video details", data);
      const snippet = data.items[0].snippet;
      // console.log("snippert", snippet);
      // console.log('data.items[0].snippet.authorProfileImageUrl', data.items[0].snippet)
      setVideoDetails({
        title: data.items[0].snippet.title,
        description: data.items[0].snippet.description,
        thumbnailUrl: data.items[0].snippet.thumbnails.default.url,
        channelTitle: data.items[0].snippet.channelTitle,
        authorProfileImageUrl: data.items[0].snippet.authorProfileImageUrl,
      });

      // console.log('videoDetails', videoDetails);
    } catch (error) {
      console.error("errr", error.message);
    }
  };

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideoDetails();

    iFrameRef.current.focus();
    window.scrollTo(0, 0);

    setTimeout(() => {
      setShowLiveChat(true);
    }, 2000);
  }, []);
  return (
    <div className="w-full flex px-10"
    // style={
    //   !isMenuOpen? {
    //     marginLeft: '70px'
    //   }: {}
    // }
    >
      <div
        className="left-part "
        // style={{
        //   marginLeft: "20px",
        //   marginRight: '20px'
        // }}
      >
        <iframe
          ref={iFrameRef}
          style={{
            borderRadius: "20px",
            padding: "10px",
          }}
          width="900"
          height="400"
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <div className="video-details">
          <h1 className=" font-bold mt-2 text-lg">{videoDetails.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between w-[35%]">
              <div className="flex">
                <Avatar
                  // src={videoDetails.authorProfileImageUrl}
                  src={
                    videoDetails?.authorProfileImageUrl ||
                    videoDetails.thumbnailUrl
                  }
                  size={35}
                  round={true}
                />
                {/* <img 
                src={videoDetails?.authorProfileImageUrl || videoDetails.thumbnailUrl}
                alt="" 
                className=" rounded-xl"/> */}
                <h1 className="font-bold ml-2">
                  {videoDetails.channelTitle}
                </h1>
              </div>
              <button className=" bg-gray-300 font-medium mx-2 hover:bg-gray-400 text-white py-2 px-4 rounded-full">
                Join
              </button>
              <button className="bg-black font-medium mx-2 hover:bg-gray-800 text-white py-2 px-4 rounded-full">
                Subscribe
              </button>
              {/* <button className="px-1 py-1 font-medium bg-black text-white rounded-full">
                Subscribe
              </button> */}
            </div>
            <div className="flex items-center w-[40%] justify-between mt-2">
              <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
                <AiOutlineLike size="20px" className="mr-5" />
                <AiOutlineDislike size="20px" />
              </div>
              <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
                <PiShareFatLight size="20px" className="mr-2" />
                <span>Share</span>
              </div>
              <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
                <GoDownload />
                <span>Download</span>
              </div>
            </div>
          </div>

          <div>
            <p className="mt-4 mb-4 px-5 py-8 bg-gray-200 rounded-2xl text-gray-700 text-base font-normal">
              {videoDetails?.description && (
                <VideoDescription
                  text={videoDetails.description}
                  maxLength={maxDescriptionLength}
                />
              )}
            </p>
          </div>
          <CommentsContainer />
        </div>
      </div>
      <div className="right-side">
          {
            showLiveChat && <LiveChats />
          }
      </div>
      {/* {showRelatedVideos && (
        <div className="right-side w-1/4">
          <RelatedVideosList />
        </div>
      )} */}
    </div>
  );
};

export default WatchPage;
