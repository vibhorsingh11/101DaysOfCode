function NonRepeatedChar(str) {
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
        if(map[char].count === 1) {
            return map[char].index;
        }
    }
    return 'No Non-Repeating Char found';
}

let result = NonRepeatedChar('abcdefghija');
console.log(result);