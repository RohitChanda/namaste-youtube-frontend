import React, { useEffect, useState } from "react";
import { getCommentsList } from "../utils/youtubeApi";
import { useSearchParams } from "react-router-dom";
import { AiFillLike, AiFillDislike, AiFillCaretDown } from "react-icons/ai";
// const commentsData = [
//   {
//     name: "Rohit Chanda",
//     commentTxt:
//       "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//     replies: [
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//     ],
//   },
//   {
//     name: "Rohit Chanda",
//     commentTxt:
//       "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//     replies: [
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//     ],
//   },
//   {
//     name: "Rohit Chanda",
//     commentTxt:
//       "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//     replies: [
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//     ],
//   },
//   {
//     name: "Rohit Chanda",
//     commentTxt:
//       "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//     replies: [
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//     ],
//   },
//   {
//     name: "Rohit Chanda",
//     commentTxt:
//       "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//     replies: [
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//     ],
//   },
//   {
//     name: "Rohit Chanda",
//     commentTxt:
//       "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//     replies: [
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//     ],
//   },
//   {
//     name: "Rohit Chanda",
//     commentTxt:
//       "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//     replies: [
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//     ],
//   },
//   {
//     name: "Rohit Chanda",
//     commentTxt:
//       "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//     replies: [
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//     ],
//   },
//   {
//     name: "Rohit Chanda",
//     commentTxt:
//       "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//     replies: [
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//     ],
//   },
//   {
//     name: "Rohit Chanda",
//     commentTxt:
//       "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//     replies: [
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//       {
//         name: "Rohit Chanda",
//         commentTxt:
//           "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
//         replies: [],
//       },
//     ],
//   },
// ];

const Comment = ({ data }) => {
  const { snippet } = data;
  // const {topLevelComment} = snippet;
  const commentData =snippet.topLevelComment?.snippet;
  // console.log('commentData',commentData);
  const getTimeDifference = (time) => {
    const timeDiff = new Date().getTime() - new Date(time).getTime(); // miliseconds

    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    if (years !== 0) return `${years} years ago`;

    const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
    if (months !== 0) return `${months} months ago`;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    if (days !== 0) return `${days} days ago`;

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    if (hours !== 0) return `${hours} hours ago`;

    const minutes = Math.floor(timeDiff / (1000 * 60));
    if (minutes !== 0) return `${minutes} minutes ago`;

    const sec = Math.floor(timeDiff / 1000);
    if (sec !== 0) return `${sec} sec ago`;

    return "";
  };

  const countLike = (likeCount) => {
    // likeCount = String(likeCount);
    // if (likeCount.length > 3) {

    // }

    return likeCount;
  };

  return (
    <div className="flex shadow-sm p-2 my-5">
      <img
        className="w-8 h-8"
        alt="user"
        // src="https://st2.depositphotos.com/1537427/5927/v/450/depositphotos_59279537-stock-illustration-user-icon.jpg"
        src={
          commentData?.authorProfileImageUrl
            ? commentData.authorProfileImageUrl
            : "https://st2.depositphotos.com/1537427/5927/v/450/depositphotos_59279537-stock-illustration-user-icon.jpg"
        }
      />
      <div className="px-3">
        <p>
          <span className="font-bold">{commentData.authorDisplayName}</span>{" "}
          {getTimeDifference(commentData.updatedAt)}
        </p>
        <p>{commentData.textDisplay}</p>
        <div className="flex">
          <div className="m-2">
            <AiFillLike  size={22} name="like" />
          </div>
          <div className=" mt-1 mr-3">
            {commentData.likeCount > 0 ? countLike(commentData.likeCount) : ""}
          </div>

          <div className="m-2">
            <AiFillDislike size={22} name="dislike" />
          </div>
          <div className="mt-1 mx-3">
            Reply
          </div>
        </div>

        <div className="flex" style={{cursor:'pointer'}}>
          <div className=" mt-1 mr-2">
          <AiFillCaretDown color="blue"/>

          </div>
          <span style={{color:'blue'}}> 
          {snippet.totalReplyCount} replies
          </span>
        </div>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  if(!comments) return <></>;
  
  return comments.map((comment, index) => (
      <Comment key={index} data={comment} />
      // {/* <div className="pl-5 border border-l-black ml-5"> */}
      // {/* <CommentsList comments={comment.replies} /> */}
      // {/* </div> */}
    
  ));
};

const CommentsContainer = () => {
  const [searchParams] = useSearchParams();
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const data = await getCommentsList(searchParams.get("v"));
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, [searchParams.get("v")]);
  return (
    <div className="mt-5 mb-5 mr-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsContainer;
