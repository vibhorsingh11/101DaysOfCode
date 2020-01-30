function StringDigit(str) {
    for(let char of str) {
        if(!isNaN(char))
        return "String contains numbers";
    }
    return "String does not contains numbers";
}

const res = StringDigit("geekfor123geeks");
console.log(res);