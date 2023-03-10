// symbols

const symbol1 = Symbol("sam");
const symbol2 = Symbol("sam");

console.log("symbol is ", symbol1);
result = symbol1 === symbol2;
console.log(result);

const a = Symbol("2");
const b = Symbol("2");

console.log(a == b);

const k1 = Symbol("id k1");
const k2 = Symbol("id k2");

myObj = {};
myObj[k1] = "sam";
myObj[k2] = "ram";

console.log(myObj);
console.log(myObj[k1]);
// console.log(myObj.k1); cannot do .k1

for (key in myObj) {
  console.log(key, myObj[key]);
}

console.log(JSON.stringify(myObj));
