import { React, useState } from "react";

import "./UpvoteBtn.scss";

export default function UpvoteBtn( {numberOfUpvotes} ) {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [upvotes, setUpvotes] = useState(3);

  const loggedIn = true; //TODO: FIX NÅR VI HAR LOGIN

  const handleUpvotes = () => {
    if (loggedIn) {
        setIsUpvoted(!isUpvoted);
        console.log(isUpvoted);
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

  return (
    <>
      <div
        className={`upvote-btn${isUpvoted ? "--active" : ""}`}
        onClick={handleUpvotes}
      >
        <div className={`upvote-btn__icon${isUpvoted ? "--active" : ""}`}></div>
        <div
         className={`upvote-btn__text${isUpvoted ? "--active" : ""}`}
         >
            {/* {upvotes} */}
            {numberOfUpvotes}
        </div>
      </div>
    </>
  );
}

// To do after review
// - SLET DEN FUCKING FRAGMENT
// - Adjust shorthand JSX syntax on 29 if statements, to use &&