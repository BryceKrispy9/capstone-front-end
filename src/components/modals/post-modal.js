import React, { Component } from "react";
import ReactModal from "react-modal";

import UpdateForm from "../../posts/update-form";
import PostForm from "../../posts/post-form";

ReactModal.setAppElement(".app-wrapper");

export default class PostModal extends Component {
	constructor(props) {
		super(props);

		this.customStyles = {
			content: {
				top: "50%",
				left: "50%",
				right: "auto",
				marginRight: "-50%",
				transform: "translate(-50%, -50%)",
				width: "800px",
			},
			overlay: {
				backgroundColor: "rgba(1, 1, 1, 0.50)",
			},
		};

		this.handleSuccessfullPostSubmission =
			this.handleSuccessfullPostSubmission.bind(this);
	}

	handleSuccessfullPostSubmission() {
		console.log("post from post form", post);
	}

	render() {
		return (
			<div>
				<ReactModal
					style={this.customStyles}
					onRequestClose={() => {
						this.props.handleModalClose();
					}}
					isOpen={this.props.modalIsOpen}
				>
					<PostForm />
				</ReactModal>
			</div>
		);
	}
}
