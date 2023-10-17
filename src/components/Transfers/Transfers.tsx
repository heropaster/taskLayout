// import React from "react";
import { TransferItem } from "./TransferItem/TransferItem";

import "./Transfers.scss";
import data from "../../data/mockData.json";
// Рендерить буду по второй остановке потому-что там больше пересадок(И автобус и трамвай, в моих мок данных не нашел метро, поэтому так)
export const Transfers = () => {
	const transfers = data.stops[1].transfers;
	return (
		<div className="transfers">
			{transfers.map((item, index) => (
				<TransferItem
					key={index}
					transport={item.icons[0]}
					transfers={item.icons.slice(1)}
					name={
						index === 2
							? { ru: data.stops[1].nameRus, eng: data.stops[1].nameEng }
							: undefined
					}
				/>
			))}
		</div>
	);
};
