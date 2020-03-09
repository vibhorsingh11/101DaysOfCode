function Prime(limit) {
    for(let num = 2; num <= limit; num++) {
        if(isPrime(num)) {
            console.log(num);
        }
    }    
}

function isPrime(num) {
    for(let i=2; i<=num; i++) {
        if(num % i == 0) {
            return false;
        }
        return true;
    }
}

Prime(20);
