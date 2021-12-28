import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import NavigationComponent from "../navigation/navigation-container";
import ViewPosts from "./pages/posts";
import PostDetail from "./pages/post-detail";
import Contact from "./pages/contact";
import NoMatch from "./pages/no-match";
import Home from "./pages/home";
import AllPosts from "./pages/all-posts";
import Icons from "../components/helpers/icons";

export default class App extends Component {
	constructor(props) {
		super(props);

		Icons();

		this.state = {
			loggedInStatus: "NOT_LOGGED_IN",
		};

		this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
		this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
		this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
	}

	handleSuccessfulLogin() {
		this.setState({
			loggedInStatus: "LOGGED_IN",
		});
	}

	handleUnsuccessfulLogin() {
		this.setState({
			loggedInStatus: "NOT_LOGGED_IN",
		});
	}

	handleSuccessfulLogout() {
		this.state({
			loggedInStatus: "NOT_LOGGED_IN",
		});
	}

	checkLoginStatus() {
		return axios
			.get("https://swim-coach-app-flask-api.herokuapp.com/login")
			.then((response) => {
				const loggedIn = response.data.logged_in;
				const loggedInStatus = this.state.loggedInStatus;

				if (loggedIn && loggedInStatus === "LOGGED_IN") {
					return loggedIn;
				} else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
					this.setState({
						loggedInStatus: "LOGGED_IN",
					});
				} else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
					this.setState({
						loggedInStatus: "NOT_LOGGED_IN",
					});
				}
			});
		// .catch((error) => {
		// 	console.log("Error", error);
		// });
	}

	componentDidMount() {
		this.checkLoginStatus();
	}

	authorizedPages() {
		return [<Route key="fourms" path="/fourms" component={ViewPosts} />];
	}

	render() {
		return (
			<div className="app">
				<Router>
					<div className="navigation-wrapper">
						<div className="logo-img-wrapper">
							<img
								src={require("../../static/assets/Logo.png")}
								alt="SwimCoachLogo"
							/>
						</div>
						<NavigationComponent
							loggedInStatus={this.state.loggedInStatus}
							handleSuccessfulLogout={this.handleSuccessfulLogout}
						/>

						{/* <h2>{this.state.loggedInStatus}</h2> */}

						<Switch>
							<Route
								exact
								path="/"
								render={(props) => (
									<Home
										{...props}
										handleSuccessfulLogin={
											this.handleSuccessfulLogin
										}
										handleUnsuccessfulLogin={
											this.handleUnsuccessfulLogin
										}
									/>
								)}
							/>

							{/* <Route path="/auth" component={Auth} /> */}

							<Route path="/p/:slug" component={PostDetail} />

							<Route path="/contact" component={Contact} />

							{this.state.loggedInStatus === "LOGGED_IN"
								? this.authorizedPages()
								: null}
							<Route
								exact
								path="/fourms/:slug"
								component={PostDetail}
							/>

							<Route path="/fourms" component={AllPosts} />

							<Route component={NoMatch} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}
