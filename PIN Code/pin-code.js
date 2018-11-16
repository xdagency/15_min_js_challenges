/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain 
anything but exactly 4 digits or exactly 6 digits. Your task is to create a 
function that takes a string and returns true if the PIN is valid and false if it's not.
*/

function validatePIN(pin) {

    // If it's a number
    if (Number(pin)) {

        let trimmedPin = pin.trim() + '';

        // If it's 4 or 6 digits in length return true
        if (trimmedPin.length === 4 || trimmedPin.length === 6) {
            return true;

        // otherwise return false
        } else {
            return false;
        }

    } else {
        // If it's not a number return false
        return false;
    }
    
}