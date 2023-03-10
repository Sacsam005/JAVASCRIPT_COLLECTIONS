/*   write a program which leaves 3 characters from the string and converts the rest to Uppercase and if string length is
less than 3, then convert the string to lowercase    */

function upperCase(str) {   //I  ve created a func with a single param(str)
    if(str.length <= 3) {       //given the condition as per the question
        return str.toLowerCase;     //return the new value
    }

    frontPart=(str.substring(0,3).toLowerCase());   //first 3 characters are gonna be lowerCase here
    backPart=str.substring(3, str.length);          //no change in other than first 3 characters
    return frontPart + backPart;                    //return the new value by adding the above conditions
}

console.log(upperCase('JAVASCRIPT'));               // console check
