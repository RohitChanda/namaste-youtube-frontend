import React, { useEffect, useRef } from "react";
import {
  YOUTUBE_API,
  getSearchResults,
  getYoutubeVideosList,
} from "../utils/youtubeApi";
import { savedVideos } from "../utils/constant";
import { useState } from "react";
import VideoCard from "./VideoCard";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  // addVideosIntoList,
  fetchVideos,
  // updateWholeVideoList,
  fetchMoreVideos
} from "../store/slice/videoListSlice";
import useDebounce from "../hooks/useDebounce";

const VideoContainer = () => {
  let [searchParams] = useSearchParams();
  const searchKey = searchParams.get("search_query");

  const videoListState =  useSelector((state) => state.videosList)
  const videos = useSelector((state) => state.videosList.videos);
  // const nextPageToken = useSelector((state) => state.videosList.nextPageToken)
  const dispatch = useDispatch();

  const nextPageTokenRef = useRef(null);

  const getVideos = async () => {
    try {
      dispatch(fetchVideos());
    } catch (error) {
      console.log(error);
    }
  };

  const loadMoreVideos = useDebounce(async () => {
  
    dispatch(fetchMoreVideos({pageToken: nextPageTokenRef.current}));
  }, 500);

  const handleScroll = () => {
    if (
      (document.documentElement.scrollTop + window.innerHeight + 1  >=
      document.documentElement.scrollHeight) && !videoListState.isLoading
    ) {
      loadMoreVideos();
    }
  };

  useEffect(() => {
    getVideos();
  }, [videoListState.reloadTheHomePageCounter]);

  useEffect(()=> {
    console.log(' videoListState.nextPageToken',  videoListState.nextPageToken);
    nextPageTokenRef.current = videoListState.nextPageToken;
  }, [videoListState.nextPageToken])


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-wrap">
      {
        // <VideoCard key={videos[0]?.id || 0} info={videos[0]} />
        videos.map((video, index) => (
          <VideoCard key={index} info={video} />
        ))
      }
    </div>
  );
};

export default VideoContainer;
