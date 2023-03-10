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
