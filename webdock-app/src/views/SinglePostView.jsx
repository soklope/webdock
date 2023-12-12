import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { checkAdmin } from "../helper/checkAdmin.js";

import SinglePostHeading from "../components/SinglePost/SinglePostHeading/SinglePostHeading";
import SinglePostContent from "../components/SinglePost/SinglePostContent/SinglePostContent";
import CommentSection from "../components/SinglePost/CommentSection/CommentSection";
import SinglePostMeta from "../components/SinglePost/SinglePostMeta/SinglePostMeta";
import AdminToolBar from "../components/SinglePost/AdminToolBar/AdminToolBar.jsx";

import "./view-styles/SinglePostView.scss";
import UpvoteBtn from "../components/UpvoteBtn/UpvoteBtn.jsx";
import "../components/SinglePost/AdminToolBar/AdminToolBar.scss"

export default function SinglePostView() {
  const [post, setPost] = useState(null);
  const [upvotes, setUpvotes] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetchSinglePost = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/post/${id}`);
        const data = await response.json();
        setPost(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchSinglePostUpvotes = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/postupvotes/${id}`);
        const data = await response.json();
        setUpvotes(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSinglePost();
    fetchSinglePostUpvotes();

  }, [id]);
  
  if (!post) {
    return <div>Loading...</div>;
  }

  const userRole = JSON.parse(localStorage.getItem('user'));

  const handleNewComment = (newComment) => {
    setPost(prevPost => ({
        ...prevPost,
        Comments: [...prevPost.Comments, newComment]
    }));
};

  return (
    <>
      <div className="wrap single-post-view-container">
        <section className="single-post-container">

          {/* {checkAdmin(userRole.email) &&
            <AdminToolBar 
              itemId={id}
            />
          } */}

          <div className="single-post-view-heading">
            <div className="single-post-view-heading__upvote">
              <UpvoteBtn numberOfUpvotes={upvotes.totalUpvotes} />
            </div>
            <SinglePostHeading
              postTitle={post.title}
              postStatus={post.Status.status}
              postUpvotes={post.numberOfUpvotes}
              postCategory={post.Category.category}
              postDate={post.createdAt}
              postAuthor={post.User.name}
              isAdmin={checkAdmin(post.User.email)}
            />
          </div>

          <div className="single-post-container__content">
            <SinglePostContent
              // postContent={post.description}
              postDate={post.createdAt}
            />

            <div className="single-post-container__merges">
              <div>
                <h3>Merged with in a post:</h3>
                <h4>Title of merged post</h4>
                <div>merged content here </div>
                {post.id == 1 ? (
                  <Link to="/posts/2">
                    {" "}
                    <div> Merged with /post/2 (Swithes post) </div>{" "}
                  </Link>
                ) : post.id == 2 ? (
                  <Link to="/posts/1">
                    {" "}
                    <div> Merged with /post/1 (Swithes post) </div>{" "}
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/* <div>
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
            </div> */}

            <div>
              <CommentSection
                // postDate={post.publishedAt}
                // loggedIn={loggedIn}
                comments={post.Comments}
                postId={post.id}
                updateComments={handleNewComment}
              />
            </div>
          </div>
        </section>
        <div className="single-post-container">
          <SinglePostMeta
            images={post.image}
            postId={post.id} //temp value to showcase merge function
            upvoters={upvotes.upvotes}
          />
        </div>
        <Link to="/" className="single-post-view-back__icon">
        </Link>
      </div>
    </>
  );
}
