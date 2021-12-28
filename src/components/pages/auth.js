import React, { Component } from "react";
import Login from "../auth/login";
// import loginImage from "../../../static/assets/login-page-image.jpg";

export default class Auth extends Component {
	constructor(props) {
		super(props);

		this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this);
		this.handleUnsuccesfulAuth = this.handleUnsuccesfulAuth.bind(this);
	}

	handleSuccesfulAuth() {
		this.props.handleSuccesfulLogin();
		this.props.history.push("/");
	}

	handleUnsuccesfulAuth() {
		this.props.handleUnsuccessfulLogin();
	}

	render() {
		return (
			<div className="auth-page-wrapper">
				

				<div className="right-side">
					<Login
						handleSuccesfulAuth={this.handleSuccesfulAuth}
						handleUnsuccesfulAuth={this.handleUnsuccesfulAuth}
					/>
				</div>
			</div>
		);
	}
}
