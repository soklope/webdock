import React from "react";

import "./Username.scss";

export default function Username({ isAdmin, user }) {
	return (
		<div>
			{isAdmin ? (
				<div className="admin">
					Admin user  {user} <span className="admin--logo">  </span>
				</div>
			) : (
				<div className="user"> Normal user {user} </div>
			)}
		</div>
	);
}
