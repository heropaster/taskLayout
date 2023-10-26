import React from "react";

import Ticker from "react-ticker";
import "./TextTicker.scss";
interface TextTickerProps {
	text: string;
	callback: () => void;
}
export const TextTicker: React.FC<TextTickerProps> = ({ text, callback }) => {
	return (
		<div className="ticker">
			<Ticker speed={25} mode="smooth" onFinish={callback}>
				{({ index }) => <h3 key={index}>{text}!</h3>}
			</Ticker>
		</div>
	);
};
