import React, { useEffect } from "react";

import UpvoteBtn from "../../UpvoteBtn/UpvoteBtn";
import Username from "../../Username/Username";

import "./SinglePostHeading.scss";


export default function SinglePostHeading({ postTitle, postStatus, postDate, postCategory, postAuthor, postUpvotes }) {

	return (
		<>
			<div className="single-post-heading">
				<div>
					<UpvoteBtn
					numberOfUpvotes={postUpvotes}
					/>
				</div>
				<div className="single-post-heading__meta">
					<h1 className="single-post-heading__title">{postTitle}</h1>

					<div className="single-post-heading__meta-container">
						<div>STATUS: {postStatus} </div>
						<div className="single-post-heading__desktop">
							<div>Category: {postCategory}</div>
							<span>•</span>
							<div>Date: {postDate.toLocaleString()}</div>
							<span>•</span>
							<Username user={postAuthor} isAdmin={true} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
