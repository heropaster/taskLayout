import React from "react";

import "./RouteNumber.scss";

interface RouteNumberProps {
	src: string | undefined;
}

export const RouteNumber: React.FC<RouteNumberProps> = ({ src }) => {
	const socketIP = import.meta.env.VITE_SOCKET_URL;
	return (
		<img
			className="route"
			src={`http://${socketIP.trim()}:8080/${src}`}
			alt=""
		/>
	);
};
