import { InfoPanel } from "components/InfoPanel/InfoPanel";
import { Routes } from "components/Routes/Routes";
import { Transfers } from "components/Transfers/Transfers";
import { useDataContext } from "context/DataContext";
import { RouteHeader } from "./RouteHeader/RouteHeader";
import "./RoutesDisplay.scss";

export const RoutesDisplay = () => {
  // const state = useDataContext();
  const {
    state: { action },
  } = useDataContext();
  return (
    <div className="display__route">
      <RouteHeader />
      {action === "STOP_END" ? <Routes type={action} /> : <Transfers />}
      <InfoPanel />
    </div>
  );
};
