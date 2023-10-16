import StopName from "../../StopName/StopName";

import "./RouteHeader.scss";
const RouteHeader = () => {
	return (
		<div className="header">
			<StopName
				type="header"
				name={{ ru: "Бульвар Рокоссовского", eng: "Bulvar Rokossovskogo" }}
			/>
		</div>
	);
};
export default RouteHeader;
