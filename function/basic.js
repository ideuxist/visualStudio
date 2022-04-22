//function/basic.js

function sum(num1,num2){
  console.log(num1,num2);
  return num1+num2;
}
//let sum = function(num1,num2){   }
let result = sum(10,20,30);
console.log('합계는 ' + result);
console.log(sum(10,20))
//2.함수표현식으로 정의
let myfnc = function(val1,val2) {
  var myVal = 10;
  return val1+val2+myVal;
}
let myfnc2 = (val1,val2)=> {
  var myVal = 10;
  return val1+val2+myVal;
}

console.log(typeof myfnc,myfnc)
result = myfnc(10,20);
console.log(result);

let mysum = myfnc;
result = mysum(20,30);
console.log(result);

const person = {
  fullName : 'Hong',
  age : 20,
  height: 175.3
}

const person1 = {
  fullName : 'Hwang',
  age : 22,
  height: 178.4
}
const person2 = {
  fullName : 'Park',
  age : 25,
  height: 165.3
}
console.clear();
//함수 표현식 myinfo
let myInfo = function(obj){
  var info = `${obj.fullName}이고 ${obj.age}살이고
  키는 ${obj.height}입니다`
  return info;
}
result = myInfo(person);
console.log(typeof myInfo,myInfo);
console.log(result);
console.log(myInfo(person))
//배열을 활용.출력

//자바스크립트에서 문자열, 숫자, boolean,배열 = > 매개값으로 사용
//함수를 매개변수로 사용가능

const persons = [person,person1,person2];
for (let person of persons) {
    let result = myInfo(person);
    console.log(result);
  }
  console.log('==========================');

persons.forEach(function (val,idx,ary) {
  console.log(val,idx,ary);
  console.log('==========================');
  console.log(myInfo(val));

});

let funcParam = function (val,idx,ary) {
  console.log(val,idx,ary);
  console.log(myInfo(val));

};
persons.forEach(funcParam); //메소드의 매개값으로 활용되는함수
// ==>콜백함수

let funcParam2 =(val,idx,ary) => { //화살표 함수
  //console.log(val,idx,ary);
  console.log(myInfo(val));
};





