import React from "react";

const commentsData = [
  {
    name: "Rohit Chanda",
    commentTxt:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    replies: [
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
    ],
  },
  {
    name: "Rohit Chanda",
    commentTxt:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    replies: [
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
    ],
  },
  {
    name: "Rohit Chanda",
    commentTxt:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    replies: [
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
    ],
  },
  {
    name: "Rohit Chanda",
    commentTxt:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    replies: [
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
    ],
  },
  {
    name: "Rohit Chanda",
    commentTxt:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    replies: [
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
    ],
  },
  {
    name: "Rohit Chanda",
    commentTxt:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    replies: [
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
    ],
  },
  {
    name: "Rohit Chanda",
    commentTxt:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    replies: [
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
    ],
  },
  {
    name: "Rohit Chanda",
    commentTxt:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    replies: [
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
    ],
  },
  {
    name: "Rohit Chanda",
    commentTxt:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    replies: [
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
    ],
  },
  {
    name: "Rohit Chanda",
    commentTxt:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    replies: [
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
      {
        name: "Rohit Chanda",
        commentTxt:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, commentTxt, replies } = data;
  return (
    <div className="flex bg-gray-100 shadow-sm p-2">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://st2.depositphotos.com/1537427/5927/v/450/depositphotos_59279537-stock-illustration-user-icon.jpg"
      />

      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{commentTxt}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
