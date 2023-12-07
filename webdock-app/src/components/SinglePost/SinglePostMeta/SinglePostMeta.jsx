import { React } from "react";

import "./SinglePostMeta.scss";
import Username from "../../Username/Username";
import LabelTag from "../../LabelTag/LabelTag";
import { getColorTagFromStatus } from "../../../helper/colorFromStatus";
import { checkAdmin } from "../../../helper/checkAdmin";

export default function SinglePostMeta({ images, upvoters }) {
	return (
		<>
			<div className="single-post-meta">
				{images}
				<div>
					<h3>People liked</h3>
					<div>
						{upvoters ?
							upvoters.map((user, index) => (
								<Username key={index} user={user.User.name} isAdmin={checkAdmin(user.User.email)} />
							))
							:
							<div>
								loading...
							</div>
						}
						<br />
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
