import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

import UpdateForm from "../../posts/update-form";

export default class PostDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentId: this.props.match.params.slug,
			postItem: {},
			editMode: false,
		};

		this.handleEditClick = this.handleEditClick.bind(this);
		this.handleUpdateFormSubmission =
			this.handleUpdateFormSubmission.bind(this);
	}

	handleUpdateFormSubmission(post) {
		this.setState({
			postItem: post,
			editMode: false,
		});
	}

	handleEditClick() {
		this.setState({ editMode: true });
	}

	getPostItem() {
		axios
			.get(
				`https://swim-coach-app-flask-api.herokuapp.com/fourm/${this.state.currentId}`
			)
			.then((response) => {
				this.setState({
					postItem: response.data,
				});
			})
			.catch((error) => {
				console.log("getPostItem error", error);
			});
	}

	componentDidMount() {
		this.getPostItem();
	}

	render() {
		const {
			fourm_title,
			intensity_content,
			focus_content,
			equipment_content,
			yardage_content,
		} = this.state.postItem;

		const contentManager = () => {
			if (this.state.editMode) {
				return (
					<UpdateForm
						editMode={this.state.editMode}
						handleUpdateFormSubmission={
							this.handleUpdateFormSubmission
						}
						post={this.state.postItem}
					/>
				);
			} else {
				return (
					<div className="content-container">
						<h1 onClick={this.handleEditClick}>{fourm_title}</h1>

						<div className="content">
							<div>{ReactHtmlParser(intensity_content)}</div>
							<div>{ReactHtmlParser(focus_content)}</div>
							<div>{ReactHtmlParser(equipment_content)}</div>
							<div>{ReactHtmlParser(yardage_content)}</div>
						</div>
					</div>
				);
			}
		};

		return <div className="post-container">{contentManager()}</div>;
	}
}
