// 1. Write code to check if a given string is a palindrome 
// (reads the same backward as forward).
var str = "1331"; 
var isPalindrome = true; 

for ( var index = 0 ; index< str.length / 2 ; index++ ){
    if ( str[index] !== str[ str.length-1-index ]   ) { 
        isPalindrome = false;
        break;
    }
}
console.log(isPalindrome);

// 2. Write code to count the number of words in a string. Assume words 
// are separated by spaces.

var charCountStr = "H E L L O"; 

var charCount = charCountStr.length;     // 9 

console.log(charCount); 

for ( var index = 0 ; index<charCountStr.length ; index++ ){
    if ( charCountStr[index]===" " ){
        charCount--;
    }
}
console.log(charCount); 


// 3. Write code to count the number of vowels (a, e, i, o, u, A, E, I, O, U) 
// in a string.


