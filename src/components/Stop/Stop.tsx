import React from "react";
import StopName from "../StopName/StopName";
import ArrivalTime from "../ArrivalTIme/ArrivalTime";
import { StopNameT } from "../../types/StopName";
interface StopProps {
	name: StopNameT;
	time: string;
}
const Stop: React.FC<StopProps> = ({ name, time }) => {
	return (
		<div>
			<ArrivalTime time={time} />
			<StopName name={name} type="RouteStop" />
		</div>
	);
};
export default Stop;
