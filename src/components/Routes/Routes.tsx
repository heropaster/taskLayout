import React from "react";
import "./Routes.scss";

import { useDataStore } from "../../store";
import { Stop } from "../Stop/Stop";
interface RoutesProps {
	type: string;
}
export const Routes: React.FC<RoutesProps> = ({ type }) => {
	const [stopTimes, stops] = useDataStore((state) => [
		state.stopTimes,
		state.stops,
	]);
	const maxStops = type === "STOP_END" ? 4 : 3;

	const isLast = stopTimes.length === 1;
	const showLast = stopTimes.length === 0;
	if (showLast) return <div className="last">Конечная</div>;

	const displayedStops = stops.slice(
		stopTimes[0].index,
		stopTimes[0].index + maxStops
	);

	return (
		<div
			className={`routes ${type === "moving" ? "moving" : ""} ${
				isLast ? "last-stops" : ""
			} `}
		>
			{displayedStops.map((stop, index) => {
				return (
					<Stop
						key={stop.index}
						time={String(stopTimes[index].time)}
						name={{ rus: stop.nameRus, eng: stop.nameEng }}
					/>
				);
			})}
			<div className={`line ${isLast ? "last-stops" : ""}`}></div>
		</div>
	);
};
