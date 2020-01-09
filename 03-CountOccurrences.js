let str = 'Today is Monday';
//Find the count of 'a' in the string.

//----------------------------Approach using Map in JavaScript----------
let map = new Map();

for (let i=0;i<str.length-1;i++){
  if(!map.has(str[i])){
    map.set(str[i],1);
  } else{
    map.set(str[i],map.get(str[i]) +1);
  }
}

console.log(map.get('a'));


//--------------Using Recusion approach------------

let occur = 'a';
let strCount=0;
function Count(str,occur){
  if(str.length > 0){
    if(str.substring(1,2) == 'a')
      strCount++;
    
    Count(str.substring(1),occur);
  }
}
Count(str,occur);
console.log(strCount);
