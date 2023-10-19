import React, { useState } from "react";

import { RouteHeader } from "./RouteHeader/RouteHeader";
import { InfoPanel } from "../InfoPanel/InfoPanel";
import { Routes } from "../Routes/Routes";
import { Transfers } from "../Transfers/Transfers";
import "./RoutesDisplay.scss";
import { Route } from "../../types/Route";
interface RoutesDisplayProps {
	type: "STOP_END" | "STOP_BEGIN";
	data?: Route;
}
export const RoutesDisplay: React.FC<RoutesDisplayProps> = ({ type, data }) => {
	const date = new Date();
	return (
		<div className="display__route">
			<RouteHeader type={type} />
			{type === "STOP_END" ? <Routes type={type} /> : <Transfers />}

			<InfoPanel date={date} temp="+23°C" />
		</div>
	);
};
