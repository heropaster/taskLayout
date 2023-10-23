import React from "react";

import { RouteNumber } from "../../RouteNumber/RouteNumber";

import "./TransferItem.scss";

interface TransferItemProps {
	transport: string;
	transfers: string[];
	name: { ru: string; eng: string } | undefined;
}
export const TransferItem: React.FC<TransferItemProps> = ({
	transport,
	transfers,
	name,
}) => {
	return (
		<div className="transfer-item">
			<img
				className="transport"
				src={`http://192.168.100.95:8080${transport}`}
				alt="transport"
			/>
			<div className="stop-transfers">
				<div
					className={`transfers-content ${
						transfers.length > 14 ? "scroll" : ""
					}`}
				>
					{transfers.map((item, index) => (
						<RouteNumber src={item} key={index} />
					))}
				</div>
				{/* Для метро(В мок дате нет данных по пересадкам в метро, поэтому сымитировал) */}
				{name && (
					<div className="name-container">
						<h3 className="ru">{name.ru}</h3>
						<h4 className="eng">{name.eng}</h4>
					</div>
				)}
			</div>
		</div>
	);
};
