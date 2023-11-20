import React, { useEffect } from "react";

import UpvoteBtn from "../../UpvoteBtn/UpvoteBtn";
import Username from "../../Username/Username";

import "./SinglePostHeading.scss";
import LabelTag from "../../LabelTag/LabelTag";

export default function SinglePostHeading({ postTitle, postStatus, postDate, postCategory, postAuthor, postUpvotes }) {

    function getColorTagFromStatus(status) {
        switch (status) {
            case 'My Post':
                return 'tag-my-post-color';
            case 'Review':
                return 'tag-review-color';
            case 'Planned':
                return 'tag-planned-color';
            case 'In Progress':
                return 'tag-in-progress-color';
            case 'Complete':
                return 'tag-complete-color';
            default:
                return '';
        }
    }

	return (
		<>
			<div className="single-post-heading">
				<div className="single-post-heading__meta">
					<h1 className="single-post-heading__title">{postTitle}</h1>

					<div className="single-post-heading__meta-container">
						<LabelTag 
							LabelStatus={postStatus}
							LabelColor={getColorTagFromStatus(postStatus)}
						/>
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
