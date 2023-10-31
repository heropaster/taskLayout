import React from "react";
import "./ArrivalTime.scss";

interface ArrivalTimeProps {
  time: string;
  circle: string | undefined;
}
export const ArrivalTime: React.FC<ArrivalTimeProps> = ({ time, circle }) => {
  return (
    <p key={time} className="arrival">
      <span className="time">{time}</span>
      <span className="minutes">мин</span>
      <span className="circle-container">
        <span
          className="circle"
          style={{
            background: circle,
          }}
        />
      </span>
    </p>
  );
};
