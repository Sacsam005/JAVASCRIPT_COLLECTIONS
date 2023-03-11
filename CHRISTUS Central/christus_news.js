// "Access-Control-Allow-Credentials": "true",
// "Access-Control-Allow-Origin": "https://christushealth.sharepoint.com",
// "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
// "Access-Control-Allow-Headers": "Content-Type, Set Cookie",
const options = {
  method: "GET",
  headers: {
    "-Key": "",
    "-Host": "",
    "Content-Type": "application/json",
  },
};

const apiURL = "https://";

async function getData() {
  try {
    const response = await fetch(`${apiURL}`, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error", error);
  }
}
getData();

// async function fetchData() {
//   try {
//     const response = await fetch(
//       "CHRISTUS Central APIC.postman_collection.json"
//     );
//     const data = await response.json();
//     printName(data);
//   } catch (error) {
//     console.log("Error", error);
//   }
// }

// function printName(data) {
//   let itemName = data.info;
//   // for (var item in itemName) {
//   //   console.log(`${item} : ${itemName[item]}`);
//   // }
//   console.log(itemName);
// }

// fetchData();
