import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

import SinglePostHeading from "../components/SinglePost/SinglePostHeading/SinglePostHeading";
import SinglePostContent from "../components/SinglePost/SinglePostContent/SinglePostContent";
import CommentSection from "../components/SinglePost/CommentSection/CommentSection";
import SinglePostMeta from "../components/SinglePost/SinglePostMeta/SinglePostMeta";
import { checkAdmin } from "../helper/checkAdmin.js";

import "./view-styles/SinglePostView.scss";

import UpvoteBtn from "../components/UpvoteBtn/UpvoteBtn.jsx";

export default function SinglePostView() {
  const [post, setPost] = useState(null);
  const [upvotes, setUpvotes] = useState(0);
  const { id } = useParams();

  const handleReplyClick = (replyText, comentId) => {
    //Call backend recive the new created reply

    const testReply = { //Test return object (Replace with the returned object from backend)
      id: 100, 
      content: "test", 
      user_id: 2200, 
      like_id: 20, 
      comment_id: 6, 
      createdAt: "2023-12-10T19:13:28.000Z", 
      updatedAt: "2023-12-10T19:13:28.000Z",
      User: {
        name: "Alice",
        email: "alicej@example.com"
      }
    }

    addReplyToComentInPost(testReply, comentId)
  };

  const addReplyToComentInPost = (reply) => {
    const currentPost = post;

    const commentIndex = currentPost.Comments.findIndex(x => x.id === reply.comment_id);

    currentPost.Comments[commentIndex].Replies.push(reply);

    setPost(currentPost);
  };

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

  return (
    <>
      <div className="wrap single-post-view-container">
        <section className="single-post-container">

          {userRole.admin &&
            <div className="admin-toolbar-container">
              <div className="admin-toolbar-container__tool">
                <p>Move</p>
                <span className="admin-toolbar-container__tool__move" />
              </div>

              <div className="admin-toolbar-container__tool">
                <p>Merge</p>
                <span className="admin-toolbar-container__tool__merge" />
              </div>

              <div className="admin-toolbar-container__tool">
                <p>Delete</p>
                <span className="admin-toolbar-container__tool__delete" />
              </div>
            </div>
          }

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
                    <div> Merged with /post/2 (should open as a modal) </div>{" "}
                  </Link>
                ) : post.id == 2 ? (
                  <Link to="/posts/1">
                    {" "}
                    <div> Merged with /post/1 (should open as a modal) </div>{" "}
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
                // postId={post.id}
                // postDate={post.publishedAt}
                // loggedIn={loggedIn}
                comments={post.Comments}
                handleReply={handleReplyClick}
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
