import React from "react";

interface VideoProps {
	src?: string;
}
import { useDataContext } from "../../DataContext";
export const Video: React.FC<VideoProps> = ({
	src = "/sdcard/content/video/showing_plan/4db241d2fb1e7c04a6ca267b9c1685d6.mp4",
}) => {
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
	};
	return (
		<video autoPlay={true} onEnded={() => CallbackOnEnd()}>
			<source src={`http://192.168.100.194:8080${src}`} type="video/mp4" />
		</video>
	);
};
