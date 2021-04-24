let randomNumber = Math.floor(Math.random() * 100);

setTimeout( () => {
	const myPromise = new Promise((resolve, reject) => {
		if (randomNumber%2 == 0) {
			resolve("Завершено успешно. Сгенерированное число — " + randomNumber);
		} else {
			reject("Завершено с ошибкой. Сгенерированное число — " + randomNumber)
		}
	});

	myPromise
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error);
		})

}, 3000);


