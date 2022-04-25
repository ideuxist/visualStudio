// string/practice.js 

let str1 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident in quidem culpa, neque sapiente unde commodi optio est, repellat rerum accusamus nemo non ipsum temporibus, quae odit voluptatibus porro possimus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident in quidem culpa, neque sapiente unde commodi optio est, repellat rerum accusamus nemo non ipsum temporibus, quae odit voluptatibus porro possimus.';

//단어의 길이가 10개 이상인 값을 골라내서 
// consectetur,adipisicing ..... 출력

// console.log('hello'.length);
// let result;
// result = str1.split(' ');

// console.log(result);

// for (let i = 0; i <result.length; i++) {
//   result[i].substring(0,11)
//   if (result[i] =!null)
//   console.log(result[i])
//   }

let result = str1.split(' ').filter(el => el.length >=10).join(',');
console.log(result);




