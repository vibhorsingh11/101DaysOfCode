function FloydTriangle(num) {
    let number = 1;
    for(let i = 1; i <= num; i++) {
        for(let j = 1;j <= i; j++) {
            document.write(number + ',');
            number++;
        }
        document.writeln('');
    }
}

FloydTriangle(5);
