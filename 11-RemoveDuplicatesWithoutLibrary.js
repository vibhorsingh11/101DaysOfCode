let arr = [1, 1, 2, 2, 3, 4, 5];

function RemoveDuplicates(arr) {
    let prev = arr[0];
    let count = 0;
    for (let i=1; i<arr.length; i++) {
        if (prev == arr[i]) {
            count++;
        }
        prev = arr[i];
    }
    let res = new Array((arr.length - count));
    res[0] = arr[0];
    prev = arr[0];
    let index = 1;
    for (let i=1; i<arr.length; i++) {
        if (prev != arr[i]) {
            res[index++] = arr[i]
        }
        prev = arr[i];
    }
    return res;
}

let final = RemoveDuplicates(arr);
console.log(final);