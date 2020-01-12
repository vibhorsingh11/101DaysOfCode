//let arr = [1,4,1,2,7,5,2];
let arr = [5,2,9,5,2,3,5];

function CountingSort(arr) {
    let max = Math.max(...arr);

    let indexArray = new Array(max + 1);
    for (let i=0; i<indexArray.length; i++) {
        indexArray[i] = 0;
    }
    
    for (let i=0; i<indexArray.length - 1; i++) {
        indexArray[arr[i]]++;
    }
    let k = 0;
    for (let j=0; j<indexArray.length; j++){
        let temp = indexArray[j];
        while(temp--){
            arr[k++] = j;
        }
        
    }
    console.log(arr);
}

CountingSort(arr);
