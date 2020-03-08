function Prime (num) {
    while (num % 2 == 0) {
        console.log(2 + ",");
        num = num / 2;
    }
    for (let i = 3; i <= Math.sqrt(num); i+=2) {
        while (num % i == 0) {
            console.log(i + ",");
            num = num / i;
        }
    }

    if (num > 2) {
        console.log(num)
    }
}

Prime(1092);
