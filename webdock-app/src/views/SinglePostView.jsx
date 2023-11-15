import { React, useEffect, useState } from "react";

import "./view-styles/SinglePostView.scss";

import SinglePostHeading from "../components/SinglePost/SinglePostHeading/SinglePostHeading";
import SinglePostContent from "../components/SinglePost/SinglePostContent/SinglePostContent";
import CommentSection from "../components/SinglePost/CommentSection/CommentSection";
import { completeArrayDb } from "../dummyDb";
import { useParams } from "react-router-dom";

export default function SinglePostView() {
  const { postId } = useParams();
  const loggedIn = true;

  const [post, setPost] = useState(null)
  
	useEffect(() => {
    const fetchSinglePost = async () => {
      
      const parsedId = parseInt(postId, 10)
      // console.log('postId:', postId)
      if (!isNaN(parsedId) && parsedId >= 0 && parsedId < completeArrayDb.length) {
        const singlePost = completeArrayDb[parsedId];
        setPost(singlePost);
      } else {
        console.log('invalid id:', postId)
      }
    };
      
      fetchSinglePost();
    }, [postId]);
  // console.log(post);

  if (!post) {
    return <div>Loading...</div>
  }
  
	return (
		<>
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
            <SinglePostContent
             postContent={post.description} 
             postDate={post.createdAt}
             
             />
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
              postId={postId}
              postDate={post.publishedAt}
              loggedIn={loggedIn}
              comments={post.comments}
            />
          </div>
        </section>
        <div className="test">small container here</div>
      </div>
		</>
	);
}
