class employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  slogan() {
    return `i am ${this.name} and I am ${this.age} years old and I make ${this.salary} per month`;
  }

  income() {
    if (this.salary >= 3000) {
      return `Sam is Senior`;
    } else if (this.salary >= 1000 && this.salary <= 2500) {
      return `Sam is Mid Senior`;
    } else {
      return `Sam is a newbie`;
    }
  }

  joiningYear() {
    return 2021 - this.salary;
  }

  static add(a, b) {
    return a + b;
  }
}

class programmer extends employee {
  constructor(name, age, salary, language, experience) {
    super(name, age, salary);
    this.language = language;
    this.experience = experience;
  }

  favLang() {
    if (this.lang == "python") {
      return "python";
    } else {
      return "javascript";
    }
  }

  static multiply(a, b) {
    return a * b;
  }
}

let ram = new programmer("ram", 25, 1000, "java", "3 years");

let sam = new employee("sam", 23, 3500);

console.log(sam.income());
console.log(employee.add(2, 4));
console.log(ram.favLang());
console.log(programmer.multiply(4, 7));
