//practice.js
const numbers = [23, 45, 32, 55, 34, 72];

let sum = 0;
for (let i =0 ; i<numbers.length; i++){
  if (numbers[i] % 2 == 0)
  sum +=numbers[i];
}
console.log('합: ' +sum);
sum=0;
for (let number of numbers) {
  if (number % 2 == 0)
  sum +=number;
}

sum = 0;
numbers.forEach(function (param,idx) {
  console.log(param,idx);
  if(param%2==0) {
    sum +=param;
  }
  
});

console.log('합: '+sum);


//표현식으로..
sum=0;
let evenSum = (param) => {
  if (param%2==0){
    sum +=param;
  }
}
// for (member of members) {
//   sum += member[i]
// }
numbers.forEach(evenSum);
console.log('합: ' +sum);

let oddSum = (param,idx) => {
  console.log
}