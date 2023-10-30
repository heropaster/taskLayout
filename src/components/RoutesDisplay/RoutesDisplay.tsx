import { InfoPanel } from "components/InfoPanel/InfoPanel";
import { Routes } from "components/Routes/Routes";
import { Transfers } from "components/Transfers/Transfers";
import { useDataContext } from "context/DataContext";
import { RouteHeader } from "./RouteHeader/RouteHeader";
import "./RoutesDisplay.scss";

export const RoutesDisplay = () => {
  const state = useDataContext();
  const date = new Date();

  return (
    <div className="display__route">
      <RouteHeader type={state!.state.action} />
      {state!.state.action === "STOP_END" ? (
        <Routes type={state!.state.action} />
      ) : (
        <Transfers />
      )}

      <InfoPanel date={date} temp="+23°C" />
    </div>
  );
};
