import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";

import { RoutesDisplay } from "./components/RoutesDisplay/RoutesDisplay";
import { Content } from "./components/Content/Content";

import { useSpeedStore } from "./store";

import type { Route } from "./types/Route";

export const App = () => {
	const setSpeed = useSpeedStore((state) => state.setSpeed);
	const socketUrl = import.meta.env.VITE_SOCKET_URL;
	const [currentRoute, seCurrentRoute] = useState<Route | undefined>();
	const [action, setAction] = useState<"STOP_END" | "STOP_BEGIN">("STOP_BEGIN");
	const { lastMessage } = useWebSocket(socketUrl);
	useEffect(() => {
		if (lastMessage) {
			const parsedMessage = JSON.parse(lastMessage.data);
			console.log(parsedMessage);
			if (parsedMessage.type === "ROUTE") {
				seCurrentRoute(JSON.parse(lastMessage.data));
			}
			if (
				parsedMessage.type === "STOP_END" ||
				parsedMessage.type === "STOP_BEGIN"
			) {
				setAction(parsedMessage.type);
			}
			if (parsedMessage.type === "SPEED") {
				setSpeed(String(parsedMessage.speed));
			}
		}
	}, [lastMessage]);

	return (
		<div className="display">
			<RoutesDisplay type={action} data={currentRoute ?? undefined} />
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
