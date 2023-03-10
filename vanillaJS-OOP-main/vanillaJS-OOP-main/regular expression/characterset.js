// characters set

let regex = /s[0-9]m/; //if any value with the the [0-9] range is available in the string then it matches the regex

regex = /s[^a-z]m/i; // [^a-z] reads as [not of(a-z)]

// regex = /s[A-z]m/i;

// Quantifiers
regex = /s1m{2}y/i; //here m occurs two times so it matches the expression
regex = /s1m{2}y/i; //here m occurs 0-2 times so it matches the expression

// Groupings - use parenthesis for groupings()

regex = /(good){2}/; // here good occurs 2 times in the expression and matches

regex = /(good){2}([0-9]a){3}/; // here good occurs 2 times in the expression and matches
const str = "S1my bro is goodgood1a3a9a";

let result = regex.exec(str);
console.log(result);
