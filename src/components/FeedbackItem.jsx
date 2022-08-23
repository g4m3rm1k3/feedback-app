import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";

function FeedbackItem({ id, rating, text }) {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
	const handleClick = () => {
		deleteFeedback(id);
	};
	const handleEdit = () => {
		editFeedback({ id, rating, text });
	};
	return (
		<Card>
			<div className="num-display">{rating}</div>
			<button onClick={handleClick} className="close">
				<FaTimes color="purple" />
			</button>
			<button onClick={handleEdit} className="edit">
				<FaEdit color="purple" />
			</button>
			<div className="text-display">{text}</div>
		</Card>
	);
}

export default FeedbackItem;
