import "./Reception.scss";
// import image from "../../assets/images/ReceptionImage.png";
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
