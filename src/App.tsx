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
		setRoute,
		setStops,
		setCurrentStop,
		setStopTimes,
		// setSpeed,
		// setAction,
		// setCurrentStopIndex,
	] = useDataStore((state) => [
		state.stops,
		state.setRoute,
		state.setStops,
		state.setCurrentStop,
		state.setStopTimes,
		// state.setSpeed,
		// state.setAction,
		// state.setCurrentStopIndex,
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
					// setCurrentStopIndex(parsedMessage.index);
					state?.dispatch({
						type: "UPDATE_INDEX",
						payload: String(parsedMessage.index),
					});
					setCurrentStop(stops[parsedMessage.index]);
					// setAction(parsedMessage.type);
					state?.dispatch({
						type: "UPDATE_ACTION",
						payload: parsedMessage.type,
					});
					break;
				case "STOP_TIMES":
					setStopTimes(parsedMessage.stops);
					break;
			}
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
						type: "UPDATE_SPEED",
						payload: String(parsedMessage.speed),
					});
					break;
			}
		}
	}, [
		lastMessage,
		// setAction,
		setCurrentStop,
		// setCurrentStopIndex,
		setRoute,
		// setSpeed,
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
