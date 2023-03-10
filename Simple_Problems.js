//Challenge1: Sum of any two numbers

var a, b;
function sum(a,b){              //use of function to make the code reusable for future arguments
    result=(a+b);
    console.log(result);        //returning the console
}
sum(2,4);                      //invoking a function with values as I consoled the result inside of a function

//Challenge2: Write a program to swap two numbers...
num1=2;                         //here I have followed the elementary maths principle; classic a=b, b=c, then c=a
num2=3;
tempNum=num1;                   //I have assigned num1 to tempNum, num2 to num1, then tempNum to num2 following above principle
num1=num2;
num2=tempNum;

console.log(num1);
console.log(num2);

//Challenge3: Write a program to swap two numbers without using third variable...
//given;
num1=2;
num2=3;
num1=num1 + num2;                   //here adding both the number makes the value of num1+=num2!!!
num2=num1 - num2;                   //num2 takes the new value of num1 and subtracts given num2=3 from it...
num1=num1 - num2;                   //new num1 is calculated by subtracting the new num2 that from the new num 1

console.log(num1); 
console.log(num2);

//Challenge4: Write a program to check if a given year is leap year or not...
//Leap years are any years exactly divisible by 4 such as 2016, 2020 but not by 100 such as 2100,2200
//again century years exactly divisible by 400 such as 2000, 2400...
var year;

function leapYear(year) {                              //use of nested loop inside of a function
if(year % 4 === 0) {                
    if(year % 100 === 0) {
        if(year % 400 === 0) {
            console.log('The year ' + year + ' is a leap year.')
        } else {
            console.log('The year ' + year + ' is not a leap year.');
        }
    } else {
        console.log('The year ' + + year + ' is a leap year.');
    }
} else {
    console.log('The year ' + year + ' is not a leap year');
}
}

leapYear(2008);

//Challenge5: Print multiplication table for any numbers using for loop
var n;

function multiTable(n){                              //multiTable is a name of function I created
    for(var i=1; i<=10; i++){                        //here i is the length multiplication table that I want to repeat 
    console.log(n + '*' + i + '='  + n * i);         //n is the num whose multiplication table is what I want
}
}

multiTable(3);

//Challenge6: Find the index of elements in array 
const arr=[1,2,3,4,5,6];                                        //can be done using indexOf

let newArr = arr.map((current, index, arr) => {                 //using arrow function
    return result = `${current} is the element of ${arr} whose index no is ${index}`;
})
console.log(newArr);

//Challenge7: Find the square root of each element of a given array...
let arr = [25, 9, 4, 81, 16];

let newArr = arr.map((currentElm) => {
    return result = Math.sqrt(currentElm);   //use of Math.sqrt method passing the currentElm of an array in it
    
})

console.log(arr);                            //prints the original array
console.log(newArr);                         //prints the new array after performing the arrow function expression

//Challenge8: Multiply each element of a given array by 2 and return only those whose value is greater tha 20...
let arr = [25, 9, 4, 81, 16];

let newArr = arr.map((currentELm) => {      //with parameter of current elements inside an arrow function 
     return (currentELm * 2);               //m just getting list of current elements and * by 2...
}).filter((currentElem) => {                //again filtering the array of list of new current elements > 30...
    return currentElem > 30;
})
console.log(arr);
console.log(newArr);

//Challenge9: Add the elements of a given array and also calculate its average...
let arr = [25, 9, 4, 81, 16];

let sum = arr.reduce((accumulator, current) => {
    result= accumulator+=current;                //every time the new value is added/stored in the accumulator
    return result;    
})
let average = arr.reduce((accumulator, current, index, arr) => {
    return result / arr.length;                  //passing the result from previous func and /by length of array
})

console.log(arr);
console.log(sum);
console.log(average);

//Challenge10: Display only 300 characters of a string like the one used in twitter and some other platforms..
let myTweet = 'I am mister developer and frontend engineer and on and on and on...'

let actualTweet = myTweet.slice(0, 300);    //includes 0-279=280 characters/cuts off the extra characters

console.log(actualTweet);

//Challenge11: Return the unicode of the last character in a string...
var str = 'Developer';

var newStr = str.charCodeAt(str.length-1);        //use of charCodeAt method
console.log(newStr);                              //str.length-1 refers to the last character of the string

//OR

var str;
function unicodeStr(str){
 return newStr = str.charCodeAt(str.length-1); 
}

console.log(unicodeStr('Developer'));

