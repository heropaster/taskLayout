import React from "react";
import { useDataStore } from "../../store";
import { RouteHeader } from "./RouteHeader/RouteHeader";
import { InfoPanel } from "../InfoPanel/InfoPanel";
import { Routes } from "../Routes/Routes";
import { Transfers } from "../Transfers/Transfers";
import type { Route } from "../../types/Route";
import "./RoutesDisplay.scss";

export const RoutesDisplay = () => {
	const [action] = useDataStore((state) => [state.action]);

	const date = new Date();
	return (
		<div className="display__route">
			<RouteHeader type={action} />
			{action === "STOP_END" ? <Routes type={action} /> : <Transfers />}

			<InfoPanel date={date} temp="+23°C" />
		</div>
	);
};
