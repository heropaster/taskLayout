export const endContent = (
  duration: number | boolean = false,
  src: string,
  type: string,
) => {
  switch (type) {
    case "PLAY_IMAGE":
      return new Promise((resolve, reject) => {
        const image = document.createElement("img");
        image.src = src;

        image.onload = () => {
          resolve("Загрузилось");
        };
        image.onerror = (error) => {
          reject(error);
        };
      })
        .then(() => {
          if (duration === +duration) {
            return new Promise(function (resolve) {
              setTimeout(resolve, duration);
            });
          }
        })
        .then(() => {
          return true;
        })
        .catch((error) => {
          throw new Error(error);
        });
    case "PLAY_VIDEO":
      return new Promise((resolve, reject) => {
        const video = document.createElement("video");
        video.src = src;

        video.onloadeddata = () => {
          resolve("Загрузилось");
        };
        video.onerror = (error) => {
          reject(error);
        };
      })
        .then(() => {
          if (duration === +duration) {
            return new Promise(function (resolve) {
              setTimeout(resolve, duration);
            });
          }
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          throw new Error(error);
        });
  }
};
