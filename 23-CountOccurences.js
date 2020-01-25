let str = "Cracking the Coding Interview";
let count = 1;

function CountOccurences(str, chars) {
    let map = new Map();
    
    for (let i = 0; i < str.length; i++ ) {
        let char = str[i];
        if(char in map) {
            map[char].count++;
        } else {
            map[char] = { count: 1, index: str[i] };
        }
    }
    
    for(char in map) {
        if(map[char].index === chars) {
            return map[char].count;
        }
    }
}

const res = CountOccurences(str,'i');
console.log(res);