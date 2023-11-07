import React from "react";

import './SinglePostContent.scss'

export default function SinglePostContent({ postData }) {
  return (
    <p>
      {/* google escape characters for formatting and getting breaks in tekst */}
      {/* style: white-space: something, mike forklarede det */}
      Content: {postData.content}
        <div className="content-meta-container">
          <div>heart</div>
          <span>•</span>
          <div>Date: {postData.publishedAt} </div>
          <span>•</span>
          <div>reply</div>
        </div>
    </p>
  );
}
