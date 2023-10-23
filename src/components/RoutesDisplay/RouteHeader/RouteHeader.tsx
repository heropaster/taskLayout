import React from "react";

import { StopName } from "../../StopName/StopName";
import { RouteNumber } from "../../RouteNumber/RouteNumber";
import { Path } from "../../Path/Path";

import { useDataContext } from "../../../DataContext";

import "./RouteHeader.scss";


interface RouteHeaderProps {
	type: string;
}

export const RouteHeader: React.FC<RouteHeaderProps> = ({ type }) => {
	const state = useDataContext();

	const currentStop = state?.state.currentStop;
	const route = state?.state.route;
	const stops = state?.state.stops;

	return (
		<div
			key={type}
			className={`header ${
				type === "STOP_BEGIN" ? "header--stopped" : "header--moving"
			}`}
		>
			{type === "STOP_BEGIN" ? (
				stops!.length > 0 && (
					<StopName
						type="header"
						name={{
							rus: currentStop!.nameRus,
							eng: currentStop!.nameEng,
						}}
					/>
				)
			) : (
				<>
					<RouteNumber src={route?.icon} />
					{stops!.length > 0 && (
						<Path
							first={stops![0].nameRus}
							last={stops![stops!.length - 1].nameRus}
						/>
					)}
				</>
			)}
		</div>
	);
};
