console.log("      $");
console.log("     ##");
console.log("    ####");
console.log("   ######");
console.log("  #########");
console.log(" ############");
console.log("###############");

// maps in javascript
const people = ["sam", "ram", "nam", "pam", "lam"];

//  we can use any type of key or values using map

const myMap = new Map();
console.log(myMap);

const key1 = "myStr",
  key2 = {},
  key3 = function () {};

//set map values

myMap.set(key1, "this is a string");
myMap.set(key2, "this is blank");
myMap.set(key3, "this is a empty function");

console.log(myMap);

//getting values from myMap
value1 = myMap.get(key1);
value2 = myMap.get(key2);
value3 = myMap.get(key3);

console.log(value1);
console.log(value2);
console.log(value3);

// get the size of the map
console.log(myMap.size);

// we can loop using for of to get key and values

// for (let [key, value] of myMap) {
//   console.log(key, value);
// }

// get only keys
for (let key of myMap.keys()) {
  console.log("key is ", key);
}

for (let value of myMap.values()) {
  console.log("value is ", value);
}

// map using forEach()

myMap.forEach((value, key) => {
  console.log("key is", key);
  console.log("value is", value);
});

// converting map to array

let myArr = Array.from(myMap);
console.log("map to array is ", myArr);

let keysArray = Array.from(myMap.keys());
console.log(keysArray);

let valuesArray = Array.from(myMap.values());
console.log(valuesArray);

console.log(keysArray, valuesArray);
