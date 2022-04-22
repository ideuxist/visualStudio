//object/practice.js
const jsonObj = 
`[{"id":1,"first_name":"Jecho","last_name":"Tuhy","email":"jtuhy0@squarespace.com","gender":"Male","ip_address":"48.180.10.181"},
{"id":2,"first_name":"Rurik","last_name":"Poinsett","email":"rpoinsett1@weather.com","gender":"Male","ip_address":"119.36.89.86"},
{"id":3,"first_name":"Rebbecca","last_name":"Pilley","email":"rpilley2@disqus.com","gender":"Female","ip_address":"15.230.51.90"},
{"id":4,"first_name":"Robby","last_name":"Marques","email":"rmarques3@privacy.gov.au","gender":"Male","ip_address":"87.126.139.33"},
{"id":5,"first_name":"Sauncho","last_name":"Charnley","email":"scharnley4@wordpress.org","gender":"Male","ip_address":"251.246.39.128"},
{"id":6,"first_name":"Heloise","last_name":"Fynes","email":"hfynes5@uol.com.br","gender":"Female","ip_address":"42.217.241.212"},
{"id":7,"first_name":"Wayne","last_name":"Redmond","email":"wredmond6@mac.com","gender":"Bigender","ip_address":"177.120.34.64"},
{"id":8,"first_name":"Ricardo","last_name":"Rearden","email":"rrearden7@unicef.org","gender":"Male","ip_address":"57.95.247.117"},
{"id":9,"first_name":"Matthiew","last_name":"Benoiton","email":"mbenoiton8@soundcloud.com","gender":"Male","ip_address":"217.114.45.112"},
{"id":10,"first_name":"Karoly","last_name":"Blackstock","email":"kblackstock9@pinterest.com","gender":"Male","ip_address":"178.213.120.40"},
{"id":11,"first_name":"Heather","last_name":"Philip","email":"hphilipa@e-recht24.de","gender":"Female","ip_address":"31.140.144.31"},
{"id":12,"first_name":"Shaylah","last_name":"Sivewright","email":"ssivewrightb@wunderground.com","gender":"Female","ip_address":"85.66.106.106"},
{"id":13,"first_name":"Vickie","last_name":"Alpin","email":"valpinc@w3.org","gender":"Female","ip_address":"195.68.54.8"},
{"id":14,"first_name":"Katine","last_name":"Rockhall","email":"krockhalld@simplemachines.org","gender":"Female","ip_address":"124.107.22.215"},
{"id":15,"first_name":"Marcelline","last_name":"Gepheart","email":"mgephearte@mtv.com","gender":"Female","ip_address":"36.73.224.67"}]`

//json 문자열 = javascript 오브젝트 변경.

const objAry = JSON.parse(jsonObj);
console.log(objAry);
let fields = ['id','first_name','last_name','email'];
function showTable(ary){
  //<table><thead><tr><th></th>*항목갯수</tr></thead>
  //<tbody><tr><td></td>*항목갯수</tr>*건수</tbody>
  //</table>
  let tableTag = "";
  tableTag +='<table border = 1>'
  tableTag +=createHead();
  tableTag +=createBody(ary);
  tableTag += '</table>'
  

  document.write(tableTag);
}
function createHead(){
  let headTag = "";
  headTag += '<thead><tr>';
  fields.forEach(function(val){
    headTag += `<th>${val}</th>`
  });
  headTag += '</tr></thead>';
  console.log(headTag);
  return headTag;
}
function createBody(ary){
  //<tbody><tr><td></td>*항목갯수</tr>*건수</tbody>
  let bodyTag = "";
  bodyTag += '<tbody>'
  ary.forEach(function(val,idx){ 
    console.log(val);
    bodyTag += `<tr>`;    
    fields.forEach(function(field){
      bodyTag += `<td>${val[field]}</td>`
    });
    bodyTag += `</tr>`;


  });
  bodyTag += '<tbody>'
console.log(bodyTag);
return bodyTag;

}
showTable(objAry);