import React, { useEffect, useState } from "react";

import { useDataContext } from "../../DataContext";

import "./InfoPanel.scss";

interface InfoPanelProps {
	date: Date;
	temp: string;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ date, temp }) => {
	const [time, setTime] = useState(new Date());
	useEffect(() => {
		const timerID = setInterval(() => {
			setTime(new Date());
		}, 2000); // Обновление времени

		return () => {
			clearInterval(timerID); // Очистка таймера при размонтировании компонента
		};
	}, []);
	const state = useDataContext();
	const speed = state?.state.speed;
	return (
		<div className="panel">
			<span>
				{time.toLocaleTimeString("ru-RU", {
					hour: "2-digit",
					minute: "2-digit",
				})}
			</span>
			<span>
				{date.toLocaleString("ru-RU", {
					year: "numeric",
					month: "numeric",
					day: "numeric",
				})}
			</span>
			<span>{temp}</span>
			<span>{speed?.length === 0 ? 0 : speed} км/ч</span>
		</div>
	);
};
