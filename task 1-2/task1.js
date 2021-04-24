const parser = new DOMParser();

const xmlString = `
	<list>
	  <student>
	    <name lang="en">
	      <first>Ivan</first>
	      <second>Ivanov</second>
	    </name>
	    <age>35</age>
	    <prof>teacher</prof>
	  </student>
	  <student>
	    <name lang="ru">
	      <first>Петр</first>
	      <second>Петров</second>
	    </name>
	    <age>58</age>
	    <prof>driver</prof>
	  </student>
	</list>
`; 

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listStudent = xmlDOM.querySelector('list');
const studentDom = listStudent.querySelectorAll('student');
let studentNumber = [];
for (var i = 0; i < studentDom.length; i++) {

	const fullnameStudent = studentDom[i].querySelector('name');
	const nameStudent = fullnameStudent.querySelector('first');
	const surnameStudent = fullnameStudent.querySelector('second');
	const ageStudent = studentDom[i].querySelector('age');
	const profStudent = studentDom[i].querySelector('prof');

	const nameAttr = fullnameStudent.getAttribute('lang');

	studentNumber.push({
		"name": `${nameStudent.textContent} ${surnameStudent.textContent}`,
		"age": Number(ageStudent.textContent),
		"prof": profStudent.textContent,
		"lang": nameAttr
	});
}

const result = {
	"list": {
		studentNumber
	}
};

console.log(result);
	
	




