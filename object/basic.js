//object/basic.js

const member = {
  memberId: 'use1',
  memberName: 'Hong',
  getMemberName: function () {
    return `회원 아이디 ${this.memberName}`;
  },
  setMemberName: function (name) {
    this.memberName = name;
  }
}

console.log(member.memberId);
member.setMemberName('Hwang');
console.log(member.getMemberName());
member.memberAge = 20;
delete member.memberAge;
console.log(member)
member['memberPoint'] = 1100;
//member.memberPoint =1500;

member.grade = function () {
  if (this.memberPoint > 1000) {
    return 'platinum';
  } else if (this.memberPoint > 500) {
    return 'gold'
  }
}
console.log(member.grade());

//클래스,Construct 함수.=>object 생성

class Student {
  constructor(sno, sname) {
    this.sno = sno;
    this.sname = sname;
  }
  set mathScore(score) {
    this._mathScore = score; //생성자에 선언되지 않은 속성추가
  }
  get mathScore() {
    return this._mathScore; //_mathScore 속성값을 읽어오겠음
  }
  getSno() {
    return this.sno;
  }
  setSno(sno) {
    this.sno = sno;
  }
  // sum() {
  //   return this.sno + 1;
  // }

}
const s1 = new Student('1111', 'Hong');
const s2 = new Student('2222', 'Hong');

console.log(s1.getSno());
s1.engScore = 80;
s1.mathScore = 90;
console.log(s1.engScore);
console.log(s1.mathScore);

function Person(ssn, sname) {
  this.ssn = ssn;
  this.sname = sname;
  this.getInfo = function () {
    return `주민번호 ${this.ssn}, 이름 ${this.sname}`;
  }
}
  const p1 = new Person('111111-1111111', '홍길동');
  const p2 = new Person('121212-1222222', '박길동');
  const p3 = new Person('101010-1333333', '권길동');
  console.log(p1.getInfo());