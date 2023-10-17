import React, { useState } from "react";

import { RouteHeader } from "./RouteHeader/RouteHeader";
import { InfoPanel } from "../InfoPanel/InfoPanel";
import { Routes } from "../Routes/Routes";
import { Transfers } from "../Transfers/Transfers";
import "./RoutesDisplay.scss";
import { HeaderType } from "../../types/HeaderType";
interface RoutesDisplayProps {
	type: "routes" | "transfers";
}
export const RoutesDisplay: React.FC<RoutesDisplayProps> = ({ type }) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [headerType, setHeaderType] = useState<HeaderType>("moving");
	// setHeaderType("stopped"); //Затычка(Функция пригодится когда нужно будет на основе полученных от вебсокета данных менять значение)

	const date = new Date();
	return (
		<div className="display__route">
			<RouteHeader type={headerType} />
			{type === "routes" ? <Routes type={headerType} /> : <Transfers />}

			<InfoPanel date={date} temp="+23°C" speed="17 км/ч" />
		</div>
	);
};
