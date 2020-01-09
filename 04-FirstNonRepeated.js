//---------first non-repeated character from a string

let str = 'Today is Monday';

function NonRepeating(str){
  let map = new Map();
  
  for (let i=0;i<str.length-1;i++){
    if(!map.has(str[i])){
      map.set(str[i],1);
    } else{
      map.set(str[i],map.get(str[i]) +1);
    }
  }

  for (let i = 0; i < str.length; i++) { 
    let c = str.charAt(i); 
    if (map.get(c) == 1) {
       console.log(c); 
       break;
      } 
  }
}

NonRepeating(str);
