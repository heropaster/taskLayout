import { Stop } from "../Stop/Stop";
import "./Routes.scss";
// import { stops } from "../../data/stops";
import data from "../../data/mockData.json";
import React, { useState, useEffect } from "react";
interface RoutesProps {
	type: string;
}
export const Routes: React.FC<RoutesProps> = ({ type }) => {
	const stops = data.stops;
	const maxStops = type === "moving" ? 4 : 3;
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isLast, setIsLast] = useState(false);
	const [showLast, setShowLast] = useState(false);
	const [displayedStops, setDisplayedStops] = useState(
		stops.slice(currentIndex, currentIndex + maxStops)
	);

	// useEffect(() => {
	// 	const updateStops = () => {
	// 		const nextIndex = currentIndex + maxStops;
	// 		if (nextIndex >= stops.length) {
	// 			setCurrentIndex(0); // Сброс индекса для повторения
	// 		} else {
	// 			setCurrentIndex(nextIndex);
	// 		}

	// 		const newStops = stops.slice(currentIndex, nextIndex);
	// 		setDisplayedStops(newStops);

	// 		setIsLast(nextIndex > stops.length);
	// 	};
	// 	const interval = setInterval(updateStops, 3000);
	// 	if (isLast) {
	// 		clearInterval(interval);
	// 		setTimeout(() => {
	// 			setShowLast(true);
	// 		}, 3000);
	// 	}
	// 	return () => {
	// 		clearInterval(interval);
	// 	};
	// }, [currentIndex, stops, isLast, maxStops]);

	return showLast ? (
		<div className="last">Конечная</div>
	) : (
		<div
			className={`routes ${type === "moving" ? "moving" : ""} ${
				isLast ? "last-stops" : ""
			} `}
		>
			{displayedStops.map((stop) => {
				return (
					<Stop
						key={stop.index}
						time={"15"}
						name={{ rus: stop.nameRus, eng: stop.nameEng }}
					/>
				);
			})}
			<div className={`line ${isLast ? "last-stops" : ""}`}></div>
		</div>
	);
};
