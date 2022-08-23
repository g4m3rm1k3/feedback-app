import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
	const { feedback } = useContext(FeedbackContext);
	const length = feedback.length;
	const avg = feedback.reduce((acc, item) => acc + item.rating, 0) / length;

	return (
		<div className="feedback-stats">
			<h4>{length}</h4>
			<h4>Average Rating: {(avg && avg.toFixed(1)) || 0}</h4>
		</div>
	);
}

export default FeedbackStats;
