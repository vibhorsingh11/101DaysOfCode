function CheckPalindrome(text) {
    if(text.length < 2) {
        return text;
    }
        
    return CheckPalindrome(text.substring(1)) + text.charAt(0);
}

let str = "aaa";
const reverse = CheckPalindrome("aaa") == str ? true : false ;
console.log(reverse);