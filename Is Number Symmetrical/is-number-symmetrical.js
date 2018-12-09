/*
    Create a function that takes a number as an argument and returns true or false 
    depending on whether the number is symmetrical or not. A number is symmetrical 
    when it is the same as its reverse.
*/

function isSymmetrical(num) {
    
    let reverseNum = num.toString().split('').reverse().join('');
    if (reverseNum == num) { return true; } else { return false; }
    
}

console.log(isSymmetrical(1114111));