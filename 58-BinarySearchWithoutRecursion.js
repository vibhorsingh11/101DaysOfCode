let arr = [123, 243, 331, 1298];

function BinarySearch(arr, l, r, x) {
    while(l <= r) {
        let mid = Math.trunc(l + (r-l)/2);
        if(arr[mid] == x) {
            return ('Found at ' + mid);
        } else {
            if(arr[mid] > x) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
    }
    return ('Not Found');
}

const res = BinarySearch(arr,0,arr.length - 1,331);
console.log(res);