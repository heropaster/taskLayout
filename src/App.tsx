import { RoutesDisplay } from "./components/RoutesDisplay/RoutesDisplay";
import { Content } from "./components/Info/Content";
export const App = () => {
	return (
		<div className="display">
			<RoutesDisplay type="transfers" />
			<Content type="img" />
		</div>
	);
};
