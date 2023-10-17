import { Stop } from "../Stop/Stop";
import "./Routes.scss";
import { stops } from "../../data/stops";
export const Routes = () => {
	return (
		<div className="routes">
			{stops.map((stop) => {
				return <Stop key={stop.id} time={stop.time} name={stop.name} />;
			})}
			<div className="line"></div>
		</div>
	);
};
