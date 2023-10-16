import { useId } from "react";

import Stop from "../Stop/Stop";
import "./Routes.scss";

const Routes = () => {
	const key = useId();
	const stops = [
		{
			name: {
				ru: "Вагонеточное депо имени мёдоеда",
				eng: "Trolley depot named honeyeater",
			},
			time: "2",
		},
		{
			name: {
				ru: "ЦУМ",
				eng: "TSUM",
			},
			time: "8",
		},
		{
			name: {
				ru: "Старопоскребышная имени Котофея",
				eng: "Cotophey's Old Scrappy",
			},
			time: "15",
		},
	];
	return (
		<div className="routes">
			{stops.map((stop) => {
				return <Stop key={key} time={stop.time} name={stop.name} />;
			})}
		</div>
	);
};
export default Routes;
