import { ArrivalTime } from "components/ArrivalTIme/ArrivalTime";
import { StopName } from "components/StopName/StopName";
import { StopNameT } from "types/StopName";
import "./Stop.scss";

interface StopProps {
  name: StopNameT;
  time: string;
}

export const Stop: React.FC<StopProps> = ({ name, time }) => (
  <div className="stop">
    <ArrivalTime time={time} />
    <StopName name={name} type="RouteStop" />
  </div>
);
