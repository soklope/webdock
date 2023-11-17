import { React } from "react";

import "./SinglePostMeta.scss";

export default function SinglePostMeta({ images }) {
	return (
		<>
			<div>
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
			</div>
			<div>
				<h3>People liked</h3>
				<div>Users here</div>
			</div>
			<div>
				<h3>Merged with</h3>
				<div>merged content here</div>
			</div>
		</>
	);
}
