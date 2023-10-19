import { useEffect } from "react";
import useWebSocket from "react-use-websocket";

import { RoutesDisplay } from "./components/RoutesDisplay/RoutesDisplay";
import { Content } from "./components/Content/Content";

import { useDataStore } from "./store";

export const App = () => {
	const [
		setSpeed,
		setAction,
		setRoute,
		setStops,
		setCurrentStop,
		setCurrentStopIndex,
	] = useDataStore((state) => [
		state.setSpeed,
		state.setAction,
		state.setRoute,
		state.setStops,
		state.setCurrentStop,
		state.setCurrentStopIndex,
	]);
	const socketUrl = import.meta.env.VITE_SOCKET_URL;
	const { lastMessage } = useWebSocket(socketUrl, {
		onOpen: () => console.log("opened"),
	});
	console.log(lastMessage);
	useEffect(() => {
		if (lastMessage) {
			const parsedMessage = JSON.parse(lastMessage.data);
			// console.log(parsedMessage);
			if (parsedMessage.type === "ROUTE") {
				setRoute(parsedMessage);
				setStops(parsedMessage.stops);
				setCurrentStop(parsedMessage[0]);
			}
			if (
				parsedMessage.type === "STOP_END" ||
				parsedMessage.type === "STOP_BEGIN"
			) {
				setCurrentStopIndex(parsedMessage.index);
				setAction(parsedMessage.type);
			}
			if (parsedMessage.type === "STOP_TIMES") {
				setCurrentStopIndex(parsedMessage.stops[0].index - 1);
			}
			if (parsedMessage.type === "SPEED") {
				setSpeed(String(parsedMessage.speed));
			}
		}
	}, [lastMessage]);

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
