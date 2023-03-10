let fetchBtn = document.getElementById("fetchBtn");

fetchBtn.addEventListener("click", clickHandler);

function clickHandler() {
  // instantiate xhr object
  console.log("sam");

  const xhr = new XMLHttpRequest();

  // open the object
  xhr.open("GET", "sam.txt", true);

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
  xhr.send();
}
