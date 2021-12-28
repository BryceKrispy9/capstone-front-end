import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AllPosts from "../pages/all-posts";

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			errorText: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
			errorText: "",
		});
	}

	handleSubmit(event) {
		axios
			.post("https://swim-coach-app-flask-api.herokuapp.com/login", {
				username: this.state.username,
				password: this.state.password,
			})
			.then((response) => {
				if (response.status == 200) {
					this.props.handleSuccesfulAuth();
				} else {
					this.setState({
						errorText: "Wrong email or password",
					});
					this.props.handleUnsuccessfulAuth();
				}
			})
			.catch((error) => {
				this.setState({
					errorText: "An error occurred",
				});
				this.props.handleUnsuccessfulAuth();
			});

		event.preventDefault();
	}

	render() {
		return (
			<div className="login-page-input">
				<h1>Welcome to Swim Set Central!</h1>
				<h1>Login to add new posts</h1>

				<div>{this.state.errorText}</div>

				<form
					onSubmit={this.handleSubmit}
					className="login-form-wrapper"
				>
					<div className="login-wrapper">
						<div className="form-group">
							<FontAwesomeIcon icon="user" />
							<input
								className="username"
								type="username"
								name="username"
								placeholder="Username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
						</div>

						<div className="form-group">
							<FontAwesomeIcon icon="lock" />
							<input
								className="password"
								type="password"
								name="password"
								placeholder="Password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</div>
					</div>

					<button className="login-button" type="submit" path="/fourms" onClick={AllPosts}>
						Login
					</button>
				</form>
			</div>
		);
	}
}
