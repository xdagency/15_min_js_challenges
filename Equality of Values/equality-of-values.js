/*
Write a function that takes three input values (a, b, c) and returns the number of equal values.
*/

function equal(a, b, c) {
    
    // Create an array and sort it
    let arr = [a,b,c].sort();
    // Filter to only numbers that match other numbers
    let totalUnique = arr.filter((val, index) => { return val === arr[index - 1] || val === arr[index + 1] });
    // return the length of the new array
    return totalUnique.length;

}