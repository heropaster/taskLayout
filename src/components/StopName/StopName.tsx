import React from "react";
import "./StopName.scss";
import { StopNameT } from "../../types/StopName";
interface StopNameProps {
	name: StopNameT;
	type: string;
}

const StopName: React.FC<StopNameProps> = ({ name, type }) => {
	return (
		<div className="stop-title">
			<h2 className={`stop-name ${type === "RouteStop" && "route-stop"}`}>
				{name.ru}
			</h2>
			<h3
				className={`stop-name stop-name--eng ${
					type === "RouteStop" && "route-stop--eng"
				}`}
			>
				{name.eng}
			</h3>
		</div>
	);
};
export default StopName;
