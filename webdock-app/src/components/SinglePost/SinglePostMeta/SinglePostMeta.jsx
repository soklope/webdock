import { React } from "react";
import { Link } from 'react-router-dom';

import "./SinglePostMeta.scss";
import Username from "../../Username/Username";

export default function SinglePostMeta({ images, postId }) {
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
				<h3>Merged with</h3>
				{postId == 1 ? <Link to="/posts/2"> <div> Merged with /post/2 </div> </Link>
				:
				postId == 2 ?
				<Link to="/posts/1"> <div> Merged with /post/1 </div> </Link>
				:
				""
			}
				<div>merged content here</div>
			</div>
			</div>
		</>
	);
}
