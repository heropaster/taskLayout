import "./Reception.scss";
import image from "../../assets/images/ReceptionImage.png";
export const Reception = () => {
	return (
		<div className="pulkovo__reception reception">
			<h3 className="reception__title">3 этаж</h3>
			<div className="reception__content content">
				<div className="content__heading">
					<h2>Схема стоек регистрации пассажиров</h2>
					<h3>Scheme of passenger check-in counters</h3>
				</div>
				<div className="image-container">
					<img src={image} alt="reception" />
				</div>
			</div>
		</div>
	);
};
