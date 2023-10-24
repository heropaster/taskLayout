export const endContent = (duration: number, src: string, type: string) => {
	console.log(type);
	switch (type) {
		case "PLAY_IMAGE":
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
					return data;
				});
		case "PLAY_VIDEO":
			return new Promise((resolve, reject) => {
				const video = document.createElement("video");
				video.src = src;
				video.onloadeddata = () => {
					resolve("Загрузилось");
				};
				video.onerror = (error) => {
					reject("Ошибка" + error);
				};
			})
				.then(() => {
					return new Promise(function (resolve) {
						setTimeout(resolve, duration);
					});
				})
				.then(() => {
					return;
				});
	}
};
