/*
Create a function that takes an array of strings and return an array, 
sorted from shortest to longest.
*/

function sortByLength(arr) {

    let sortedArr = arr.sort(function(a,b) {
        return a.length - b.length;
    })

    return sortedArr;

}

console.log(sortByLength(["Google", "Apple", "Microsoft", "Zen"]));