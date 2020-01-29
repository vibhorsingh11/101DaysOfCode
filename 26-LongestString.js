let longestSubstring = function (str) {
    let map = new Map();
    let count = 0;
    let max = 0;
    for(let char of str) {
        if(map.has(char)){
            if(count > max) {
                max = count;
            }
            count = 0;
            map.clear();
        } else {
            map.set(char);
            count++;
        }
    }
    console.log(max);
}

longestSubstring("ABDEFGABEF");
longestSubstring("BBBB");
longestSubstring("GEEKSFORGEEKS");