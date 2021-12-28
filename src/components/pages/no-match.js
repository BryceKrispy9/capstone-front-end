import React from "react";
import { Link } from "react-router-dom";

import lost from "../../../static/assets/lost-link.gif";

export default function () {
	return (
		<div className="no-match">
			<h2>We couldn't find that page</h2>
			<div className="no-match-link">
				<Link to="/">Return to homepage</Link>
				<div className="lost-link-gif">
					<img src={lost} alt="lost-link" />
				</div>
			</div>
		</div>
	);
}
