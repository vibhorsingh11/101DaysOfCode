let arr = [2, 3, 4, 10, 40];

function BinarySearch(arr,l,r,x) {
    let n = arr.length;
    
    if (l <= r){
        let mid = Math.trunc(l + (r-l) /2 );
        if (arr[mid] == x) {
            console.log(mid);
        } else {
            if (arr[mid] > x) {
                BinarySearch(arr,l,mid-1,x);
            } else {
                BinarySearch(arr,mid+1,r,x);
            }
        }
    }
    for (let i=0; i < arr.length; i++) {
        
    }
}

BinarySearch(arr,0,arr.length-1,40);
