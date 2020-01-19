function QuickSort(arr, low, high) {
    if (low < high) {
        let m = Partition(arr, low, high);
        QuickSort(arr, low, m - 1);
        QuickSort(arr, m + 1, high);
    }
}

function Partition(arr, low, high) {
    let pivot = arr[high];
    let j = low - 1;
    for (let i=low; i<high;i++) {
        if (arr[i] <= pivot) {
            j++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;            
        }
    }
    let temp = arr[j+1];
    arr[j+1] = arr[high];
    arr[high] = temp;
    return (j+1);
}

let arr = [10, 80, 30, 90, 40, 50, 70];
let low = 0;
let high = arr.length - 1;
let sortedArray = QuickSort(arr, low, high);
console.log(arr);