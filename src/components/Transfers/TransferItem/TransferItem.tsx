import { RouteNumber } from "components/RouteNumber/RouteNumber";
import { StopNameT } from "types/StopName";
import "./TransferItem.scss";

interface TransferItemProps {
  transport: string;
  transfers: string[];
  name: StopNameT | undefined;
}

export const TransferItem: React.FC<TransferItemProps> = ({
  transport,
  transfers,
  name,
}) => {
  const socketIP = import.meta.env.VITE_SOCKET_URL;
  return (
    <div className="transfer-item">
      <img
        className="transport"
        src={`http://${socketIP.trim()}:8080${transport}`}
        alt="transport"
      />
      <div className="stop-transfers">
        <div className={`${transfers.length > 14 ? "scroll" : ""}`}>
          <div className="transfers-content">
            {transfers.map((item, index) => (
              <RouteNumber src={item} key={index} />
            ))}
          </div>
          {transfers.length > 14 && (
            <div className="transfers-content">
              {transfers.map((item, index) => (
                <RouteNumber src={item} key={index} />
              ))}
            </div>
          )}
        </div>
        {name && (
          <div className="name-container">
            <h3 className="ru">{name.rus}</h3>
            <h4 className="eng">{name.eng}</h4>
          </div>
        )}
      </div>
    </div>
  );
};
