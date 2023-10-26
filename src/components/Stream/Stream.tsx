import React from "react";
import ReactPlayer from "react-player";

import "./Stream.scss";
interface StreamProps {
	src?: string;
}
export const Stream: React.FC<StreamProps> = ({
	src = "https://www.youtube.com/watch?v=jfKfPfyJRdk",
}) => {
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
