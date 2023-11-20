import React, { useEffect, useState } from "react";

import Username from "../../../Username/Username";

import "./SingleComment.scss";

export default function SingleComment({ name, body, replies, loggedin }) {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(loggedIn);
  }, []);

  return (
    <div className="comment-container">
      <div className="comment-user">
        <img
          className="comment-user__img"
          src="https://placehold.co/200x200"
          alt="yes"
        />
        <h4>
          <Username isAdmin={false} user={name} />
        </h4>
      </div>
      <p>{body}</p>

      {replies && replies.length > 0 && (
        <div className="replies-container">
          {replies.map((reply) => (
            <SingleComment key={reply.id} {...reply} loggedIn={loggedin} />
          ))}
        </div>
      )}

      <div className="comment-meta-container">
        <span className="comment-meta-container__icon"></span>
        <span>•</span>
        <div>
          {!loggedIn ? (
            <a href="#"> Reply </a>
          ) : (
            <a href="#"> Login to reply </a>
          )}
        </div>
      </div>
    </div>
  );
}
