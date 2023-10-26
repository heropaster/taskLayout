import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";

import { RoutesDisplay } from "./components/RoutesDisplay/RoutesDisplay";
import { Content } from "./components/Content/Content";
import { Video } from "./components/Video/Video";
import { TextTicker } from "./components/TextTicker/TextTicker";

import { useDataContext } from "./DataContext";
import { endContent } from "./utils/contentEnd";

export const App = () => {
	const state = useDataContext();
	const [isFullVideo, setisFullVideo] = useState(false);
	const [isTicker, setIsTicker] = useState(false);
	const [tickerText, setTickerText] = useState("");

	const [videoDuration, setVideoDuration] = useState(0);
	const socketIP = import.meta.env.VITE_SOCKET_URL;

	const { lastMessage } = useWebSocket(`ws://${socketIP.trim()}:23245`, {
		onOpen: () => console.log("opened"),
		onMessage: (event) => {
			const parsedMessage = JSON.parse(event.data);
			switch (parsedMessage.type) {
				case "ROUTE": {
					state?.dispatch({
						type: "UPDATE_STOPS",
						payload: JSON.stringify(parsedMessage.stops),
					});
					if (parsedMessage.stops[0] != undefined) {
						state?.dispatch({
							type: "UPDATE_CURRENT_STOP",
							payload: JSON.stringify(parsedMessage.stops[0]),
						});
					}
					state?.dispatch({
						type: "UPDATE_ROUTE",
						payload: JSON.stringify(parsedMessage),
					});
					break;
				}

				case "STOP_END":
				case "STOP_BEGIN":
					state?.dispatch({
						type: "UPDATE_CONTENT_END",
						payload: "",
					});
					state?.dispatch({
						type: "UPDATE_INDEX",
						payload: String(parsedMessage.index),
					});
					if (state?.state.stops[parsedMessage.index] !== undefined) {
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
				case "SPEED":
					state?.dispatch({
						type: "UPDATE_SPEED",
						payload: String(parsedMessage.speed),
					});
					break;
				case "PLAY_IMAGE":
				case "PLAY_VIDEO":
					state?.dispatch({
						type: "SWITCH_CONTENT",
						payload: "0",
					});
					state?.dispatch({
						type: "UPDATE_CONTENT",
						payload: JSON.stringify(parsedMessage),
					});
					endContent(
						parsedMessage.length * 1000,
						`http://${socketIP.trim()}:8080${parsedMessage.src}`,
						parsedMessage.type
					)
						?.catch((error) => {
							console.log(error);
							// sendMessage(
							// 	JSON.stringify({
							// 		type: "ERROR",
							// 		label: parsedMessage.label,
							// 	})
							// );
							console.log("Ошибка");
							throw error;
						})
						?.then((data) => {
							if (data === true || state?.state.isContentEnd) {
								// sendMessage(
								// 	JSON.stringify({
								// 		type: "COMPLETE",
								// 		label: parsedMessage.label,
								// 	})
								// );
								console.log("Отправил");
							}
						});

					break;
				case "PULKOVO":
					state?.dispatch({
						type: "SWITCH_CONTENT",
						payload: "1",
					});
					state?.dispatch({
						type: "UPDATE_PULKOVO",
						payload: JSON.stringify(parsedMessage),
					});
					break;
				case "PLAY_VIDEO_FULL":
					setisFullVideo(true);
					setVideoDuration(parsedMessage.duration);
					break;
				case "PLAY_TICKER":
					setIsTicker(true);
					setTickerText(parsedMessage.text);
					break;
			}
		}
	}, [lastMessage]);

	return (
		<div className="display">
			<RoutesDisplay />
			<Content />
			{isFullVideo && (
				<Video
					type="full"
					callback={() => setisFullVideo(false)}
					duration={videoDuration * 1000}
				/>
			)}
			{isTicker && (
				<TextTicker text={tickerText} callback={() => setIsTicker(false)} />
			)}
		</div>
	);
};
