import React from "react";
// import axios from "axios";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationComponent = (props) => {
	const dynamicLink = (route, linkText) => {
		return (
			<div className="nav-link-wrapper">
				<NavLink to="/fourms/admin" activeClassName="nav-link-active">
					Add & Edit Sets
				</NavLink>
			</div>
		);
	};

	// const handleSignOut = () => {
	// 	axios
	// 		.get("https://swim-coach-app-flask-api.herokuapp.com/login")
	// 		.then((response) => {
	// 			if (response.status === 200) {
	// 				props.history.push("/");
	// 				props.handleSuccessfulLogout();
	// 			}
	// 			return response.data;
	// 		})
	// 		.catch((error) => {
	// 			console.log("Error signing out", error);
	// 		});
	// };

	const refreshPage = () => {
		window.location.reload(false);
	};

	return (
		<div className="nav-wrapper">
			<div className="left-side">
				<div className="nav-link-wrapper">
					<NavLink exact to="/" activeClassName="nav-link-active">
						Home
					</NavLink>
				</div>

				<div className="nav-link-wrapper">
					<NavLink to="/contact" activeClassName="nav-link-active">
						Contact
					</NavLink>
				</div>

				<div className="nav-link-wrapper">
					<NavLink to="/fourms" activeClassName="nav-link-active">
						View Sets
					</NavLink>
				</div>

				{props.loggedInStatus === "LOGGED_IN"
					? dynamicLink("/fourms", "Posts")
					: null}
			</div>

			<div className="right-side">
				An App built by Bryce Pearson
				{props.loggedInStatus === "LOGGED_IN" ? (
					<a onClick={refreshPage}>
						<FontAwesomeIcon icon="sign-out-alt" />
					</a>
				) : null}
			</div>
		</div>
	);
};

export default NavigationComponent;
