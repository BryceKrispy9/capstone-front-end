import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
	return (
		<div className="content-page-wrapper">
			<img
				className="left-column"
				src={require("../../../static/assets/contact-page-image.jpg")}
				alt="SwimCoachLogo"
			/>

			<div className="right-column">
				<div className="contact-bullet-points">
					<div className="bullet-point-group">
						<div className="icon">
							<FontAwesomeIcon icon="dice-d6" />
						</div>

						<div className="text">Bryce Pearson</div>
					</div>

					<div className="bullet-point-group">
						<div className="icon">
							<FontAwesomeIcon icon="hashtag" />
						</div>

						<div className="text">pearsonbryceb</div>
					</div>

					<div className="bullet-point-group">
						<div className="icon">
							<FontAwesomeIcon icon="envelope" />
						</div>

						<div className="text">brycepearson9@gmail.com</div>
					</div>
				</div>
			</div>
		</div>
	);
}
