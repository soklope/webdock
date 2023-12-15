import { React, useEffect, useState } from "react";
import userStore from "../../stores/loginStore";

import "./UpvoteBtn.scss";

export default function UpvoteBtn({ numberOfUpvotes, postId }) {
  const [isUpvoted, setIsUpvoted] = useState(false);

  const [upvotes, setUpvotes] = useState(numberOfUpvotes);

  const loggedInUser = localStorage.getItem("user");

  const upvotePost = async () => {
    try {
      const response = await fetch(`http://kmfpgroup5.vps.webdock.cloud:1234/api/v1/upvotepost/${postId}`, {
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

      //If data has "createdUpvote" incremtent upvotes, otherwise decrement.
      if (data.createdUpvote) {
        setUpvotes(upvotes + 1)
        setIsUpvoted(true)
      } else {
        setUpvotes(upvotes - 1)
        setIsUpvoted(false)
      }

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
        {upvotes}
      </div>
    </div>
  );
}
