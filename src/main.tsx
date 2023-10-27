import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

import { DataContextProvider } from "./DataContext.tsx";

import "./index.scss";
ReactDOM.createRoot(document.getElementById("root")!).render(
	<DataContextProvider>
		<App />
	</DataContextProvider>
);
