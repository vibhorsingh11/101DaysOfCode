let arr = [1, 1, 2, 2, 3, 4, 5];

let RemoveSort = (arr) => {
  let set = new Set();
  arr.forEach(function(element){
    set.add(element);
  })
  for(let data of set){
    console.log(data);
  }  
}

RemoveSort(arr);
