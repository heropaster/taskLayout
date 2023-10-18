import { RoutesDisplay } from "./components/RoutesDisplay/RoutesDisplay";
import { Content } from "./components/Content/Content";
export const App = () => {
	return (
		<div className="display">
			<RoutesDisplay type="routes" />
			<Content type="PULKOVO" />
		</div>
	);
};
