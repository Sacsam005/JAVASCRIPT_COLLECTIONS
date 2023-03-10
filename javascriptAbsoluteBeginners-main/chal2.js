//Challegnge to practice string methods

//remove a character from the specified position of the given string and return the new string

function removeCharacter(str, char) {
    var str1=str.substring(0, char);
    var str2=str.substring(char +1, str.length);
    return (str1 +str2);    
}

console.log(removeCharacter);
