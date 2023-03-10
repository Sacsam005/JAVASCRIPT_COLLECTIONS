const mySet = new Set();
console.log(mySet);

mySet.add("this");
mySet.add("this"); //even used two times, the length of set remains same if value taken is same,as it does not let it repeat if not unique
mySet.add("my name");
mySet.add("sammy");

console.log(mySet);

let mySet2 = new Set([1, 2, "sam", true, { name: "ram" }]);

console.log("New Set:", mySet2);
console.log(mySet.has(true));
console.log(mySet2.has(true));

console.log("before removal", mySet);
mySet.delete("this");
console.log("after removal", mySet);

console.log(mySet.size); //determine the size
console.log(mySet2.size);

// iterating a set
for (key of mySet) {
  console.log(key);
}

// converting set into array
const myArr = Array.from(mySet2);
console.log(myArr);

// using forEach loop in mySet
mySet2.forEach((value) => {
  console.log(value);
});
