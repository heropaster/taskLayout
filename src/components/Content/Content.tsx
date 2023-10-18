import React, { useEffect, useState } from "react";
import { Reception } from "../Reception/Reception";

import "./Content.scss";

import content from "../../data/contentData.json";
import outData from "../../data/pulkovoOut.json";
import inData from "../../data/pulkovoIn.json";
import departure from "../../assets/icons/departure.svg";
import arrival from "../../assets/icons/arrival.svg";

interface ContentProps {
	type: string;
}

export const Content: React.FC<ContentProps> = ({ type }) => {
	const [currentScreen, setCurrentScreen] = useState("DEPARTURE");
	const [currentTable, setCurrentTable] = useState(
		currentScreen === "DEPARTURE" ? outData.contents : inData.contents
	);
	const [isRegistration, setIsRegistration] = useState(true);

	const interval = setInterval(() => {
		if (currentScreen === "DEPARTURE") {
			setCurrentScreen("ARRIVAL");
		} else if(currentScreen === 'ARRIVAL') setCurrentScreen("DEPARTURE");
		clearInterval(interval);
	}, 10000);
	useEffect(() => {
		if (currentScreen === "DEPARTURE") {
			setCurrentTable(outData.contents);
		} else setCurrentTable(inData.contents);
	}, [currentScreen]);

	switch (type) {
		case "img": {
			return (
				<div
					className="display__info display__info--image"
					style={{
						backgroundImage: `url(http://192.168.100.95:8080/${content.src})`,
					}}
				></div>
			);
		}

		case "PULKOVO": {
			return (
				<div className="display__info display__info--pulkovo">
					{isRegistration ? <Reception />: (<><div className="pulkovo__header">
						{currentScreen === "DEPARTURE" && (
							<>
								<img src={departure} alt="departure" />
								<h3>Вылеты</h3>
							</>
						)}
						{currentScreen === "ARRIVAL" && (
							<>
								<img src={arrival} alt="arrival" />
								<h3>Прилёты</h3>
							</>
						)}
						
					</div>
					<div className="pulkovo__content">
						<table>
							<thead>
								<tr>
									<th>Время</th>
									<th>Рейс</th>
									<th>Направление</th>
									<th>Авиакомпания</th>
									<th>Тип самолёта</th>
									<th>Статус</th>
								</tr>
							</thead>
							<tbody>
								{currentTable.map((row, index) => (
									<tr key={index} className="flight">
										<td className="flight__time">{row.time}</td>
										<td className="flight__number">
											<div>
												<span>{row.flightNumber}</span>
											</div>
										</td>
										<td className="flight__direction">{row.direction}</td>
										<td className="flight__company">{row.company}</td>
										<td className="flight__airplane-type">
											{row.airplaneType}
										</td>
										<td className="flight__status">{row.status}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div></>) }
					
				</div>
			);
		}
	}
};
