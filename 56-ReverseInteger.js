function ReverseInteger(num) {
    let last = 0, reverse = 0;
    while(num >= 1) {
        last = num % 10;
        reverse = reverse * 10 + last;
        num = Math.trunc(num / 10);        
    }
    console.log(reverse);
}

ReverseInteger(123);