function BubbleSort(arr) {
    let n = arr.length;
    
    for(let i=0;i<n;i++){
        for(let j=i;j<n-i;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

//Running code with below input
let arr = [ 20, 12, 45, 19, 91, 55 ];
let arr = [ -3, -9, -2, -1 ];

let res = BubbleSort(arr);
console.log(res);