// 1. Write a function `greet` that takes a name as a parameter and returns a
//greeting message.

/* 
    1. Create the function which will give the greeting mesasge 
    2. Name of the person will be the parameter 
*/

function greet( name ){             // Line 9 to 11 -> FUNCTION BODY 
    return "Hello " + name + "!";
}
console.log( greet("Francisco") );    // FUNCTION IS CALLED 


// 2. Write a function `calculateArea` that takes the length and width of a 
//rectangle as parameters and returns its area.
function calculateArea( length, width ) {
    return length * width;
}

console.log( calculateArea( 10, 5 ) );

// 3. Write a function `isEven` that takes a number as a parameter and returns 
//`true` if it is even, and `false` otherwise.

function isEven( intValue ){
    if ( intValue % 2 ===0 ){
        return true; 
    }
    else {
        return false;
    }
}

console.log( isEven(11) );

// 4. Write a function `calculateAverage` that takes an array of numbers as 
//a parameter and returns the average of those numbers.
function calculateAverage(num1, num2, num3){
    var sum = 0; 
    sum = num1 + num2 + num3;

    var average = sum/3; 
    return average;
}

console.log( calculateAverage(5, 10, 15));


// 5. Implement a function that checks if a given number is a palindrome 
//(e.g., 121, 1331).


