import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.scss";
import { DataContextProvider } from "./DataContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
	<DataContextProvider>
		<App />
	</DataContextProvider>
);
