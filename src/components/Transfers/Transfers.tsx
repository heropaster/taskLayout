/* eslint-disable no-mixed-spaces-and-tabs */
import { TransferItem } from "./TransferItem/TransferItem";

import "./Transfers.scss";
import { useDataContext } from "../../DataContext";
export const Transfers = () => {
	const state = useDataContext();
	const stops = state?.state.stops;
	if (stops!.length > 0) {
		const transfers = stops![state!.state.index].transfers;

		return (
			<div key={state!.state.index} className="transfers">
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
										ru: stops![state!.state.index].nameRus,
										eng: stops![state!.state.index].nameEng,
								  }
								: undefined
						}
					/>
				))}
			</div>
		);
	}
};
