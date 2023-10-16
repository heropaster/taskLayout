import RoutesDisplay from "./components/RoutesDisplay/RoutesDisplay";
import Info from "./components/Info/Info";
const App = () => {
	return (
		<div className="display">
			<RoutesDisplay />
			<Info type="img" />
		</div>
	);
};

export default App;
