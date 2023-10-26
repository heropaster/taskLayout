import React from "react";
import ReactPlayer from "react-player";

import "./Stream.scss";
import { useDataContext } from "../../DataContext";
interface StreamProps {
	src?: string;
	length: string;
}
export const Stream: React.FC<StreamProps> = ({
	src = "https://www.youtube.com/watch?v=jfKfPfyJRdk",
	length,
}) => {
	const state = useDataContext();

	setTimeout(() => {
		state?.dispatch({
			type: "SWITCH_CONTENT",
			payload: "assets",
		});
	}, Number(length) * 1000);
	return (
		<div className="stream-container">
			<ReactPlayer
				url={src}
				playing={true}
				width="100%"
				height="100%"
				volume={0}
				muted={true}
			/>
			;
		</div>
	);
};
