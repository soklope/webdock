// import { useState} from "react";
import './CreatePostBtn.scss'
// CreatePostBtn component represents a button for creating a new post.
// It includes a button element with an optional icon and the text "CREATE POST."
export default function CreatePostBtn() {
  return (
    <button className="create-post-btn">
      <span className='create-post-btn__icon'>
        {/* You can add an icon here */}
      </span>
      <p>CREATE POST</p>
    </button>
  );
}
