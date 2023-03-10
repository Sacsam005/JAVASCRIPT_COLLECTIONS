function worker(name, salary, experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}

worker.prototype.slogan = function () {
  return `this worker ${this.name} whose salary ${this.salary} with experience ${this.experience} is amazing`;
};
let worker1 = new worker("sachin", 23000, "3 years");

console.log(worker1.slogan());

// inheritance
programmer.prototype = Object.create(worker.prototype);
programmer.prototype.constructor = programmer;

function programmer(name, salary, experience, language) {
  worker.call(this, name, salary, experience);
  this.language = language;
}

let worker2 = new programmer("harry", 20000, "1 year", "python lang");

console.log(worker2);


// on the console
programmer {name: 'harry', salary: 20000, experience: '1 year', language: 'python lang'}
experience: "1 year"
language: "python lang"
name: "harry"
salary: 20000
[[Prototype]]: worker
constructor: ƒ programmer(name, salary, experience, language)
[[Prototype]]: Object
