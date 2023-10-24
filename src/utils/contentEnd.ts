export const endContent = (duration: number, src: string) => {
	return new Promise((resolve, reject) => {
		const image = document.createElement("img");
		image.src = src;
		image.onload = () => {
			resolve("Загрузилось");
		};
		image.onerror = (error) => {
			reject("Ошибка" + error);
		};
	})
		.then(() => {
			return new Promise(function (resolve) {
				setTimeout(resolve, duration);
			});
		})
		.then((data) => {
			return data
		});
};
