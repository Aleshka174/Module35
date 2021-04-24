const sendTask = document.querySelector('#task');
const result = document.querySelector('#result');

if (localStorage.getItem("sub")) {
	result.innerHTML = localStorage.getItem("sub");
}

sendTask.addEventListener('click', async ()=>{
		const requestResult = await useRequest();	
		result.innerHTML = '';
		let allTitle = document.createElement('ul');
		for (let i = 0; i < requestResult.length; i++) {
	  		let newTitle = document.createElement('li');
	  		let newPictere = document.createElement('img');
	  		newPictere.src = requestResult[i].download_url;
	  		newTitle.innerHTML = `Автор: ${requestResult[i].author} <br>`;
	  		newTitle.append(newPictere);
	  		allTitle.appendChild(newTitle);
	  	}
	  	result.appendChild(allTitle);	
	  	let oldResult = result.outerHTML
	  	localStorage.setItem("sub", oldResult);		
})

const useRequest = () => {
	let page = document.querySelector('#page').value;
	let limit = document.querySelector('#limit').value;
	const pageType = isNaN(page);
	const limitType = isNaN(limit);
	let errorPage = 0;
	let errorLimit = 0;
	if ((page <= 0 || page >= 11) || (pageType == 1)) {
		errorPage = 1;
	}
	if ((limit <= 0 || limit >= 11) || (limitType == 1)) {
		errorLimit = 1;
	}
	if (errorPage == 1 && errorLimit == 0) {
		return "Номер страницы вне диапазона от 1 до 10";
	}else if (errorPage == 0 && errorLimit == 1) {
		return "Лимит вне диапазона от 1 до 10";
	}else if (errorPage == 1 && errorLimit == 1) {
		return "Номер страницы и лимит вне диапазона от 1 до 10";
	}else {
		const picture = 'https://picsum.photos/v2/list?page='+page+'&limit='+limit;
		return fetch (picture)
			.then((response) => { 
				return response.json();
			});
	}
} 