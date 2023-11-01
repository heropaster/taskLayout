/* eslint-disable no-mixed-spaces-and-tabs */
import { useDataContext } from "context/DataContext";
import { TransferItem } from "./TransferItem/TransferItem";
import "./Transfers.scss";

export const Transfers = () => {
  const {
    state: { stops, index },
  } = useDataContext();

  if (stops!.length > 0) {
    const transfers = stops![index].transfers;

    return (
      <div key={index} className="transfers">
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
                    rus: stops![index].nameRus,
                    eng: stops![index].nameEng,
                  }
                : undefined
            }
          />
        ))}
      </div>
    );
  }
};
