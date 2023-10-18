import React from "react";
import "./Stand.scss";
import { StandSide } from "../../types/StandSide";
interface StandProps {
	left: StandSide;
	right: StandSide;
}
export const Stand: React.FC<StandProps> = ({ left, right }) => {
	return (
		<div className="stand">
			<div className="stand__side side--left">
				<span>{left.first}</span>
				<span className="between-int"></span>
				<span>{left.second}</span>
			</div>
			<span className="between"></span>
			<div className="stand__side side--right">
				<span>{right.first}</span>
				<span className="between-int"></span>
				<span>{right.second}</span>
			</div>
		</div>
	);
};
