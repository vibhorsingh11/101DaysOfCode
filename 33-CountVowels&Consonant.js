function CountVandConsonants(str) {
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"]
    for (let letter of str.toLowerCase()){
        if (vowels.includes(letter)) {
           count++
        }
    }
    const conso = str.length - count;
    console.log("Vowel count " + count);
    console.log("Consonant count " + conso);
}

CountVandConsonants("Please enter some text");