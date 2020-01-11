let arr = [4,3,2,10,12,1,5,6];

function InsertionSort(arr){
  let key;
  let j;
  for(let i=1;i<arr.length;i++){
    key = arr[i];
    j = i-1;
    while(j>=0 && arr[j] > key){
      arr[j+1] = arr[j]; 
      j = j - 1;
    }
    arr[j+1] = key;
  }
}

InsertionSort(arr);
console.log(arr);