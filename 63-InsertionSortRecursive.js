let arr = [4,3,2,10,12,1,5,6];

function InsertionSort(arr, n){
  let key;
  let j;
  if(n <= 1){
      return;
  }
  InsertionSort(arr, n-1);
  key = arr[n-1];
  j = n-2;
  while(j>=0 && arr[j] > key){
    arr[j+1] = arr[j]; 
    j = j - 1;
  }
  arr[j+1] = key;
  
}

InsertionSort(arr, arr.length);
console.log(arr);