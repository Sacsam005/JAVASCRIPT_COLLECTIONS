let fetchBtn = document.getElementById("fetchBtn");

fetchBtn.addEventListener("click", clickHandler);

function clickHandler() {
  // instantiate xhr object
  console.log("sam");

  const xhr = new XMLHttpRequest();

  // open the object
  // use this for POST request
  xhr.open("POST", "	http://dummy.restapiexample.com/api/v1/create", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  // what to do on progress(optional)
  xhr.onprogress = function () {
    console.log("on progress");
  };

  // what to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("error");
    }
  };

  // send the request
  params = `{
    "name" : "Dzmitrysasa",
    "salary" : 1000,
    "age" : 28
}`;

  xhr.send(params);

  console.log("done");
}

let popBtn = document.getElementById("popHandler");
popBtn.addEventListener("click", popHandler);

function popHandler() {
  console.log("sam");

  const xhr = new XMLHttpRequest();

  // open the object
  // use this for POST request
  xhr.open("GET", "https://fakestoreapi.com/products?limit=5", true);

  // what to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
    } else {
      console.log("error");
    }
  };

  // send the request
  xhr.send();

  console.log("done fetching");
}
