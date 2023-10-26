import { Reception } from "../Reception/Reception";
import { Table } from "../Table/Table";
import { Video } from "../Video/Video";
import { Stream } from "../Stream/Stream";
import "./Content.scss";

import { useDataContext } from "../../DataContext";

export const Content = () => {
	const socketIP = import.meta.env.VITE_SOCKET_URL;

	const state = useDataContext();
	const contentType = state?.state.contentType;
	const content = state?.state.content;
	const pulkovo = state?.state.pulkovo;
	const stream = state?.state.stream;
	console.log(contentType);
	switch (contentType) {
		case "assets":
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
					return <Video type="normal" />;
				}
			}
			break;
		case "pulkovo":
			switch (pulkovo?.subtype) {
				case "ARRIVAL": {
					return (
						<div
							key={pulkovo?.subtype}
							className="display__info display__info--pulkovo"
						>
							<Table table={pulkovo.contents} screen="ARRIVAL" />
						</div>
					);
				}
				case "DEPARTURE": {
					return (
						<div
							key={pulkovo?.subtype}
							className="display__info display__info--pulkovo"
						>
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
			break;
		case "stream": {
			return <Stream src={stream!.url} length={stream!.length} />;
		}
	}
};
