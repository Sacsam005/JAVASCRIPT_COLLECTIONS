let reg = /sam/;
reg = /sam/g; //g means global
// reg = /sam/i; //i means case insensitivity

let s = "this is sam and also sam is good";

// exec() will return an array for match or null for no match
let result = reg.exec(s);
console.log(result);
result = reg.exec(s);
console.log(result);

// test() returns true of false
let result1 = reg.test(s);
console.log(result1);

// match() will return an array of results or null
// need to write in opposite pattern than exec() and text()
let result2 = s.match(reg);

console.log(result2);

// search() will return the index of first match or -1

let result3 = s.search(reg);

console.log(result3);

// replace() returns new replace string with all the new replacement / if no global flag is given, only the first match is replaced
let result4 = s.replace(reg, "sammy");

console.log(result4);
