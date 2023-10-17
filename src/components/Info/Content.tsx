import React from "react";
import "./Content.scss";

interface ContentProps {
	type: string;
}
import content from "../../data/contentData.json";
export const Content: React.FC<ContentProps> = ({ type }) => {
	return (
		type === "img" && (
			<div
				className="display__info display__info--image"
				style={{
					backgroundImage: `url(http://192.168.100.95:8080/${content.src})`,
				}}
			></div>
		)
	);
};
