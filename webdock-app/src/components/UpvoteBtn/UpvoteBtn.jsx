import { React, useEffect, useState } from "react";
import userStore from "../../stores/loginStore";

import "./UpvoteBtn.scss";

export default function UpvoteBtn({ numberOfUpvotes, postId }) {
  const [isUpvoted, setIsUpvoted] = useState(false);

  const [upvotes, setUpvotes] = useState(numberOfUpvotes);

  const loggedInUser = localStorage.getItem("user");

  const upvotePost = async () => {
  
    try {
      const response = await fetch(`http://localhost:8080/api/v1/upvotepost/${postId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: loggedInUser,
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
  
      console.log("data is:", data);
      console.log("Upvote successful!", data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  

  const handleUpvotes = () => {
    if (loggedInUser) {
      // setIsUpvoted(!isUpvoted);
      upvotePost();
    } else {
      alert("Du skal logge ind mester");
    }
  };

  // useEffect(() => {
  //   setUpvotes(numberOfUpvotes);
  //   console.log(upvotes)
  // }, [])

  return (
    <div
      className={`upvote-btn${isUpvoted ? "--active" : ""}`}
      onClick={handleUpvotes}
    >
      <div className={`upvote-btn__icon${isUpvoted ? "--active" : ""}`}></div>
      <div className={`upvote-btn__text${isUpvoted ? "--active" : ""}`}>
        {numberOfUpvotes}
      </div>
    </div>
  );
}
