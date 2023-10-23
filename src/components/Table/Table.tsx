import React from "react";

import "./Table.scss";
import arrival from "../../assets/icons/arrival.svg";
import departure from "../../assets/icons/departure.svg";

interface TableProps {
	table: {
		time: string;
		direction: string;
		flightNumber: string;
		status: string;
		company: string;
		airplaneType: string;
	}[];
	screen: string;
}
export const Table: React.FC<TableProps> = ({ table, screen }) => {
	return (
		<>
			<div className="pulkovo__header">
				{screen === "DEPARTURE" && (
					<>
						<img src={departure} alt="departure" />
						<h3>Вылеты</h3>
					</>
				)}
				{screen === "ARRIVAL" && (
					<>
						<img src={arrival} alt="arrival" />
						<h3>Прилёты</h3>
					</>
				)}
			</div>
			<div className="pulkovo__content"></div>
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
					{table.map((row, index) => (
						<tr key={index} className="flight">
							<td className="flight__time">{row.time}</td>
							<td className="flight__number">
								<div>
									<span>{row.flightNumber}</span>
								</div>
							</td>
							<td className="flight__direction">{row.direction}</td>
							<td className="flight__company">{row.company}</td>
							<td className="flight__airplane-type">{row.airplaneType}</td>
							<td className="flight__status">{row.status}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};
