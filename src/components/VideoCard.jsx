import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  // console.log('info',info);
  const { snippet, statistics, id } = info;
  const { channelTitle, thumbnails, title, publishedAt } = snippet;
  let videoId = id?.videoId ? id.videoId : id;

  // const { viewCount } = statistics;
  // console.log('video id', videoId, typeof videoId);
  if (!videoId) return <></>;

  return (
    <Link to={`/watch?v=${videoId}`}>
      <div className="p-2 m-2 w-80 shadow-lg">
        <img
          alt="thumbnail"
          className="rounded-lg"
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
