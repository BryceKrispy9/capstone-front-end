import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import PostItem from "../../posts/post-item";
import PostModal from "../modals/post-modal";

class Posts extends Component {
	constructor() {
		super();

		this.state = {
			postItems: [],
			totalCount: 0,
			currentPage: 0,
			isLoading: true,
			postModalIsOpen: false,
			// currentId: this.props.match.params.slug,
		};

		this.getPostItems = this.getPostItems.bind(this);
		this.activateInfiniteScroll();
		this.handleNewPostClick = this.handleNewPostClick.bind(this);
		this.handleModalClose = this.handleModalClose.bind(this);
	}

	handleModalClose() {
		this.setState({
			postModalIsOpen: false,
		});
	}

	handleNewPostClick() {
		this.setState({
			postModalIsOpen: true,
		});
	}

	activateInfiniteScroll() {
		window.onscroll = () => {
			if (
				window.innerHeight + document.documentElement.scrollTop ===
				document.documentElement.offsetHeight
			) {
				console.log("get more posts");
			}
		};
	}

	getPostItems() {
		this.setState({
			currentPage: this.state.currentPage + 1,
		});

		axios
			.get("https://swim-coach-app-flask-api.herokuapp.com/fourms")
			.then((response) => {
				this.setState({
					postItems: response.data,
					totalCount: response.data.meta,
					isLoading: false,
				});
				console.log(this.state.postItems);
			})
			.catch((error) => {
				console.log("getPostItems error", error);
			});
	}

	componentWillMount() {
		this.getPostItems();
	}

	fourmItems() {
		const postRecords = this.state.postItems.map((postItem) => {
			if (this.props.loggedInStatus === "LOGGED_IN") {
				return (
					<div key={postItem.id} className="admin-post-wrapper">
						<PostItem postItem={postItem} />
					</div>
				);
			} else {
				return <PostItem key={postItem.id} postItem={postItem} />;
			}
		});
		return postRecords;
	}

	// fourmItems() {
	// 	const postRecords = this.state.postItems.map((postItem) => {
	// 		return <PostItem key={postItem.id} postItem={postItem} />;
	// 	});
	// 	return postRecords;
	// }

	render() {
		return (
			<div className="fourms-wrapper">
				<PostModal
					handleModalClose={this.handleModalClose}
					modalIsOpen={this.state.postModalIsOpen}
				/>

				<div className="new-post-link">
					<a onClick={this.handleNewPostClick}>
						New Post <FontAwesomeIcon icon="plus-square" />
					</a>
				</div>

				<div className="fourms-container">{this.fourmItems()}</div>

				{this.state.isLoading ? (
					<div className="content-loader">
						<FontAwesomeIcon icon="spinner" spin />
					</div>
				) : null}
			</div>
		);
	}
}

export default Posts;
