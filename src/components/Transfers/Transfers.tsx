/* eslint-disable no-mixed-spaces-and-tabs */
import { useDataStore } from "../../store";
import { TransferItem } from "./TransferItem/TransferItem";

import "./Transfers.scss";

export const Transfers = () => {
	const [stops, currentStopIndex] = useDataStore((state) => [
		state.stops,
		state.currentStopIndex,
	]);
	if (stops.length > 0) {
		const transfers = stops[currentStopIndex].transfers;

		return (
			<div className="transfers">
				{transfers.length === 0 && (
					<div className="noTransfers">Пересадок нет</div>
				)}
				{transfers.map((item, index) => (
					<TransferItem
						key={index}
						transport={item.icons[0]}
						transfers={item.icons.slice(1)}
						name={
							index === 2
								? {
										ru: stops[currentStopIndex].nameRus,
										eng: stops[currentStopIndex].nameEng,
								  }
								: undefined
						}
					/>
				))}
			</div>
		);
	}
};
