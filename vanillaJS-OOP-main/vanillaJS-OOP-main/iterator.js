function fruitsIter(values) {
  let nextIndex = 0;
  // we will return an object

  return {
    next: function () {
      if (nextIndex < values.length) {
        // return this object
        return {
          value: values[nextIndex++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

const myArr = ["apple", "banana", "grapes", "orange"];
console.log(`my array is`, myArr);

// using the iterator

const fruits = fruitsIter(myArr);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next()); //returns done: true after the iteration completes once

console.log(fruits.next().value);
