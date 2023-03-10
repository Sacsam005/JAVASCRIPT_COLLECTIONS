const doc = document.body;
const aTag = document.createElement("a");
const href = document.createElement("href");
const heading = document.createElement("h1");

let text = document.createTextNode("Go to text");

heading.appendChild(text);

aTag.setAttribute("href", "https://www.codewithHarry");
aTag.appendChild(href);

console.log(aTag);
console.log(heading);
