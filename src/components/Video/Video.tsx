import React from "react";

import { useDataContext } from "../../DataContext";

import "./Video.scss";

interface VideoProps {
	src?: string;
	type: string;
	callback?: () => void;
	duration?: number;
}

export const Video: React.FC<VideoProps> = ({
	src = "/sdcard/content/video/showing_plan/4db241d2fb1e7c04a6ca267b9c1685d6.mp4",
	type,
	callback,
	duration,
}) => {
	console.log(duration);
	const state = useDataContext();
	const video = document.querySelector("video");
	if (video) {
		video.onloadeddata = () => {
			video?.play();
		};
	}
	const CallbackOnEnd = () => {
		state?.dispatch({
			type: "UPDATE_CONTENT_END",
			payload: "true",
		});
		if (callback) {
			callback();
		}
	};
	if (duration) {
		setTimeout(() => {
			CallbackOnEnd();
		}, duration);
	}
	return (
		<div className={`video-container ${type === "full" ? "full" : ""}`}>
			<video
				autoPlay={true}
				muted={true}
				onEnded={() => CallbackOnEnd()}
				width={"100%"}
			>
				<source src={`http://192.168.100.194:8080${src}`} type="video/mp4" />
			</video>
		</div>
	);
};
