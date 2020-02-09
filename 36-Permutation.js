function Permutation(string) {
    if (string.length < 2) return string;
  
    var permutations = []; 
    for (var i = 0; i < string.length; i++) {
      var char = string[i];
  
      if (string.indexOf(char) != i)
        continue; 
  
      var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);
  
      for (var subPermutation of Permutation(remainingString))
        permutations.push(char + subPermutation)
    }
    return permutations;
  }

let res = Permutation('123');
console.log(res);
