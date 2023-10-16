import ArrivalTime from "../ArrivalTIme/ArrivalTime";
import "./Routes.scss";
const Routes = () => {
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
			<ArrivalTime time="2" />
			<ArrivalTime time="8" />
			<ArrivalTime time="15" />
		</div>
	);
};
export default Routes;
