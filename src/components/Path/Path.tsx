import React from "react";
import "./Path.scss";

interface PathProps {
	first: string;
	last: string;
}
export const Path: React.FC<PathProps> = ({ first, last }) => {
	return (
		<h2 className="path">
			{first} &ndash; {last}
		</h2>
	);
};
