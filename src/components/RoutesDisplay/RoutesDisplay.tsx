import React from "react";

import { RouteHeader } from "./RouteHeader/RouteHeader";
import { InfoPanel } from "../InfoPanel/InfoPanel";
import { Routes } from "../Routes/Routes";
import { Transfers } from "../Transfers/Transfers";
import "./RoutesDisplay.scss";

interface RoutesDisplayProps {
	type: "routes" | "transfers";
}
export const RoutesDisplay: React.FC<RoutesDisplayProps> = ({ type }) => {
	const date = new Date();
	return (
		<div className="display__route">
			<RouteHeader type="stopped" />
			{type === "routes" ? <Routes /> : <Transfers />}

			<InfoPanel date={date} temp="+23°C" speed="17 км/ч" />
		</div>
	);
};
