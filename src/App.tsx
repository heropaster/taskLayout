import { useEffect } from "react";
import useWebSocket from "react-use-websocket";

import { RoutesDisplay } from "./components/RoutesDisplay/RoutesDisplay";
import { Content } from "./components/Content/Content";

import { useDataStore } from "./store";
import { useDataContext } from "./DataContext";

export const App = () => {
	const state = useDataContext();
	const [
		stops,
		setSpeed,
		setAction,
		setRoute,
		setStops,
		setCurrentStop,
		setCurrentStopIndex,
		setStopTimes,
	] = useDataStore((state) => [
		state.stops,
		state.setSpeed,
		state.setAction,
		state.setRoute,
		state.setStops,
		state.setCurrentStop,
		state.setCurrentStopIndex,
		state.setStopTimes,
	]);
	const socketUrl = import.meta.env.VITE_SOCKET_URL;
	const { lastMessage } = useWebSocket(socketUrl, {
		onOpen: () => console.log("opened"),
		onMessage: (event) => {
			// console.log(event);
			const parsedMessage = JSON.parse(event.data);
			switch (parsedMessage.type) {
				case "ROUTE": {
					setRoute(parsedMessage);
					setStops(parsedMessage.stops);
					setCurrentStop(parsedMessage.stops[0]);
					console.log(15);
					break;
				}
				case "STOP_END":
				case "STOP_BEGIN":
					setCurrentStopIndex(parsedMessage.index);
					setCurrentStop(stops[parsedMessage.index]);
					setAction(parsedMessage.type);
					break;
				case "STOP_TIMES":
					setStopTimes(parsedMessage.stops);
					break;
			}
			// if (parsedMessage.type === "ROUTE") {
			// }
			// if (
			// 	parsedMessage.type === "STOP_END" ||
			// 	parsedMessage.type === "STOP_BEGIN"
			// ) {
			// }
		},
	});
	useEffect(() => {
		if (lastMessage) {
			const parsedMessage = JSON.parse(lastMessage.data);
			console.log(parsedMessage);
			switch (parsedMessage.type) {
				case "ROUTE":
					console.log("ROUTE");
					break;

				case "SPEED":
					// setSpeed(String(parsedMessage.speed));
					state?.dispatch({
						type: "UPDATE_STATE",
						payload: String(parsedMessage.speed),
					});
					break;
			}
			// if (parsedMessage.type === "ROUTE") {
			// 	console.log("ROUTE");
			// }

			// if (parsedMessage.type === "STOP_TIMES") {
			// 	setStopTimes(parsedMessage.stops);
			// }
			// if (parsedMessage.type === "SPEED") {
			// 	setSpeed(String(parsedMessage.speed));
			// }
		}
	}, [
		lastMessage,
		setAction,
		setCurrentStop,
		setCurrentStopIndex,
		setRoute,
		setSpeed,
		setStopTimes,
		setStops,
		stops,
	]);

	return (
		<div className="display">
			<RoutesDisplay />
			<Content
				type="img"
				image={{
					type: "PLAY_IMAGE",
					src: "/sdcard/intro/intro_default.png",
					label: "Intro",
					length: 20,
				}}
			/>
		</div>
	);
};
