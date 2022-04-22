//object/practice2.js
//달력 만들기
let year = 2022;
let month = 4;
let day = ['일','월','화','수','목','금','토']
let tableTag ="";


function showCalendar(year,month){



  let lastDate = getLastDate(year,month)
  let firstDay = getFirstDay(year,month)
  
  // let tdTag="";
  // tdTag += `<tr>`
  // let cnt = 0;
  // for (i = 1; i<=FirstDay-1 ;i++){
    //   tdTag +=`<td></td>`
    //   cnt += 1;
    // }
    //   if (((FirstDay-1)+cnt)%7==0){
      //     tdTag+=`</tr>`
      
      //document.write('<table border=1><tr>')
      tableTag +='<table border=1><tr>'
      tableTag += createTr();
      // tableTag += firstInput();
      tableTag += inputDate();
      tableTag +='</tr><table border=1>'
      document.write(tableTag);
      function createTr(){
        let trTag="";
        
        day.forEach(function(val){
          trTag +=`<th>${val}</th>`;
          
        })
        
        console.log(trTag);
        return trTag;
      }
      
      // function firstInput(){
        //   let startTag = "";
        //   startTag += '<tr>'
        //   for (let i = 1; i<=FirstDay-1;i++){
          //     startTag +='<td> </td>'
          //   }
          //   startTag += '</tr>'
          //   return startTag;
          // }
          function inputDate(){
            let tdTag="";
            tdTag += `<tr>`
            for (let i = 0; i<firstDay;i++){
              
              tdTag +='<td> </td>'
            }
            
            for(let i =1; i<=lastDate;i++){
              
              tdTag +=`<td>${i}</td>`
              if ((i+firstDay)%7 == 0) {
    tdTag += `</tr>`
  }

  }
  return tdTag;
}
}
showCalendar(2022,4);


for (let i=1; i<=getLastDate(year,month); i++) {
  
}



function getLastDate(year,month) {
  switch (month) {
    case 1: return 31;
    case 2: return 28;
  case 3: return 31;
  case 4: return 30;
    case 5: return 31;
  
  
  
}
}

function getFirstDay(year,month) {
  switch (month) {
    case 1: return 6;
    case 2: return 1;
    case 3: return 2;
    case 4: return 5;
    case 5: return 0;
    case 6: return 3;
    case 7: return 5;
    case 8: return 2;
    case 9: return 5;
    case 10: return 3;
    case 11: return 3;
    case 12: return 3;
  
  }
}
