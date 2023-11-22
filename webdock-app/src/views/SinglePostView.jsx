import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SinglePostHeading from "../components/SinglePost/SinglePostHeading/SinglePostHeading";
import SinglePostContent from "../components/SinglePost/SinglePostContent/SinglePostContent";
import CommentSection from "../components/SinglePost/CommentSection/CommentSection";
import SinglePostMeta from "../components/SinglePost/SinglePostMeta/SinglePostMeta";

import "./view-styles/SinglePostView.scss";

import { completeArrayDb } from "../dummyDb.js";
import UpvoteBtn from "../components/UpvoteBtn/UpvoteBtn.jsx";

export default function SinglePostView() {
  const [post, setPost] = useState(null);

  console.log("params:", useParams());
  const { id } = useParams();
  console.log("postid after useparams:", id);
  const loggedIn = true;

  useEffect(() => {
    const fetchSinglePost = async () => {
      const parsedId = parseInt(id, 10);
      console.log("parsed postId:", parsedId);
      if (
        !isNaN(parsedId) &&
        parsedId >= 0 &&
        parsedId < completeArrayDb.length + 1
      ) {
        const singlePost = completeArrayDb[parsedId - 1];
        setPost(singlePost);
      } else {
        console.log("invalid id:", id);
      }
    };

    fetchSinglePost();
  }, [id]);
  // console.log(post);

  if (!post) {
    return <div>Loading...</div>;
  }

  const userRole = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <div className="wrap single-post-view-container">
        <section className="single-post-container">

          { userRole.admin && 
            <div className="admin-toolbar-container">
              <div className="admin-toolbar-container__tool">
                <p>Move</p>
                <span className="admin-toolbar-container__tool__move"/>
              </div>

              <div className="admin-toolbar-container__tool">
                <p>Merge</p>
                <span className="admin-toolbar-container__tool__merge"/>
              </div>

              <div className="admin-toolbar-container__tool">
                <p>Delete</p>
                <span className="admin-toolbar-container__tool__delete"/>
              </div>
            </div>
          }

          <div className="single-post-view-heading">
            <div className="single-post-view-heading__upvote">
              <UpvoteBtn numberOfUpvotes={post.numberOfUpvotes} />
            </div>
            <SinglePostHeading
              postTitle={post.title}
              postStatus={post.status}
              postUpvotes={post.numberOfUpvotes}
              postCategory={post.category}
              postDate={post.createdAt}
              postAuthor={post.authorId}
            />
          </div>

          <div className="single-post-container__content">
            <SinglePostContent
              // postContent={post.description}
              postDate={post.createdAt}
            />

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
				<div className="new-comment-form">
                <form action="post">
                  <input type="text" placeholder="Leave a comment..." />
                </form>
              </div>
            )}
          </div>

          <div>
            <CommentSection
              postId={post.id}
              postDate={post.publishedAt}
              loggedIn={loggedIn}
              comments={post.comments}
			  />
          </div>
			</div>
        </section>
        <div className="single-post-container">
          <SinglePostMeta
            images={post.images}
            postId={post.id} //temp value to showcase merge function
          />
        </div>
      </div>
    </>
  );
}
