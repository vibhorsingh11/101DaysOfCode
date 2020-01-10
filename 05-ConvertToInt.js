// Convert a given String into int like the atoi()

function ConvertToInt(str){
    //return parseInt(str);
    return Number(str);
}

let res = ConvertToInt('321');
console.log(res);