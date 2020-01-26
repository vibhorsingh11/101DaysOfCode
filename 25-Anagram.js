function anagrm(a,b){
    a = a.toLowerCase().split('').sort().join('');
    b = b.toLowerCase().split('').sort().join('');
    return (a == b) ? "Anagrams" : "Not Anagrams";
}
console.log(anagrm("word","wrdol"));
