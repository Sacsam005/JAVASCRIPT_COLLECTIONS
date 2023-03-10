// my button
let myBtn = document.getElementById("myBtn");

// div with content
let content = document.getElementById("content");

// function getData() {
//   console.log("started get data");
//   url = "sam.txt";
//   fetch(url)
//     .then((response) => {
//       console.log("inside first then");
//       return response.text();
//     })
//     .then((data) => {
//       console.log("inside second then");
//       console.log(data);
//     });
// }

// function getData() {
//   console.log("started get data");
//   url = "https://api.github.com/users";
//   fetch(url)
//     .then((response) => {
//       console.log("inside first then");
//       return response.json();
//     })
//     .then((data) => {
//       console.log("inside second then");
//       console.log(data);
//     });
// }

function postData() {
  url = "http://dummy.restapiexample.com/api/v1/create";
  data = '{"name":"test","salary":"123","age":"23"}';
  params = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: data,
  };
  fetch(url, params)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

postData();
