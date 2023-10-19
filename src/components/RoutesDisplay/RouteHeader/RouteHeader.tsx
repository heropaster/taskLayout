import React from "react";

import { StopName } from "../../StopName/StopName";
import { RouteNumber } from "../../RouteNumber/RouteNumber";
import { Path } from "../../Path/Path";

import data from ".//../../../data/mockData.json";
// import { stops } from "../../../data/stops";
import "./RouteHeader.scss";
import { useDataStore } from "../../../store";
interface RouteHeaderProps {
	type: string;
}
export const RouteHeader: React.FC<RouteHeaderProps> = ({ type }) => {
	const [stops, currentStop] = useDataStore((state) => [
		state.stops,
		state.currentStop,
	]);

	return (
		<div
			className={`header ${
				type === "STOP_BEGIN" ? "header--stopped" : "header--moving"
			}`}
		>
			{type === "STOP_BEGIN" ? (
				<StopName
					type="header"
					name={{ rus: currentStop.nameRus, eng: currentStop.nameEng }}
				/>
			) : (
				<>
					<RouteNumber src={data.icon} />
					{stops.length > 0 && (
						<Path
							first={stops[0].nameRus}
							last={stops[stops.length - 1].nameRus}
						/>
					)}
				</>
			)}
		</div>
	);
};
