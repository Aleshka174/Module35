function userRequest(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);

	xhr.onload = function(){
		if (xhr.status != 200) {
			resultNode.innerHTML = "Статус ответа " + xhr.status;
		} else {
			const result = JSON.parse(xhr.responseText);
			if (callback) {
				callback(result);
			}
		}
	};

	xhr.onerror = function () {
		resultNode.innerHTML = "Ошибка! Статус ответа: " + xhr.status;
	};

	xhr.send();
};

const btnNode = document.querySelector('#sub');
const resultNode = document.querySelector('#result');

function displayResult(apiData){
	const years = document.getElementById('years').value;
	if (years == "Выберите год") {
		resultNode.innerHTML = "Год не выбран";
	} else {
		apiData.forEach(item => {
			if (years == item.year) {
				const tableBlock = `
				<div class="table">
					<table>
						<tr>
							<td>1 кв.</td>
							<td>2 кв.</td>
							<td>3 кв.</td>
							<td>4 кв.</td>
						</tr>
						<tr>
							<td>"${item.sales.q1}"</td>
							<td>"${item.sales.q2}"</td>
							<td>"${item.sales.q3}"</td>
							<td>"${item.sales.q4}"</td>
						</tr>
					</table>	
				</div>
				<div>
					<a href="https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'], datasets:[{label:'Выручка за ${item.year} год', data:[${item.sales.q1}, ${item.sales.q2}, ${item.sales.q3}, ${item.sales.q4}]}]}}">Ссылка на график</a>
				</div>	
				`;
				resultNode.innerHTML = tableBlock;
			}
		});
	}
}

btnNode.addEventListener('click', ()=>{
	userRequest("https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440" , displayResult);
})