import React from "react";
import "./RouteNumber.scss";
interface RouteNumberProps {
	src: string;
}
export const RouteNumber: React.FC<RouteNumberProps> = ({ src }) => {
	return (
		<img className="route" src={`http://192.168.100.95:8080/${src}`} alt="" />
	);
};
