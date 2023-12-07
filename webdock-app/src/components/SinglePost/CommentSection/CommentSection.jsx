import { React } from "react";

import "./CommentSection.scss";

import SingleComment from "./Comment/SingleComment.jsx";

export default function CommentSection({ comments }) {
	return (
		<div className="comment-section-container">
			{comments.map((comment) => (
				<SingleComment key={comment.id} {...comment} />
			))}
		</div>
	);
}
