let str = "Sacsam005";
let links = document.links;
let href;

let link = Array.from(links).forEach(function (e) {
  href = e.href;
  if (href.includes(str)) {
    console.log(href);
  }
});


// using for of loop
let str = "Sacsam005";
let links = document.links;
let href;

for (link of links) {
  href = link.href;
  if (href.includes(str)) {
    console.log(href);
  }
}
