//let arr = [101,102,103,104,105];
let arr = ["one", "two", "three", "four", "five"];

function Reverse(arr){
    let j = arr.length - 1;
    for (let i=0; i < j; i++) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
    }
    console.log(arr);
}

Reverse(arr);