import React from "react";
import "./Info.scss";
import back from "../../assets/images/BulvarRokossovskogo.jpg";
interface InfoProps {
	type: string;
}
const Info: React.FC<InfoProps> = ({ type }) => {
	return (
		type === "img" && (
			<div className="display__info">
				<img src={back} alt="" />
			</div>
		)
	);
};
export default Info;
