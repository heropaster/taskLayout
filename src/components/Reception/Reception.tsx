import "./Reception.scss";
interface ReceptionProps {
	src: string;
}
export const Reception: React.FC<ReceptionProps> = ({ src }) => {
	return (
		<div className="pulkovo__reception reception">
			<img src={src} alt="reception" />
		</div>
	);
};
