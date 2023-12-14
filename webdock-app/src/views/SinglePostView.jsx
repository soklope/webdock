import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { checkAdmin } from "../helper/checkAdmin.js";
import useModalStore from "../stores/modalStore.js";

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
  const [mergedPostArray, setMergedPostArray] = useState([]);

  const { id } = useParams();
  const userRole = JSON.parse(localStorage.getItem('user'));
  const { setNewPostParam } = useModalStore()

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

    const fetchMergedPosts = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/merged-post/${id}`);
        const data = await response.json();
        setMergedPostArray(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchSinglePost();
    fetchSinglePostUpvotes();
    fetchMergedPosts();
    setNewPostParam(id)
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

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

          <div className="single-post-view-toolbar">
            <Link to="/" className="single-post-view-back" >
              <span className="single-post-view-back__icon" ></span>
              Back
            </Link>

            {userRole && checkAdmin(userRole.email) &&
              <>
                <AdminToolBar
                  itemId={id}
                />
              </>
            }
          </div>

          <div className="single-post-view-heading">
            <div className="single-post-view-heading__upvote">
              <UpvoteBtn
                numberOfUpvotes={upvotes.totalUpvotes}
                postId={post.id}
              />

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
                <h3>Posts covering the same topic</h3>
                {
                  <ul>
                    {mergedPostArray.map((post, index) => (
                      <li className="single-post-container__li" key={index}>
                        <Link to={`/posts/${post.Id}`}>{post.Title}</Link>
                      </li>
                    ))}
                  </ul>
                }
              </div>
            </div>

            <div>
              <CommentSection
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
        {/* <Link to="/" className="single-post-view-back__icon">
        </Link> */}
      </div>
    </>
  );
}
