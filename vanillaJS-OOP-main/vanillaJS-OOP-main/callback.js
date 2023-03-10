const students = [
  { name: "sam", sub: "biology" },
  { name: "ram", sub: "science" },
];

function admit() {
  setTimeout(function () {
    console.log("i am here finally");
  }, 3000);
}

function enroll() {
  setTimeout(function () {
    console.log("this is done");
  }, 1000);
}

enroll();
admit();
