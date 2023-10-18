import { Stand } from "../Stand/Stand";
import arrow from "../../assets/icons/Arrow.svg";
import "./Reception.scss";
export const Reception = () => {
	return (
		<div className="pulkovo__reception reception">
			<h3 className="reception__title">3 этаж</h3>
			<div className="reception__content content">
				<div className="content__heading">
					<h2>Схема стоек регистрации пассажиров</h2>
					<h3>Scheme of passenger check-in counters</h3>
				</div>
				<div className="stands">
					<Stand
						left={{ first: "01", second: "10" }}
						right={{ first: "11", second: "20" }}
					/>
					<Stand
						left={{ first: "21", second: "32" }}
						right={{ first: "33", second: "44" }}
					/>
					<Stand
						left={{ first: "45", second: "56" }}
						right={{ first: "57", second: "68" }}
					/>
					<Stand
						left={{ first: "69", second: "78" }}
						right={{ first: "79", second: "88" }}
					/>
				</div>
				<div className="content__foter">
					<div className="enter">
						<img src={arrow} alt="enter direction" className="enter__arrow" />
						<div className="enter__text">
							<p className="ru">Вход</p>
							<p className="eng">Enter</p>
						</div>
					</div>
					<div className="inspection">
						<h3>Пункт досмотра</h3>
						<h4>Inspection point</h4>
					</div>
					<div className="enter">
						<img src={arrow} alt="enter direction" className="enter__arrow" />
						<div className="enter__text">
							<p className="ru">Вход</p>
							<p className="eng">Enter</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
