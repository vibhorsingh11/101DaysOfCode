function func1 (str){
    let arr = new Array();
    let max = "";
    for (let a of str.split(" ")){
      if(palindrome(a)){
        arr.push(a);
        max = (max.length > a.length ) ? max : a;
     }
    }
    return max;
   }
   function palindrome(word){
     return word.split('').join(",") == word.split('').reverse().join(",")? true : false ;
   }
   
   console.log(func1("There is forgeeksskeegrof ana ."));