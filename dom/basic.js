// dom/basic.js

//DOM :생성, 속성, 삭제, 부모-자식 관계

//addEventListener ('이벤트이름','실행할 이벤트 핸들러')
'use strict';

document.addEventListener('DOMContentLoaded', function () {


  let h3Tag = document.getElementsByTagName('h3');
  //HTML Collection
  console.log(h3Tag);
  h3Tag[0].innerHTML = 'h3Tag[0]값';
  h3Tag[1].innerHTML = 'content changed';

  let first = document.getElementById('first');
  //element
  console.log(first);
  first.innerHTML = 'Git Changed';

  let second = document.getElementsByClassName('first');
  console.log(second);
  second[0].innerHTML = '안녕';

  //CSS 선택자 h3>div
  //DOM 생성
  let newList = document.createElement('li'); //<li>
  newList.innerHTML = 'Mango';
  console.log(newList);
  
  let third = document.querySelectorAll('ul>li');
  console.log(third);
  third[0].style.backgroundColor = 'yellow';
  for (let i = 0; i < third.length; i++) {
    third[i].style.color = 'red';
  }
  //ul 하위요소 <li>Mango</li>
  let ulTag = document.querySelector('ul');
  console.log(ulTag);
  ulTag.appendChild(newList);
});


