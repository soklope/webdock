import { React } from "react";

import "./CommentSection.scss";

import SingleComment from "./Comment/SingleComment.jsx";

export default function CommentSection({ comments }) {
	return (
		<div className="comment-section-container">
			<div className="comment-post-container">
				
				<textarea 
					className="comment-post"
					type="text"
					placeholder="Leave a comment">
				</textarea>

				<button className="submit-comment">
					SUBMIT
				</button>
			</div>

			<div className="comment-section-container">
				<div className="log-in-to-comment">
					<p>Log in to leave a comment</p>
				</div>
			</div>

			{comments.map((comment) => (
				<SingleComment key={comment.id} {...comment} />
			))}
		</div>
	);
}
