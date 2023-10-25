import { Reception } from "../Reception/Reception";
import { Table } from "../Table/Table";
import { Video } from "../Video/Video";

import "./Content.scss";

import { useDataContext } from "../../DataContext";

export const Content = () => {
	const socketIP = import.meta.env.VITE_SOCKET_URL;

	const state = useDataContext();
	const isPulkovo = state?.state.isPulkovo;
	const content = state?.state.content;
	const pulkovo = state?.state.pulkovo;

	switch (isPulkovo) {
		case 0:
			switch (content?.type) {
				case "PLAY_IMAGE": {
					return (
						<div
							className="display__info display__info--image"
							style={{
								backgroundImage: `url(http://${socketIP.trim()}:8080${
									content?.src
								})`,
							}}
						></div>
					);
				}
				case "PLAY_VIDEO": {
					return <Video />;
				}
			}
			break;
		case 1:
			switch (pulkovo?.subtype) {
				case "ARRIVAL": {
					return (
						<div className="display__info display__info--pulkovo">
							<Table table={pulkovo.contents} screen="ARRIVAL" />
						</div>
					);
				}
				case "DEPARTURE": {
					return (
						<div className="display__info display__info--pulkovo">
							<Table table={pulkovo.contents} screen="DEPARTURE" />
						</div>
					);
				}
				case "COUNTERS": {
					return (
						<Reception src={`http://${socketIP.trim()}:8080${pulkovo?.src}`} />
					);
				}
			}
	}
};
