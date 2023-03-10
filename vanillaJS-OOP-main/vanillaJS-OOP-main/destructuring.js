// destructuring in javascript

// array destructuring
let a, b;
[a, b] = [2, 4];

console.log(a + b);

[a, b, c, ...d] = [4, 5, 6, 6, 3, 4, 5, 4];

console.log(a, b, c, d);
console.log(d);

// object destructuring
laptop = {
  model: "hp",
  price: 3500,
  battery: "6 hrs",
  start: function () {
    console.log("started");
  },
};

const { model, price, battery, start } = laptop;
console.log(model, price, start);
start();
