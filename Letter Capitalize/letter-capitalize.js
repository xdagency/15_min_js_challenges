/*
Have the function LetterCapitalize(str) take the str parameter being passed and 
capitalize the first letter of each word. Words will be separated by only one space. 
*/

function LetterCapitalize(str) { 

    // split str argument into words arr
    let words = str.split(' ');
    // create empty array to hold letters
    let letters = [];

    // loop through words/letters and capitalize first one
    for (let i = 0; i < words.length; i++) {
        letters = words[i].split('');
        letters[0] = letters[0].toUpperCase();
        words[i] = letters.join('');
    }

    // join back into str
    let output = words.join(' ');

    return output; 
         
}