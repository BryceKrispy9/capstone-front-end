import React from "react";
import { Link } from "react-router-dom";
import striptags from "striptags";
import Truncate from "react-truncate";
import DeletePost from "./delete-post";

const PostItem = (props) => {
	const {
		id,
		fourm_title,
		intensity_content,
		focus_content,
		equipment_content,
		yardage_content,
	} = props.postItem;

	return (
		<div>
			<Link to={`/p/${id}`}>
				<h1>{fourm_title}</h1>
			</Link>
			<div>
				<Truncate
					lines={2}
					ellipsis={
						<span>
							... <Link to={`/p/${id}`}>Read more</Link>
						</span>
					}
				>
					{striptags(intensity_content)}
				</Truncate>
			</div>
			<DeletePost deletepost_id={id} />
		</div>
	);
};

export default PostItem;
