import React, { Component } from "react";
import Login from "../auth/login";
import loginImage from "../../../static/assets/login-page-image.jpg";

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this);
		this.handleUnsuccesfulAuth = this.handleUnsuccesfulAuth.bind(this);
	}

	handleSuccesfulAuth() {
		this.props.handleSuccessfulLogin();
		this.props.history.push("/");
	}

	handleUnsuccesfulAuth() {
		this.props.handleUnsuccessfulLogin();
	}

	render() {
		return (
			<div className="auth-page-wrapper">
				{/* <div
					className="left-side"
					style={{
						backgroundImage: `url(${loginImage})`,
					}}
				/> */}

				<div className="right-side">
					<Login
						handleSuccesfulAuth={this.handleSuccesfulAuth}
						handleUnsuccessfulAuth={this.handleUnsuccesfulAuth}
					/>
				</div>
			</div>
		);
	}
}
