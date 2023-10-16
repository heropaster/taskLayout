import React from "react";
import "./ArrivalTime.scss";
interface ArrivalTimeProps {
	time: string;
}
const ArrivalTime: React.FC<ArrivalTimeProps> = ({ time }) => {
	return (
		<p className="arrival">
			<span className="time">{time}</span>
			<span className="minutes">мин</span>
		</p>
	);
};
export default ArrivalTime;
