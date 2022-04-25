// string/practice2.js

//indexOf(), lastIndexOf() :찾을 문자열의 위치인덱스 반환.
let result = '안녕하세요 홍길동입니다'.indexOf('홍길동');
result = '안녕하세요 홍길동입니다, 대구의 홍길동입니다'.lastIndexOf('홍길동',15);
console.log(result);
let str1 = '안녕하세요 홍길동입니다, 서울의 홍길동,부산의 홍길동입니다, 대구의 홍길동입니다';
let position = str1.indexOf('부산');
result = str1.indexOf('홍길동',position);
console.log(position);

//cahrAt(인덱스) : 인뎃스 위치의 문자 반환

console.log(result);
let str2 = str1.charAt(result);
console.log(str2);

//toLowerCase(), toUpperCase() : 문자변경
let str3 ='Lorem ipsum DOLoR dolor sit amet consectetur, adipisicing elit. Provident in quidem culpa, neque sapiente unde commodi optio est, repellat rerum accusamus nemo non ipsum temporibus, quae odit voluptatibus porro possimus.';
console.log(str3.toUpperCase().toLowerCase());

//includes('찾을 문자열') : true /false
result = str3.includes('dolor');
console.log(result);

// search('찾을 문자열') 추가기능 : search (정규 표현식) ;
 // => 찾을 문자열의 인덱스 반환
 //정규표현식 오브젝트 / /(new RegExp()), 배열[], 배열[](new Array(1,2))
 //정규표현식 옵션 i g m : i=>대소문자 무시 g => 여러개 m => line까지
 
 result = str3.search('dolor');
 result = str3.search(/dolor/i);
 console.log(result);

 //match ('찾을 문자열') :문자열 or null 반환

let str4 = 'bad MORNING, GOOD AFTERNOON, good evening, and good night';
result = str4.match('good');
result = str4.match(/goods/gi);
console.log(result);
result = str4.match(/good\s\w+/gi); //s:공백. w :문자하나
console.log(result);

//replace ('찾을 문자열','바꿀 문자열');
result = str4.replace('good','bad');
result = str4.replace(/good/gi,'bad');
console.log(result);
result = str4.replace(/\s/gi,'bad');
console.log(result);
//W:문자이외 w:문자하나
result = str4.replace(/\W/ig,'-');
console.log(result);
//d: 숫자 D:숫자 이외
result = 'morning1 morning2 morning123'.replace(/\D/g,'')
console.log(result);

let sso = ['970101-1234567','970101 1234567','9701011234567'];
sso.forEach(num => console.log(num.replace(/\D/g,'')));
console.log(result);

//문자열 합치기 +, concat()
console.log('hello'+ ' world');
console.log('hello'.concat(' world'));
