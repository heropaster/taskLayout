import React from "react";

import "./StopName.scss";

interface StopNameProps {
  type: string | undefined;
  name: { rus?: string; eng?: string };
}

export const StopName: React.FC<StopNameProps> = ({ type, name }) => (
  <div className="stop-title">
    <h2 className={`stop-name ${type === "RouteStop" ? "route-stop" : ""}`}>
      {name.rus}
    </h2>
    <h3
      className={`stop-name stop-name--eng ${
        type === "RouteStop" ? "route-stop--eng" : ""
      }`}
    >
      {name.eng}
    </h3>
  </div>
);
