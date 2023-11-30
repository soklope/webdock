import { React } from "react";

import "./SinglePostMeta.scss";
import Username from "../../Username/Username";
import LabelTag from "../../LabelTag/LabelTag";

export default function SinglePostMeta({ images }) {

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
			<div className="single-post-meta">
                {/* render/map through images if the image array from the post object has any images */}
				{images.length > 0 && (
                    <div>
                        <h3>Added image</h3>
						<div className="single-post-meta-image-container">
							{images.map((image) => (
								<div className="single-post-meta-image"
								key={image.id}
								>
									<img
										src={image.url}
										alt={`Image ${image.id}`}
									/>
								</div>
							))}
						</div>
					</div>
				)}
			<div>
				<h3>People liked</h3>
				<div>
					<Username
					user={"Test User"}
					isAdmin={true}
					/>
					<Username
					user={"Test User 2"}
					isAdmin={false}
					/>
				</div>
			</div>
			
			<div>
				<h4>
					This post has been marked as <LabelTag LabelColor={getColorTagFromStatus('Complete')} LabelStatus={'Complete'} />
				</h4>
			</div>
			</div>
		</>
	);
}
