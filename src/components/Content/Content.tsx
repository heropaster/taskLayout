import React, { useEffect, useState } from "react";

import { Reception } from "../Reception/Reception";
import { Table } from "../Table/Table";

import "./Content.scss";

import outData from "../../data/pulkovoOut.json";
import inData from "../../data/pulkovoIn.json";

interface ContentProps {
	type: string;
	image?: { type: string; src: string; label: string; length: number };
}
export const Content: React.FC<ContentProps> = ({
	type,
	image = {
		type: "PLAY_IMAGE",
		src: "/sdcard/intro/intro_default.png",
		label: "Intro",
		length: 20,
	},
}) => {
	const [currentScreen, setCurrentScreen] = useState("DEPARTURE");
	const [currentTable, setCurrentTable] = useState(outData.contents);
	const [displayType, setDisplayType] = useState("table");

	useEffect(() => {
		setTimeout(() => {
			if (displayType === "table") {
				if (currentScreen === "DEPARTURE") {
					setCurrentScreen("ARRIVAL");
					setCurrentTable(inData.contents);
				} else {
					setCurrentScreen("DEPARTURE");
					setCurrentTable(outData.contents);
				}

				setDisplayType("reception");
			} else {
				setDisplayType("table");
			}
		}, 3000);
	}, [displayType]);

	switch (type) {
		case "img": {
			return (
				<div
					className="display__info display__info--image"
					style={{
						backgroundImage: `url(http://192.168.100.95:8080${image.src})`,
					}}
				></div>
			);
		}

		case "PULKOVO": {
			return (
				<div className="display__info display__info--pulkovo">
					{displayType === "table" ? (
						<Table table={currentTable} screen={currentScreen} />
					) : (
						<Reception />
					)}
				</div>
			);
		}
	}
};
