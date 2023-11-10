import { React, useState, useEffect } from "react";

import Username from "../../Username/Username";
import Replies from "./Replies/Replies";

import "./CommentSection.scss";

import dummyComments from './dummyComments.js';

export default function CommentSection({ postId, postDate, loggedIn }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(dummyComments);
    
    // const fetchComments = async () => {
    //   try {
    //     const response = await fetch(
    //       `https://jsonplaceholder.typicode.com/comments?postId=` + postId
    //     );
    //     const data = await response.json();
    //     setComments(data);
    //   } catch (error) {
    //     console.error("Error fetching comments:", error);
    //   }
    // };

    // fetchComments();
  }, []);

  const renderReplies = (replies) => {
    return (
      <div className="replies-container">
        {replies.map((reply) => (
          <div key={reply.id}>
            <Replies
            name={reply.name}
            content={reply.body}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="comment-section-container">
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <div className="comment-user">
            <img
              className="comment-user__img"
              src="https://placehold.co/200x200"
              alt="yes"
            />
            <h4>
              <Username isAdmin={false} user={comment.name} />
            </h4>
          </div>
          <p>{comment.body}</p>

          <div className="comment-meta-container">
            <span className="comment-meta-container__icon"></span>
            <span>•</span>
            <p>{postDate}</p>
            <span>•</span>
            <div>
              {!loggedIn ? (
                <a href="#"> Reply </a>
              ) : (
                <a href="#"> Login to reply </a>
              )}
            </div>
          </div>
          
          {/* we need to make a call to then backend where we get comments with replies as an array for this to work */}
          {comment.replies && comment.replies.length > 0 && renderReplies(comment.replies)          }

          <br />
        </div>
      ))}
    </div>
  );
}
