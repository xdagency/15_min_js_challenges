/*
Create a function that takes an array of numbers between 1 and 10 
(excluding one number) and returns the missing number.
The array of numbers will be unsorted (not in order).
Only one number will be missing.
*/

function missingNums(arr) {
    
    let sorted = arr.sort(function(a,b) { return a-b });
    
    for(let i = 0; i < sorted.length-1; i++) {
        if (sorted[i+1] - sorted[i] != 1) {
            return sorted[i] + 1;
        }
    }

    if (sorted[0] === 1) {
        return 10;
    } else {
        return 1;
    }
    
}