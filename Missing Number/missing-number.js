/*
Create a function that takes an array of numbers between 1 and 10 
(excluding one number) and returns the missing number.
The array of numbers will be unsorted (not in order).
Only one number will be missing.
*/

function missingNums(arr) {
    
    // sort the array
    let sorted = arr.sort(function(a,b) { return a-b });
    
    // loop through and check if the number ahead of i minus i equals 1
    // if not, the number after i is missing
    for(let i = 0; i < sorted.length-1; i++) {
        if (sorted[i+1] - sorted[i] != 1) {
            return sorted[i] + 1;
        }
    }

    // otherwise if position 0 is 1, then 10 is missing
    if (sorted[0] === 1) {
        return 10;
    // if position 0 is not 1 then 1 is missing
    } else {
        return 1;
    }
    
}