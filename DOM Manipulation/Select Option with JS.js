//Make select options work using javascript
//User selects operation from the dropdown and gets the outcome accordingly...

//HTML for this task
/*   
<input type="number" id="num1" min="0" max="1000">
<input type="number" id="num2" min="0" max="1000">

    <select name="Operations" id="operations" aria-label=" Default select example">
        <option selected>Select operation...</option>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
    </select>
    <div id="result"></div>
*/

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("result");

const operations = document.getElementById("operations");

//Test the console for options value
for (var i = 0; i <= operations.length - 1; i++) {
  console.log(operations.value);
}

//User select options to perform operations
operations.addEventListener("click", () => {
  operations.addEventListener("change", function () {
    switch (operations.value) {
      case "selected":
        alert("Stop");
        break;
      //Todo: This gives [Violation] 'change' handler took 1286ms...
      case "add":
        result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
        break;
      case "subtract":
        result.innerHTML = parseInt(num1.value) - parseInt(num2.value);
        break;
      case "multiply":
        result.innerHTML = parseInt(num1.value) * parseInt(num2.value);
        break;
      case "divide":
        result.innerHTML = parseInt(num1.value) / parseInt(num2.value);
        break;
    }
  });
});
