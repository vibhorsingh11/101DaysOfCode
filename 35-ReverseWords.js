let str = "getting good at coding needs a lot of practice";

function ReverseWords(str) {
    const newStr = str.split('').reverse().join("");    
    return newStr;
}

const res = ReverseWords(str);
console.log(res);