// array/basic1.js
// map() => 새로운 배열
// filter() => 새로운 배열
// reduce() => 결과값이 지정하는 값으로 String, number,배열

const numbers =[23,4,77,51,63,34,62,92];
//배열요소의 누적합
let result = numbers.reduce(function(accum,element,idx,ary){
  //console.log(accum,element,idx,ary); // 0 23 idx,배열
  return accum+=element;
},);


//배열요소의 *2 => 새로운 배열.
result = numbers.reduce(function (accum,element){
  accum.push(element*2);
  return accum;
 
},[]);
//console.log(result);

//filter : 50보다 큰 숫자를 가지는 새로운 배열
result = numbers.reduce(function(accum,element){
  if (element>=50){
    accum.push(element)
  }
  return accum; //반환되는 값은 다음 순번의 초기값(accum);
},[]);
console.log(result);

