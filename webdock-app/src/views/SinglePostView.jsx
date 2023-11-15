import { React, useEffect, useState } from "react";

import "./view-styles/SinglePostView.scss";

import SinglePostHeading from "../components/SinglePost/SinglePostHeading/SinglePostHeading";
import SinglePostContent from "../components/SinglePost/SinglePostContent/SinglePostContent";
import CommentSection from "../components/SinglePost/CommentSection/CommentSection";
import { completeArrayDb, plannedArrayDb } from "../dummyDb";
import { useParams } from "react-router-dom";

export default function SinglePostView() {
	// const idFromUrl = useParams();
  const { postId } = useParams();


  const [post, setPost] = useState(null)
  
	useEffect(() => {
		console.log(postId);

    const parsedId = parseInt(postId, 10)
    // console.log('postId:', postId)

    const singlePost = completeArrayDb[parsedId];
    setPost(singlePost);
    console.log(singlePost)


	}, [postId]);

	//   json date to written date, using regex or string.replace
	//   https://www.tutorialspoint.com/how-to-convert-json-results-into-a-date-using-javascript
	return (
		<>
    {post.title}
			{/* 
      <div className="single-post-view-container wrap">
        <section>
          <div>
            <SinglePostHeading
             postTitle={post.title}
             postStatus={post.status}
             postUpvotes={post.numberOfUpvotes}
             postCategory={post.category}
             postDate={post.createdAt}
             postAuthor={post.authorId}
             />
          </div>

          <div>
            <SinglePostContent postData={post} />
          </div>

          <div>
			<br />
            {!loggedIn ? (
              <div className="comment-missing-login">
                <p>
                  {" "}
                  Login to leave a comment
                  <a href="#"> login</a>
                </p>
              </div>
            ) : (
              <div>Comment field and sorting here (kun på desktop)</div>
            )}
          </div>

          <div>
            <CommentSection
              postId={1}
              postDate={post.publishedAt}
              loggedIn={loggedIn}
            />
          </div>
        </section>
        <div className="test">small container here</div>
      </div> */}
		</>
	);
}
