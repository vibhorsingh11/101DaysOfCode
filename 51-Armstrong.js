function CheckArmstrong(num) {
    let sum = 0;
    let original = num;
    while (num != 0) {
        let reminder = Math.trunc( num%10);
        sum = sum + (reminder * reminder * reminder);
        num = num/10;
    }
    
    if (original == sum) {
        return 'Is Armstrong Number';
    } 
    return 'Not Armstrong Number';
}

const res = CheckArmstrong(371);
console.log(res);
