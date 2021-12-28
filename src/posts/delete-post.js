import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DeletePost extends Component {
	constructor(props) {
		super(props);

		this.handleDeletePost = this.handleDeletePost.bind(this);
	}

	handleDeletePost(post) {
		axios
			.delete(
				`https://swim-coach-app-flask-api.herokuapp.com/fourm/${this.props.deletepost_id}`
			)
			.then((response) => {
				console.log("response from delete", response);
			})
			.catch((error) => {
				console.log("delete post error", error);
			});
	}

	render() {
		return (
			<div className="post-delete-wrapper">
				<a onClick={this.handleDeletePost}>
					<FontAwesomeIcon icon="trash-alt" />
				</a>
			</div>
		);
	}
}

export default DeletePost;
