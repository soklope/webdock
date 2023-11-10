import { React, useState, useEffect } from "react";

// import Username from "../../Username/Username";
// import Replies from "./Replies/Replies";

import "./CommentSection.scss";

import dummyComments from "./dummyComments.js";
import SingleComment from "./Comment/SingleComment.jsx";

export default function CommentSection({ postId, postDate }) {
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

  return (

    <div className="comment-section-container">
    <h2>Comments</h2>
    {comments.map((comment) => (
      <SingleComment 
      key={comment.id}
       {...comment} 
       loggedIn={true} 
       />
    ))}
  </div>





    // <div className="comment-section-container">
    //   <h2>Comments</h2>
    //   {comments.map((comment) => (
    //     <div key={comment.id}>
    //       <div className="comment-user">
    //         <img
    //           className="comment-user__img"
    //           src="https://placehold.co/200x200"
    //           alt="yes"
    //         />
    //         <h4>
    //           <Username isAdmin={false} user={comment.name} />
    //         </h4>
    //       </div>
    //       <p>{comment.body}</p>

    //       <div className="comment-meta-container">
    //         <span className="comment-meta-container__icon"></span>
    //         <span>•</span>
    //         <p>{postDate}</p>
    //         <span>•</span>
    //         <div>
    //           {!loggedIn ? (
    //             <a href="#"> Reply </a>
    //           ) : (
    //             <a href="#"> Login to reply </a>
    //           )}
    //         </div>
    //       </div>

    //       <br />
    //     </div>
    //   ))}
    // </div>
  );
}
