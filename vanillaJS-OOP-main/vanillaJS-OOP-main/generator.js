// generators in javascript

function* numberGen() {
  let i = 0;

  //   yield 1;
  //   yield 2;
  //   yield 3;
  //   yield 4;

  while (true) {
    // yield (i++).toString();
    yield i++;
  }
}

const gen = numberGen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
