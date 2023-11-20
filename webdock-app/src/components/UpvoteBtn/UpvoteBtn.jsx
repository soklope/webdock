import { React, useEffect, useState } from "react";
import userStore from "../../stores/loginStore";

import "./UpvoteBtn.scss";

export default function UpvoteBtn( {numberOfUpvotes} ) {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [upvotes, setUpvotes] = useState(numberOfUpvotes);

  const { user  } = userStore();

  const handleUpvotes = () => {
    if (user) {
        setIsUpvoted(!isUpvoted);
        if (isUpvoted) {
            setUpvotes(upvotes - 1)
            return
        } else {
            setUpvotes(upvotes + 1)
        }
    } else {
        alert('Du skal logge ind mester')
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
        <div
         className={`upvote-btn__text${isUpvoted ? "--active" : ""}`}
         >
            {upvotes}
        </div>
      </div>
  );
}
