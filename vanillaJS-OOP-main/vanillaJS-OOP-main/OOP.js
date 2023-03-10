//Object Oriented Programming in Javascript

//here we access the real objects and bring them into the functionality via javascript
//constructive function

// suppose I need to access the info of students from a Class
//this is a long way with lot of code but still easy 
function Person(name, age, DOB, grade, hobby) {
this.name=name;
this.age=age;
this.DOB=DOB;
this.grade=grade;
this.hobby=hobby;
}

var Sam={
    name:'Sam',
    age:23,
    DOB:'1/1/1999',
    grade:10,
    hobby:'eat',
};
var Grey={
    name:'Grey',
    age:23,
    DOB:'1/1/1999',
    grade:'A',
    hobby:'eat',
};
var Ram={
    name:'Ram',
    age:23,
    DOB:'1/1/1999',
    grade:'A',
    hobby:'eat',
};
var Kyle={
    name:'Kyle',
    age:23,
    DOB:'1/1/1999',
    grade:'A',
    hobby:'eat',
};

//this is another way to do the same thing but needs an understanding of constructive function

function Person(name, age, DOB, grade, hobby) {
    this.name=name;
    this.age=age;
    this.DOB=DOB;
    this.grade=grade;
    this.hobby=hobby;
}

let Nam=new Person('Nam',23, '1/1/29', 'A', 'eat');   //with 'new' keyword we are trying to create an instance of a particular object
let Jam=new Person('Jam',23, '1/1/29', 'B', 'sit'); 
let Pam=new Person('Pam',23, '1/1/29', 'C', 'read'); 
let Lam=new Person('Lam',23, '1/1/29', 'D', 'hit'); 