let arr = [12, 14, 17, 15, 19, 20, -11];
// let arr = [2, 4, 7, 5, 9, 10, -1];

function PairArray(arr, k) {
    if(arr.length < 2)
        return;

    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if (sum == k) {
            console.log(arr[left], arr[right])
            left++; 
            right--;
        } else if(sum < k) {
            left++;
        } else if(sum > k) {
            right--;
        }
    }
}

PairArray(arr, 9);
