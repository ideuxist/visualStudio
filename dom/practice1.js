// dom/practice.js
document.addEventListener('DOMContentLoaded', function () {
  let menus = ['ice americano', 'cafe latte', 'vanila latter'];

  let menu = document.getElementById('show')

  let ul = document.createElement('ul');
  menus.forEach(function (val) {
    let li = document.createElement('li');
    li.innerHTML = val;
    ul.appendChild(li);
  })


  // li = document.createElement('li');
  // li.innerHTML = '카페라떼';
  // ul.appendChild(li);

  // li = document.createElement('li');
  // li.innerHTML = '바닐라라떼';
  // ul.appendChild(li);

  console.log(ul);

  menu.appendChild(ul)



});