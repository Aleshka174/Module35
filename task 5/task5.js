let user = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");
if (localStorage.getItem("nameUser", user) == user) {
	alert("Добрый день, "+ localStorage.getItem("nameUser") + ". Давно не виделись. В последний раз вы были у нас "+ localStorage.getItem(user));
	let time = new Date();
	let rusTime = time.toLocaleString("ru");
	localStorage.setItem(user, rusTime);
} else {
	localStorage.setItem("nameUser", user);
	time = new Date();
	rusTime = time.toLocaleString("ru");
	localStorage.setItem(user, rusTime);
	alert("Добрый день, " + localStorage.getItem("nameUser") + ". Вы у нас в первые!");
}


