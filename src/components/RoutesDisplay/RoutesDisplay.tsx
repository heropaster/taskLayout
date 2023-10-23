import { RouteHeader } from "./RouteHeader/RouteHeader";
import { InfoPanel } from "../InfoPanel/InfoPanel";
import { Routes } from "../Routes/Routes";
import { Transfers } from "../Transfers/Transfers";

import { useDataContext } from "../../DataContext";

import "./RoutesDisplay.scss";

export const RoutesDisplay = () => {
	const state = useDataContext();

	// const [action] = useDataStore((state) => [state.action]);

	const date = new Date();
	return (
		<div className="display__route">
			<RouteHeader type={state!.state.action} />
			{state!.state.action === "STOP_END" ? (
				<Routes type={state!.state.action} />
			) : (
				<Transfers />
			)}

			<InfoPanel date={date} temp="+23°C" />
		</div>
	);
};
