function obj1(name) {
  this.name = name;
}

obj1.prototype.getName = function () {
  return this.name;
};

obj1.prototype.setName = function (newName) {
  this.name = newName;
};

let obj2 = new obj1("harry", 21, "sut");
console.log(obj2.toString());
