const person1 = {
  fullName: 'Hong',
  age: 20,
  height: 175.3
}

const person2 = {
  fullName: 'Hwang',
  age: 22,
  height: 178.4
}
const person3 = {
  fullName: 'Park',
  age: 25,
  height: 165.3
}
const persons = [person1, person2, person3];

const newPersons = persons.map(function(val,idx) {
  let newObj = {};
  newObj.index = idx+1;
  newObj.fName = val.fullName;
  newObj.age = val.age;
  newObj.height = val.height;
  return newObj;
});
console.log(newPersons);


//함수정의문
function tableList(personAry) {
  document.write(`<table border =1>
  <tr><th>순번</th><th>이름</th><th>나이</th><th>키</th></tr>` )
  for (let person of personAry) {
  document.write('<tr>')
    for (let field in person) {
      document.write(`<td>${person[field]}</td>`)
    }
  document.write('</tr>')

    
  }
  document.write('</table>')

}
//함수실행
tableList(newPersons);