import React from "react";
import "./StopName.scss";
import { useDataStore } from "../../store";
interface StopNameProps {
	type: string | undefined;
}

export const StopName: React.FC<StopNameProps> = ({ type }) => {
	const [currentStop] = useDataStore((state) => [state.currentStop]);
	return (
		<div className="stop-title">
			<h2 className={`stop-name ${type === "RouteStop" ? "route-stop" : ""}`}>
				{currentStop?.nameRus}
			</h2>
			<h3
				className={`stop-name stop-name--eng ${
					type === "RouteStop" ? "route-stop--eng" : ""
				}`}
			>
				{currentStop?.nameEng}
			</h3>
		</div>
	);
};
