/*
Have the function LongestWord(sen) take the sen parameter being passed 
and return the largest word in the string. If there are two or more words 
that are the same length, return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. 
*/


function LongestWord(sen) { 

    // regex to get only alpha and spaces
    let re = /[a-z ]/i;
    // split the sen argument and place in letters arr
    let letters = sen.split('');
    // empty arr for the cleaned str
    let clean = [];

    // loop through letters arr, test against re and push to clean arr
    for (let i = 0; i < letters.length; i++) {
        if (re.test(letters[i])) {
            clean.push(letters[i]);
        }
    }

    // join them into words instead of letters
    let words = clean.join('').split(' ');
    // set the longest word
    let longestWord = words[0];

    // loop through words to find longest
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
         
}