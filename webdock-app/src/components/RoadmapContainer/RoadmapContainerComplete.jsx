import { useState, useEffect } from "react";

import "./RoadmapContainer.scss";

import { completeArrayDb } from "../../dummyDb";
import RoadmapChildren from "../RoadmapChildren/RoadmapChildren";

export default function RoadmapContainerComplete() {
	const [containerIsOpen, setContainerIsOpen] = useState(false);
	const [postCount, setPostCount] = useState(0);
	
	useEffect(() => {
		setPostCount(completeArrayDb.length);
	}, []);

	const openContainer = () => {
		setContainerIsOpen(!containerIsOpen);
	};

	return (
		<>
			<div className="roadmap-container">
				<div
					className="roadmap-container__tooltip"
					onClick={openContainer}
				>
					<p>Complete</p>
					<span
						className={`roadmap-container__dropdown-icon complete-color ${
							containerIsOpen ? "rotate" : ""
						}`}
					></span>
					<p className="roadmap-container__postcount">{postCount}</p>
					<div
						className={`roadmap-container__color-indicator-complete`}
					/>
				</div>

				{containerIsOpen && (
					<div className="roadmap-container__dropdown">
						<>
							{completeArrayDb.map((post, index) => (
								<div
									key={index}
									className="roadmap-child-container"
								>
									<RoadmapChildren
										id={post.id}
										title={post.title}
										category={post.category}
										status={post.status}
										numberOfComments={post.numberOfComments}
										totalUpvotes={post.numberOfUpvotes}
										statusColor={"tag-complete-color"}
									/>
								</div>
							))}
						</>
					</div>
				)}

				<div className="roadmap-container__children">
					<>
						{completeArrayDb.map((post) => (
							// link to needs to be post.id, its currently not in the dummydatabase
							<div
								key={post.id}
								className="roadmap-child-container"
							>
								<RoadmapChildren
									id={post.id}
									title={post.title}
									category={post.category}
									status={post.status}
									numberOfComments={post.numberOfComments}
									totalUpvotes={post.numberOfUpvotes}
									statusColor={"tag-complete-color"}
								/>
							</div>
						))}
					</>
				</div>
			</div>
		</>
	);
}
