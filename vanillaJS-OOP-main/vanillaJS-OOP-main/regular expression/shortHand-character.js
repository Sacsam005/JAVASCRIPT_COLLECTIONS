// characters set

let regex = /\wmy/; // \w means word characters - or _alphabet or numbers

regex = /\w+my/; // \w+ means occurrence of one or more word characters

regex = /\Wmy/; // \W means occurrence non-word characters

regex = /\W+my/; // \W+ means occurrence of more than one non word characters

regex = /\d+999/; // \d+ means occurrence non-digits

regex = /\D+999/; // \D+ means occurrence of more than one non-digit

regex = /\s+999/; // \s means matches whitespace characters

regex = /\S+999/; // \S means matches more than one whitespace characters

regex = /3a9a\b/; // \S means matches more than one whitespace characters

// Assertions
regex = /m(?=y)/; // it means give me all the occurrences that has 'm' and 'y' after that

regex = /d(?!y)/;
const str = "S$my bro is goodgood1a3a9a call no 0394938y999";

// Assertions

let result = regex.exec(str);
console.log(result);
