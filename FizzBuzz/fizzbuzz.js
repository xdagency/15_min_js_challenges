/*
FizzBuzz in a Tweet
Write a function called fizzbuzz that accepts a single argument n. 
fizzbuzz should return "Fizz" if n is a multiple of 3, "Buzz" if n is a multiple of 5, 
“FizzBuzz” if n is a multiple of both 3 and 5, and n if n is a multiple of neither 3 nor 5.
*/

function fizzbuzz (n) {
    let o = "";
    if (n%3===0){o+="Fizz";}
    if (n%5==0){o+="Buzz";}
    if (n%3!=0 && n%5!=0) { o=n; }
    return o;
}

console.log(fizzbuzz(11));