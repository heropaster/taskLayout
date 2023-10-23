import { useEffect } from "react";
import useWebSocket from "react-use-websocket";

import { RoutesDisplay } from "./components/RoutesDisplay/RoutesDisplay";
import { Content } from "./components/Content/Content";

import { useDataContext } from "./DataContext";

export const App = () => {
	const state = useDataContext();

	const socketUrl = import.meta.env.VITE_SOCKET_URL;
	const { lastMessage } = useWebSocket(socketUrl, {
		onOpen: () => console.log("opened"),
		onMessage: (event) => {
			// console.log(event);
			const parsedMessage = JSON.parse(event.data);
			switch (parsedMessage.type) {
				case "ROUTE": {
					state?.dispatch({
						type: "UPDATE_STOPS",
						payload: JSON.stringify(parsedMessage.stops),
					});
					state?.dispatch({
						type: "UPDATE_CURRENT_STOP",
						payload: JSON.stringify(parsedMessage.stops[0]),
					});
					state?.dispatch({
						type: "UPDATE_ROUTE",
						payload: JSON.stringify(parsedMessage),
					});
					console.log(15);
					break;
				}
				case "STOP_END":
				case "STOP_BEGIN":
					if (state?.state.stops.length !== 0) {
						state?.dispatch({
							type: "UPDATE_INDEX",
							payload: String(parsedMessage.index),
						});
						state?.dispatch({
							type: "UPDATE_CURRENT_STOP",
							payload: JSON.stringify(state?.state.stops[parsedMessage.index]),
						});
					}

					state?.dispatch({
						type: "UPDATE_ACTION",
						payload: parsedMessage.type,
					});
					break;
				case "STOP_TIMES":
					state?.dispatch({
						type: "UPDATE_STOP_TIMES",
						payload: JSON.stringify(parsedMessage.stops),
					});
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
					state?.dispatch({
						type: "UPDATE_SPEED",
						payload: String(parsedMessage.speed),
					});
					break;
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
