function NewUser(firstName, lastName, age, email) {
  // const user = Object.create(newUser.prototype);
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;

  // return this;
}

NewUser.prototype.about = function () {
  return `${this.firstName} is ${this.lastName}`;
};

NewUser.prototype.is18 = function () {
  return this.age >= 20;
};

const new1 = new NewUser("sam", "nammy", 23, "sacsam@email.com");
const new2 = new NewUser("ram", "lammy", 23, "sacsam@email.com");
const new3 = new NewUser("nam", "tammy", 23, "sacsam@email.com");

// console.log(new1);
// console.log(new1.is18());

// console.log(new1);
// console.log(new1.about());

for (let key in new1) {
  if (new1.hasOwnProperty(key)) {
    console.log(key);
  }
}

// function createUser(firstName, age) {
//   this.firstName = firstName;
//   this.age = age;
// }

// createUser.prototype.about = function () {
//   console.log(this.firstName, this.lastName);
// };

// const person = new createUser("sham", 5);

// console.log(person.about());
