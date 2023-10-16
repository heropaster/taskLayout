import RouteHeader from "./RouteHeader/RouteHeader";
import InfoPanel from "../InfoPanel/InfoPanel";
import Routes from "../Routes/Routes";

import "./RoutesDisplay.scss";
const RoutesDisplay = () => {
	const date = new Date();
	return (
		<div className="display__route">
			<RouteHeader />
			<Routes />
			<InfoPanel
				// time={formatDate(date)}
				date={date}
				temp="+23°C"
				wind="17 км/ч"
			/>
		</div>
	);
};
export default RoutesDisplay;
