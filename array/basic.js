// array/basic.js

// 배열선언 : [].new Array();
let arr = [1,2];
let newAry = [3,4,5,6];

//추가 : push : 마지막   unshift : 첫번째 위치
 arr.push(3);
 arr.unshift(0);
 console.log(arr.toString());

 //제거 : pop(), shift();
 arr.pop();
 console.log(arr.toString());
 arr.shift();
 console.log(arr.toString());

 // forEach()
 newAry.forEach(element =>
    arr.push(element)
 );
 console.log(arr);
 
 newAry.forEach(element =>
  arr.unshift(element)
);
console.log(arr);

arr.pop();
arr.pop();
arr.shift();

console.log(arr.toString());

//splice (위치,크기) :추가 수정 삭제
arr.splice(1,2,8,9);
console.log(arr.toString());

arr.splice(1,1,8,9);
console.log(arr.toString());

arr.splice(1,0,8,9);
console.log(arr.toString());

arr.splice(1,0);
console.log(arr.toString());

arr.splice(1,2);
console.log(arr.toString());

newAry.forEach(function (element){
  arr.splice(1,1,element); 
});

let names = [];
let anonym = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident in quidem culpa, neque sapiente unde commodi optio est, repellat rerum accusamus nemo non ipsum temporibus, quae odit voluptatibus porro possimus.';
anonym = anonym.replace(',','')
anonym.split(' ').forEach(function(element){
  names.push(element);
});

console.log(names.toString());
console.log(names);

//forEach() : 반환 x
//map() : 각요소 = mapping 작업(다른형태의 배열로 반환?)
//filter() : return 조건을 만족하는 값만 반환

let result = names.map(function (element){
  return element.toUpperCase();
}); //새로운 형태의 배열  반환
console.log(result);

result = result.filter(function (element){
  return element.length>=10;
});

result = names.map(element =>
  element.toUpperCase()).filter(element =>
    element.length>=10);//chain rules
console.log(result);

//cf 
result = names.map(element => {
  let res = element.toUpperCase();
  return res;
})
 
