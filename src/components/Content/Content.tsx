import { useEffect, useState } from "react";

import { Reception } from "../Reception/Reception";
import { Table } from "../Table/Table";
import { Video } from "../Video/Video";

import "./Content.scss";

import outData from "../../data/pulkovoOut.json";
import inData from "../../data/pulkovoIn.json";
import { useDataContext } from "../../DataContext";

export const Content = () => {
	const socketIP = import.meta.env.VITE_SOCKET_URL;

	const state = useDataContext();
	const isPulkovo = state?.state.isPulkovo;
	const content = state?.state.content;
	const pulkovo = state?.state.pulkovo;

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
	switch (isPulkovo) {
		case 0:
			switch (content?.type) {
				case "PLAY_IMAGE": {
					return (
						<div
							className="display__info display__info--image"
							style={{
								backgroundImage: `url(http://${socketIP.trim()}:8080${
									content?.src
								})`,
							}}
						></div>
					);
				}
				case "PLAY_VIDEO": {
					return <Video />;
				}
			}
			break;
		case 1:
			switch (pulkovo?.subtype) {
				case "ARRIVAL": {
					return (
						<div className="display__info display__info--pulkovo">
							<Table table={currentTable} screen={currentScreen} />
						</div>
					);
				}
				case "DEPARTURE": {
					return (
						<div className="display__info display__info--pulkovo">
							<Table table={currentTable} screen={currentScreen} />
						</div>
					);
				}
				case "COUNTERS": {
					return (
						<Reception src={`http://${socketIP.trim()}:8080${pulkovo?.src}`} />
					);
				}
			}
	}
};
