import React from "react";

import Username from "../../../Username/Username";

import "./SingleComment.scss";
import formatCustomDate from "../../../../helper/formatDate";
import { create } from "zustand";
import { checkAdmin } from "../../../../helper/checkAdmin";

export default function SingleComment({ User, content, Replies, createdAt }) {

  return (
    <div className="comment-container">
      <div className="comment-user">
        <img
          className="comment-user__img"
          src="https://placehold.co/200x200"
          alt="yes"
        />
        <h4>
          <Username isAdmin={checkAdmin(User.email)} user={User.name} />
        </h4>
      </div>
      <p>{content}</p>

      <div className="comment-meta-container">
        <span className="comment-meta-container__icon"></span>
        <span>•</span>
        <div>
          {formatCustomDate(new Date(createdAt))}
        </div>
        {/* <div className="comment-meta-container__reply-btn">
          {loggedIn ? (
            <a href="#"> Reply </a>
          ) : (
            <a href="#"> Login to reply </a>
          )}
        </div> */}
      </div>

      {Replies && Replies.length > 0 && (
        <div className="replies-container">
          {Replies.map((reply) => (
            <SingleComment key={reply.id} {...reply} />
          ))}
        </div>
      )}

    </div>
  );
}
