function primeN( b) {
    let count = 0;
    let n = b;
     for(let i =2 ;count <n ; i++){
       let a = printPrime(i);
       if(a){
           console.log(a);
           count++;
       }
     }
  }
  function printPrime(x){
     let isPrime= true;
     for(let i =2; i<= x/2 ;i++){
        if(x%i==0){
          isPrime=false;
        }
      }
    return (isPrime)? x : false;
  }
  primeN(10);