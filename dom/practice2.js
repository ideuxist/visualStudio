// dom/practice2.js

document.addEventListener('DOMContentLoaded', function () {

  let divTag = document.createElement('div');
  
  let spanName = document.createElement('span');
  spanName.setAttribute('id','name');
  //spanTag.innerHTML = '홍길동';
  let name = document.createTextNode('홍길동');
  spanName.appendChild(name);
  
  
  let spanAge = document.createElement('span');
  spanAge.setAttribute('class','age'); //attribute node추가
  //spanTag.innerHTML = '20살';
  let age = document.createTextNode('20살');
  spanAge.appendChild(age);
  
  let hypen = document.createTextNode('-');
  
  divTag.appendChild(spanName);
  divTag.appendChild(hypen);
  divTag.appendChild(spanAge);
//  let idShow = document.getElementById('show')
 
 
 
 
 console.log(divTag);

});
