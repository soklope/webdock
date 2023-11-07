import React from "react";

import UpvoteBtn from "../../UpvoteBtn/UpvoteBtn";
import Username from "../../Username/Username";

import "./SinglePostHeading.scss";

export default function SinglePostHeading({ postData }) {
	return (
		<>
			<div className="single-post-heading">
				<div>
					<UpvoteBtn
					// numberOfUpvotes={33}
					/>
				</div>
				<div className="single-post-heading__meta">
					<h1 className="single-post-heading__title">TITLE HERE</h1>

					<div className="single-post-heading__meta-container">
						<div>STATUS: {postData.status} </div>
						<div>STATUS: {postData.status} </div>
						<div className="single-post-heading__desktop">
							<div>Category: {postData.category}</div>
							<span>•</span>
							<div>Date: {postData.publishedAt}</div>
							<span>•</span>
							<Username user={postData.userId} isAdmin={true} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
