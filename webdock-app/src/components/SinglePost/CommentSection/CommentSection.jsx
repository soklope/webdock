import { React, useState, useEffect } from "react";

// import Username from "../../Username/Username";
// import Replies from "./Replies/Replies";

import "./CommentSection.scss";

import dummyComments from "./dummyComments.js";
import SingleComment from "./Comment/SingleComment.jsx";

export default function CommentSection({ postId, postDate }) {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		setComments(dummyComments);
	}, []);

	return (
		<div className="comment-section-container">
			<h2>Comments</h2>
			{comments.map((comment) => (
				<SingleComment key={comment.id} {...comment} loggedIn={true} />
			))}
		</div>
	);
}
