import React from "react";
import { StopName } from "../StopName/StopName";
import { ArrivalTime } from "../ArrivalTIme/ArrivalTime";
import { StopNameT } from "../../types/StopName";
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
