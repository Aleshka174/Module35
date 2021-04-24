const sendTask = document.querySelector('#task');
const result = document.querySelector('#result');

sendTask.addEventListener('click', async ()=>{
		const requestResult = await useRequest();
		if (requestResult != '') {
			result.innerHTML = '';
			let allTitle = document.createElement('ul');
			for (let i = 0; i < requestResult.length; i++) {
	  			var newTitle = document.createElement('li');
	  			newTitle.innerHTML = `Задание: ${requestResult[i].title}`;
	  			if (requestResult[i].completed) {
	  				newTitle.classList.add('Complete');
	  			}
	  			allTitle.appendChild(newTitle);
	  		}
	  		result.appendChild(allTitle);	

		} else {
			result.innerHTML = "Пользователь с указанным id не найден";
		}
})

const useRequest = () => {
	const userId = document.querySelector('#userId').value;
	const newUser = 'https://jsonplaceholder.typicode.com/users/'+userId+'/todos';
	return fetch (newUser)
		.then((response) => { 
			return response.json();
		});	 
}