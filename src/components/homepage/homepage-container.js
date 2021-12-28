import React, { Component } from "react";

import HomepageItem from "./homepage-item";

export default class HomepageContainer extends Component {
	constructor() {
		super();

		this.state = {
			pageTitle: "Please sign in to create new posts",
			isLoading: false,
			data: [
				{
					fourm_title: "My best swim sets",
				},
			],
		};
	}

	homepageItems() {
		return this.state.data.map((item) => {
			return <HomepageItem title={item.pageTitle} />;
		});
	}

	render() {
		if (this.state.isLoading) {
			return <div>Loading...</div>;
		}

		return (
			<div className="homepage-title">
				<h1>Swim Coach Central</h1>
				<h2>{this.state.pageTitle}</h2>

				{this.homepageItems()}
			</div>
		);
	}
}
