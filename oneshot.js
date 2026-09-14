// console.log("kamlakant");
// console.log("I love kavya");

// fullName = "Kamlakant kumar";
// age = 24;
// price = 99.99;
// console.log(fullName);
// console.log(price);

//variables

//var
var fullName = "kamlakant kumar";
var age = 21;
var totalprice = 100000;
console.log(fullName);
console.log(age);
var age = 25;
console.log(age);


//full concept of const variables
const pi = 3.14;
console.log(pi);
//const pi = 3.14159; // This will throw an error because you cannot reassign a const variable


//let
let city = "gaya";
console.log(city);
city = "patna";
console.log(city);


//q.no.1:create a const object called "product" to store information.
const product = {
    tittle: "laptop",
    rating: 5,
    offer:5,
    price: 100000,

}
console.log(product);

//q.no.2: create a const object called "profile" to store information from the linkedIn profile.
const profile = {
    role:"software engineer",
    experience:1,
    skills:["javascript","react","node.js"],
    location:"bihar",
    github:"https://github.com/kamlakantkumar51 ",
    linkedin:"www.linkedin.com/in/kamlakant-kumar-300379209",
    followers:1105,
    connections:500,
}
console.log(profile);


//operators in javascript
//arithmetic operators

let a = 10;
let b = 5;
console.log("a+b");
console.log("a+b = "+(a+b));
console.log("a-b = "+(a-b));
console.log("a*b = "+(a*b));
console.log("a/b = "+(a/b));
console.log("a%b = "+(a%b));

//increment & decrement operators
console.log("a++ = "+(a++));
console.log("++a = "+(++a));
console.log("a-- = "+(a--));
console.log("--a = "+(--a));

//assigned operators
console.log("a += b = "+(a+=b));
console.log("a -= b = "+(a-=b));
console.log("a *= b = "+(a*=b));
console.log("a /= b = "+(a/=b));
console.log("a %= b = "+(a%=b));
console.log("a **= b = "+(a**=b));
console.log("a &= b = "+(a&=b));
console.log("a != b = "+(a!= b));
console.log("a == b = "+(a==b));
console.log("a === b = "+(a===b));
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);


//logical operator
console.log(a && b);
console.log(a || b);
console.log(!a);
console.log(!b);


//conditional statement
if(a > b){
    console.log("a is gtreater than b");
}
let color;
if(color == "red"){
    console.log("The color is red");
}

if( age > 21){
    console.log("you are eligible for voting..");
}else{
    console.log("you are not eligible for voting");
}

let number = 50;
if(number %2 == 0){
    console.log("even");
}else if(number %2 != 0){
    console.log("odd");
}else{
    console.log("it's a positive integer");
}




//ternary operator
let aged = 21;
aged >= 18 ? console.log("you are eligible for voting"):console.log("you are not eligible for voting");




//q.no.1:Get user to input a number and check whether the number is a multiple of 5 or not

let num = prompt("Enter a number");
if(num % 5 == 0){
    console.log("number is a multiple of 5");
}else{
    console.log("number is not a multiple of 5");
}

//q.no.2: write a program to which can give grades to students according to their scores.
// 80-100:A
// 10-89:B
// 60-79:c
// 50-59:D
// 0-49:F

let score = prompt("enter your score");
if(score >= 80 && score <= 100){
    console.log("Grade: A");
}else if(score >= 10 && score <= 89){
    console.log("Grade: B");
}else if(score >= 60 && score <= 79){
    console.log("Grade: C");
}else if(score >= 50 && score <= 59){
    console.log("Grade: D");
}else{
    console.log("Grade: F");
}
