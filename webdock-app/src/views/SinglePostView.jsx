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

	return (
		<>
			<div className="wrap single-post-view-container">
				<div className="single-post-view-container__upvote">
					<UpvoteBtn numberOfUpvotes={post.numberOfUpvotes} />
				</div>
				<section className="single-post-container">
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
							// postContent={post.description}
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
							<div className="new-comment-form">
								<form action="post">
									<input
										type="text"
										placeholder="Leave a comment..."
									/>
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
