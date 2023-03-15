const apiURL = "https://jsonplaceholder.typicode.com/users";
let data;
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => manipulateUserInfo(data))
  .catch((err) => console.log(err));

function manipulateUserInfo(data) {
  console.log(data);
  const userTable = document.createElement("div");
  userTable.setAttribute("class", "project-table-wrapper");

  let rows = "";
  let tableHeadings = "";

  for (let key in data[0]) {
    tableHeadings += `<th>${key.charAt(0).toUpperCase() + key.slice(1)}</th>`;
    console.log(key);
  }
  for (let i = 0; i < data.length; i++) {
    rows += `
      <tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].username.toLowerCase()}</td>
        <td>${data[i].email.toLowerCase()}</td>
        <td>${data[i].address.street}, ${data[i].address.suite},
          ${data[i].address.city.toUpperCase()},
          ${data[i].address.zipcode}
        </td>
        <td>${data[i].phone}</td>
        <td><a href="${data[i].website}" target="_blank">${
      data[i].website
    }</a></td>
        <td><span style="font-weight: 700">${data[i].company.name}:</span> ${
      (data[i].company.catchPhrase, data[i].company.bs)
    }</td>
      </tr>
    `;
  }
  userTable.innerHTML = `
            <table class="project-table table">
                <thead>
                <tr>
                ${tableHeadings}
                </tr>
                </thead>
                <tbody>
                        ${rows}
                </tbody>
            </table>
        `;
  document.body.insertAdjacentElement("afterbegin", userTable);
}
