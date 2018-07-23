/*
Have the function KaprekarsConstant(num) take the num parameter being passed which 
will be a 4-digit number with at least two distinct digits. Your program should 
perform the following routine on the number: Arrange the digits in descending order 
and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract 
the smaller number from the bigger number. Then repeat the previous step. Performing 
this routine will always cause you to reach a fixed number: 6174. Then performing the 
routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should 
return the number of times this routine must be performed until 6174 is reached. 
For example: if num is 3524 your program should return 3 because of the following steps: 
(1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174. 
*/

function KaprekarsConstant(num) { 

    // code goes here  
    let desc = 0;
    let asc = 0;
    let total = 0;
    
    for (let i = 1; i < 6174; i++) {
        
        desc = num.toString().split('');
        while (desc.length < 4) { desc.unshift('0'); }
        for (let i = 0; i < desc.length; i++) { desc[i] = Number(desc[i]); }
        desc.sort((a,b) => {return b-a});
        desc = desc.join('');
        
        asc = num.toString().split('');
        while (asc.length < 4) { asc.unshift('0'); }
        for (let i = 0; i < asc.length; i++) { asc[i] = Number(asc[i]); }
        asc.sort((a,b) => {return a-b});
        asc = asc.join('');
        
        if ((desc - asc) === 6174) {
            return i;
        } else {
            num = (desc - asc)
        }
        
    }
    
    return total; 
           
}