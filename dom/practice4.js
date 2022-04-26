// dom/practice4.js

document.addEventListener('DOMContentLoaded',function(){

  let showDiv = document.querySelector('#show');
  showDiv.style.width = '150px';
  showDiv.style.height = '150px';
  showDiv.style.backgroundColor = 'gray';

  let inputTag = document.getElementById('userName');
  inputTag.addEventListener('change',function(){
    let span = document.createElement('span');
    span.style.backgroundColor = 'red';
    span.style.color = 'white';
    span.style.display = 'inline-block';
    span.style.paddingLeft = '2px';
    span.style.paddingRight = '2px';
    span.style.marginLeft = '2px';
    span.style.marginRight = '2px';
    span.innerHTML = document.querySelector('#userName').value;
    
    showDiv.appendChild(span);
    document.querySelector('#userName').value = '';
  })

  //버튼 이벤트추가
  let add = document.querySelector('#addBtn')
  add.addEventListener('click',function(){
    let span = document.createElement('span');
    span.style.backgroundColor = 'red';
    span.style.color = 'white';
    span.style.display = 'inline-block';
    span.style.paddingLeft = '2px';
    span.style.paddingRight = '2px';
    span.style.marginLeft = '2px';
    span.style.marginRight = '2px';
    span.innerHTML = document.querySelector('#userName').value;
    
    showDiv.appendChild(span);
    document.querySelector('#userName').value = '';



  })
});