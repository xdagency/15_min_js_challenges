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

    let mc = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let mcWords = [];

    for (let i = 0; i < words.length; i++) {

        let word = words[i].split('');
        let mcWord = '';

        for (let j = 0; j < word.length; j++) {
            mcWord = mcWord + mc[word[j].charCodeAt() - 97];
        }

        mcWords.push(mcWord);

    }

    let totalTransfoms = [... new Set(mcWords)].length;
    return totalTransfoms;

}

console.log(morseCode(["gin", "zen", "gig", "msg"]));