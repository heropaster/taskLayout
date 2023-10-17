import { RoutesDisplay } from "./components/RoutesDisplay/RoutesDisplay";
import { Content } from "./components/Info/Content";
export const App = () => {
	return (
		<div className="display">
			<RoutesDisplay type="routes" />
			<Content type="img" />
		</div>
	);
};
