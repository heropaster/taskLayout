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
			<span className="circle-container">
				<span className="circle"></span>
			</span>
		</p>
	);
};