// for loop
// for in loop
// for of loop

const people = ["sam", "ram", "jam", "kam", "lam"];

// traditional for loop
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

obj = {
  name: "sam",
  hobby: "eat",
  age: 23,
};

for (key in obj) {
  console.log(key, ":", obj[key]);
}

// for of loop
for (person of people) {
  console.log(person);
}

// for in loop
for (person in people) {
  console.log(people[1]);
}
