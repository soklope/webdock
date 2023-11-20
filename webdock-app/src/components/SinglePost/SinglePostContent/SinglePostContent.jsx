import React from "react";

import './SinglePostContent.scss'

export default function SinglePostContent({ postContent, postDate }) {
  return (
    <div>
      {/* google escape characters for formatting and getting breaks in tekst */}
      {/* style: white-space: something, mike forklarede det */}
      Content: {postContent}
        <div className="content-meta-container">
          <div>heart</div>
          <span>•</span>
          <div>Date: {postDate.toLocaleString()} </div>
          <span>•</span>
          <div>reply</div>
        </div>
    </div>
  );
}
