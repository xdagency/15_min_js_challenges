/*
International Morse Code defines a standard encoding where each letter is mapped to a 
series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps 
to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:
[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Now, given a list of words, each word can be written as a concatenation of the Morse code 
of each letter. For example, "cab" can be written as "-.-.-....-", (which is the 
concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation 
of a word. Return the number of different transformations among all words we have.
*/

function morseCode(words) {

    // morse code alphabet
    let mc = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    // empty array to hold words converted to morse code
    let mcWords = [];

    // first loop through the array of words
    for (let i = 0; i < words.length; i++) {

        // split the word into letters
        let word = words[i].split('');
        // empty variable to hold the morse code ver of the word
        let mcWord = '';

        // then loop through the letters of the word and concatonate the morse codes
        for (let j = 0; j < word.length; j++) {
            // 97 is the charcode for a, so whatever the charcode of the letter - 97 will produce the position
            // in morse code array for that letter
            mcWord = mcWord + mc[word[j].charCodeAt() - 97];
        }

        // push the morse code word to array created earlier
        mcWords.push(mcWord);

    }

    // use the spread and Set object to get only unique values
    // the length of this new array will represent how many unique transformations there are in the array
    let totalTransfoms = [... new Set(mcWords)].length;
    
    return totalTransfoms;

}

console.log(morseCode(["gin", "zen", "gig", "msg"]));