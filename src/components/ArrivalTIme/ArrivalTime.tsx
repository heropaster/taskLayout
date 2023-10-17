import React from "react";
import "./ArrivalTime.scss";
interface ArrivalTimeProps {
	time: string;
}
export const ArrivalTime: React.FC<ArrivalTimeProps> = ({ time }) => {
	return (
		<p className="arrival">
			<span className="time">{time}</span>
			<span className="minutes">мин</span>
		</p>
	);
};
