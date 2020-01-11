//let arr = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434];
let arr = [0.78,0.17,0.39,0.26,0.72,0.94,0.21,0.12,0.23,0.68];
let n = arr.length;
let tempArray = new Array(n);

let BucketSort = (arr) => {
   
    for(let i=0; i<n; i++){
        tempArray[i] = [];
    }    
    
    for(let i=0; i<n; i++){
        let index = Math.floor(arr[i] * n);
        tempArray[index].push(arr[i]);
    }

    for(let i=0;i<n;i++){
        InsertionSort(tempArray[i]);
    }

    let index = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<tempArray.length; j++){
            if(tempArray[i][j] != undefined)
            arr[index++] = tempArray[i][j];
        }
    }
}

let InsertionSort = (arr) => {
    let n = arr.length;
    for(let i=1; i<n; i++){
        let key = arr[i];
        let j = i - 1;
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

BucketSort(arr);
console.log(arr);