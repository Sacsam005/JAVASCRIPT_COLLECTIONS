// promise - resolve, reject, pending

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;  //catches error and goes to 'else' if true //catches error and goes to 'if' condition if false
      if (!error) {
        console.log("resolved");
        resolve();
      } else {
        console.log("rejected");
        reject("sorry no fulfilled");
      }
    }, 2000);
  });
}

func1()
  .then(function () {                               //functiom inside then is - resolve()
    console.log("thanks for resolving");
  })
  .catch(function () {
    console.log("not resolved but rejected");       // //functiom inside catch is - reject()
  });
