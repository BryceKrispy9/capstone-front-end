import React, { Component } from "react";
import axios from "axios";

import RichTextEditor from "../components/forms/rich-text-editor";

export default class PostForm extends Component {
	constructor(props) {
		super(props);
		this.placeholder = "Set Details";

		this.state = {
			id: "",
			fourm_title: "",
			intensity_content: "",
			focus_content: "",
			equipment_content: "",
			yardage_content: "",
			current: {},
			apiUrl: "",
			apiAction: "put",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRichTextEditorChange =
			this.handleRichTextEditorChange.bind(this);
	}

	componentWillMount() {
		// if (this.props.editMode) {
		// 	this.setState({
		// 		id: this.props.post.id,
		// 		fourm_title: this.props.post.fourm_title,
		// 		intensity_content: this.props.post.intensity_content,
		// 		focus_content: this.props.post.focus_content,
		// 		equipment_content: this.props.post.equipment_content,
		// 		yardage_content: this.props.post.yardage_content,
		// 		current: this.props.post.current,
		// 		apiUrl: `https://swim-coach-app-flask-api.herokuapp.com/fourm/${this.props.id}`,
		// 		apiAction: "patch",
		// 	});
		// }
	}

	handleRichTextEditorChange(yardage_content) {
		this.setState({
			yardage_content,
		});
	}

	buildPost() {
		let postData = {
			fourm_title: this.state.fourm_title,
			intensity_content: this.state.intensity_content,
			focus_content: this.state.focus_content,
			equipment_content: this.state.equipment_content,
			yardage_content: this.state.yardage_content,
		};

		return postData;
	}

	handleSubmit(event) {
		axios({
			method: "post",
			url: `https://swim-coach-app-flask-api.herokuapp.com/fourm`,
			data: this.buildPost(),
		})
			.then((response) => {
				window.location.reload(false);

				if (this.props.editMode) {
					this.props.handleUpdateFormSubmission(response.data);
				} else {
					this.setState({ current: response.data });
				}
			})
			.catch((error) => {
				console.log("handleSubmit for post error", error);
			});

		event.preventDefault();
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="post-form-wrapper">
				<div className="one-column">
					<input
						type="text"
						onChange={this.handleChange}
						name="fourm_title"
						placeholder="Swim Set Title"
						value={this.state.fourm_title}
					/>
				</div>

				<div className="one-column">
					<input
						type="text"
						onChange={this.handleChange}
						name="intensity_content"
						placeholder="Intensity Content (Easy, Medium, Hard, Expert)"
						value={this.state.intensity_content}
					/>
				</div>

				<div className="one-column">
					<input
						type="text"
						onChange={this.handleChange}
						name="focus_content"
						placeholder="Focus (Stroke, Sprinting, DPS, etc.)"
						value={this.state.focus_content}
					/>
				</div>

				<div className="one-column">
					<input
						type="text"
						onChange={this.handleChange}
						name="equipment_content"
						placeholder="Equipment Needed (N/A for none)"
						value={this.state.equipment_content}
					/>
				</div>

				<div className="one-column">
					<RichTextEditor
						placeholder={this.placeholder}
						handleRichTextEditorChange={
							this.handleRichTextEditorChange
						}
						editMode={this.props.editMode}
						contentToEdit={
							this.state.intensity_content &&
							this.state.focus_content &&
							this.state.equipment_content &&
							this.state.yardage_content
						}
					/>
				</div>

				<button className="btn">Save</button>
			</form>
		);
	}
}
