import { React, useState, useEffect } from "react";

import "./CommentSection.scss";

import SingleComment from "./Comment/SingleComment.jsx";

export default function CommentSection({ loggedIn, comments }) {


	return (
		<div className="comment-section-container">
			<h2>Comments</h2>
			{comments.map((comment) => (
				<SingleComment key={comment.id} {...comment} loggedIn={loggedIn} />
			))}
		</div>
	);
}
