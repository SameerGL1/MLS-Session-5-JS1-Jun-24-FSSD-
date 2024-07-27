// 1. Create a variable `favoriteFruits` and assign it an array of strings 
// representing your favorite fruits.
var favoriteFruits = [ "Apple", "Banana", "Orange" ];
console.log( favoriteFruits );

// 2. Create a variable `mixedArray` that contains a mix of data types, 
// including numbers, strings, and booleans.
var mixedArray = [ 1, 2, 3, 4, 5, "String1", "String2", true, false, 1.45, 0.23 ];
console.log( mixedArray );


// 3. Write a program that iterates through each number of an array using 
// for..of loop and computes the sum of squares of each of these numbers.



// 4. Write a program to find maximum number in a numeric array.
var arr = [ 10, 15, 30, 2, 5, 48, 100, 36, 17 ];        // highest number = 100 
var max = arr[0];       // as of now the first number 10 is the highest number 

for ( var index=0 ; index<arr.length ; index++ ){
    if ( arr[index] > max ){
        max = arr[index];
    }
}
console.log( max );

// 5. Write a program to reverse an array

let actualArr = [ 1, 2, 3, 4, 5 ];
//                s           e 
let start = 0;  // start variable will point to the first value from left side 
let end = actualArr.length-1 // end variable will point to the last value from the left side 

while( start < end  ){
        // swapping of two numbers 
        let temp = actualArr[start];
        actualArr[start] = actualArr[end];
        actualArr[end] = temp;
        
        start++; 
        end--;
}

console.log(actualArr);