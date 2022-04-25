// string/practice2.js

let sso = ['970101-2234567','970101 234567','9701012234567','970101/2234567'];
let check;

//console.log('970101-1234567'.replace(/\D/,''));

function checkGender (ssn) {
  ssn.forEach(function (num){
    result = num.replace(/\D/,'')
    //console.log(result);
    if (result.charAt(6)==1){
      
      console.log(result +'남자');
      
    }else if  (result.charAt(6)==2) {
      
      console.log(result +'여자');
      
      
    }else{
      console.log.apply('?');
    }
    
  });
};

      
checkGender(sso);
  



