//   string/basic.js
//   문자열 vs 문자열 객체


let str1 = '문자열';
console.log(typeof str1);

let str2 = new String('문자열') // object 타입
console.log(typeof str2);

//비교연산자 ==   =>값을 비교
//비교연산자 ===  =>값 & 타입 비교
console.log(str1 == str2);
console.log(str1 === str2);


let result = str1.substring(0, 2);
let result2 = str2.substring(0, 2); //index:0 크기 2.잘라내기

console.log(result, result2);

const cal1 = '1 + 2 * 3'; //
const cal2 = new String('1 + 2 * 3');

//eval():문자열 = > 수식변경.
console.log(eval(cal1));
//valueOf() = > object type을 문자열 type으로 변환
console.log(eval(cal2));
console.log(eval(cal2.valueOf())); //object

//trim() :좌우 여백 잘라내기
console.log('  문자열 공백 테스트  ');
console.log('  문자열 공백 테스트  '.trim());
//trim.Start() => 좌측 공백 제거
console.log('  문자열 공백 테스트  '.trimStart());
//trim.End() => 우측 공백 제거
console.log('  문자열 공백 테스트  '.trimStart().trimEnd());

//문자열의 공백을 제거
//split() =>매개값을 기준으로 문장을 잘라서 배열생성
result = ' 문자열 공백 테스트 '.split(' ');
//배열의 각 요소의 true = >배열
result = result.filter(function (val) {
  return val;
});
console.log(result);

//자바스크립트 boolean 값 : null, '' , undefined => false

if (null){
  console.log('false값')
}
//배열 => 문자열 변환
console.log(result.join(''));

result = ' 문자열 공백 테스트 '.split(' ').filter(val =>val).join(',');
console.log(result);

//slice,substring,substr(Deprecated)
//인덱스 기분 0 ~5 잘라내기
console.log('안녕하세요 반갑습니다'.slice(0,5));
console.log('안녕하세요 반갑습니다'.substring(0,5));
//=>차이점 slice는 매개변수로 마이너스 값 가능
console.log('안녕하세요 반갑습니다'.slice(0,-9));
console.log('안녕하세요 반갑습니다'.substr(2,5));

//toString() =>문자열로 변환
let num1 = 123;
console.log(typeof(num1 = num1.toString()));

console.log(true.toString());
console.log(typeof(true.toString()));
//object type 는 toString()으로 변환 불가
let obj = {
  key : 'Hong',
  value: 15
}
console.log(obj.toString());
//
console.log(obj.toString());
console.log(obj.key.toString());
console.log(obj.value.toString());
console.log(typeof(obj.value));

//match ('찾을 문자열') :문자열 or null 반환

let str4 = 'bad MORNING, GOOD AFTERNOON, good evening, and good night';
result = str4.match('good');
console.log(result);








