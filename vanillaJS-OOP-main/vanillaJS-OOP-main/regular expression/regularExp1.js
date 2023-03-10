let firstName = "good";
firstName = /good/g;
// firstName = /good/i;

let a = "God is good and he will always remain good";
let result = firstName.exec(a);
let result1 = firstName.test(a);
let result2 = a.match(firstName);
let result3 = a.replace(firstName, "the best");
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
