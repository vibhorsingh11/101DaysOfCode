let str = "Sony is going to introduce Internet TV soon";

function ReverseRecursively(str) {
    if(str.length < 2)
        return str;

    return ReverseRecursively(str.substring(1)) + str.charAt(0);
}

const res = ReverseRecursively(str);
console.log(res);