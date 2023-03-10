let regex = /sam/;

let str = "sam is good and sam is always good";

// lets look into some meta characters symbols
regex = /^s/; // ^ means expression will match if the string starts with 's'

regex = /od$/; // $ at the end means expression will match if the string ends with 'od';

regex = /g.od/; // . in the middle means there could be any string in the position

regex = /g*d/; // matches 0 or more characters

regex = /g?o?/; // ? after the characters means that the characters are optional

regex = /g\*ood/;

let result = regex.exec(str);
console.log("the result from exec is", result);

if (regex.test(str)) {
  console.log(`the string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `the string ${str} does not match the expression ${regex.source}`
  );
}
