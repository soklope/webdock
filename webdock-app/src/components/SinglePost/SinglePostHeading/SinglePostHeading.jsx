import React from "react";

import "./SinglePostHeading.scss";
import UpvoteBtn from "../../UpvoteBtn/UpvoteBtn";

export default function SinglePostHeading() {
  return (
    <>
      <div>
        <UpvoteBtn
        // numberOfUpvotes={33}
        />
      </div>
      <div>
        heading component (actual post)
        <section>
          <h2>Our very own datacenter in Denmark</h2>
          <div>
            Metadata component
            <span>in progress component</span>
            <span>my post component</span>
            <div>Category</div>
            <div>Date</div>
            <div>Author</div>
          </div>
        </section>
      </div>
    </>
  );
}
