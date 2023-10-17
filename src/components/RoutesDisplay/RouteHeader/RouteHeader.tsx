import React from "react";

import { StopName } from "../../StopName/StopName";
import { RouteNumber } from "../../RouteNumber/RouteNumber";
import { Path } from "../../Path/Path";

import data from ".//../../../data/mockData.json";
import { stops } from "../../../data/stops";
import "./RouteHeader.scss";

interface RouteHeaderProps {
	type: "stopped" | "moving";
}
export const RouteHeader: React.FC<RouteHeaderProps> = ({ type }) => {
	return (
		<div
			className={`header ${
				type === "stopped" ? "header--stopped" : "header--moving"
			}`}
		>
			{type === "stopped" ? (
				<StopName
					type="header"
					name={{ ru: data.stops[0].nameRus, eng: data.stops[0].nameEng }}
				/>
			) : (
				<>
					<RouteNumber src={data.icon} />
					<Path
						first={data.stops[0].nameRus}
						last={data.stops[stops.length - 1].nameRus}
					/>
				</>
			)}
		</div>
	);
};
