import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  // console.log('info',info);
  const { snippet, id } = info;
  const { channelTitle, thumbnails, title } = snippet;
  let videoId = id?.videoId ? id.videoId : id;
  if (!videoId) return <></>;

  return (
    <Link to={`/watch?v=${videoId}`}>
      <div className="p-2 m-2 w-80 shadow-lg">
        <img
          alt="thumbnail"
          className=" rounded-3xl hover:rounded-none"
          src={thumbnails.medium.url}
        />
        <ul>
          <li className="font-bold py-2">{title}</li>
          <li>{channelTitle}</li>
          {/* <li>{viewCount || ''}</li> */}
        </ul>
      </div>
    </Link>
  );
};

export default VideoCard;
