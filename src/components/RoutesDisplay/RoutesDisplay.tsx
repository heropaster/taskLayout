import RouteHeader from "./RouteHeader/RouteHeader";
import Routes from "../Routes/Routes";
import "./RoutesDisplay.scss";
const RoutesDisplay = () => {
	return (
		<div className="display__route">
			<RouteHeader />
			<Routes />
		</div>
	);
};
export default RoutesDisplay;
