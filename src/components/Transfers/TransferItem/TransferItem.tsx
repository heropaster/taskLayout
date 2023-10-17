import React from "react";
import "./TransferItem.scss";
import { RouteNumber } from "../../RouteNumber/RouteNumber";
interface TransferItemProps {
	transport: string;
	transfers: string[];
}
export const TransferItem: React.FC<TransferItemProps> = ({
	transport,
	transfers,
}) => {
	return (
		<div className="transfer-item">
			<img
				className="transport"
				src={`http://192.168.100.95:8080${transport}`}
				alt="transport"
			/>
			<div className="stop-transfers">
				{transfers.map((item, index) => (
					<RouteNumber src={item} key={index} />
				))}
			</div>
		</div>
	);
};
