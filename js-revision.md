# JavaScript Notes

## Table of Contents

1. [Basic Console Output](#1-basic-console-output-commented)
2. [Variables](#2-variables)
3. [Operators in JavaScript](#3-operators-in-javascript)
4. [Conditional Statements](#4-conditional-statements)
5. [Functions](#5-functions)
6. [DOM (Document Object Model)](#6-dom-document-object-model)
7. [DOM Manipulation](#7-dom-manipulation)
8. [Events](#8-events)
9. [Class and Object](#9-class-and-object)
10. [Sync in JS](#10-sync-in-js)
    - [Synchronous](#synchronous)
    - [Asynchronous](#asynchronous)
    - [Callback](#callback)
    - [Callback Hell](#callback-hell)
    - [Promise](#promise)
    - [async / await](#async--await)
    - [IIFE](#iife-immediately-invoked-function-expression)

---

# Part 1: Basics

## 1. Basic Console Output (commented)

```js
// console.log("kamlakant");
// console.log("I love kavya");

// fullName = "Kamlakant kumar";
// age = 24;
// price = 99.99;
// console.log(fullName);
// console.log(price);
```

---

## 2. Variables

```js
//variables

//var
var fullName = "kamlakant kumar";
var age = 21;
var totalprice = 100000;
console.log(fullName);
console.log(age);
var age = 25;
console.log(age);
```

### const

```js
//full concept of const variables
const pi = 3.14;
console.log(pi);
//const pi = 3.14159; // This will throw an error because you cannot reassign a const variable
```

### let

```js
//let
let city = "gaya";
console.log(city);
city = "patna";
console.log(city);
```

### Practice Questions

```js
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
    linkedin:"[www.linkedin.com/in/kamlakant-kumar-300379209](https://www.linkedin.com/in/kamlakant-kumar-300379209)",
    followers:1105,
    connections:500,
}
console.log(profile);
```

---

## 3. Operators in JavaScript

### Arithmetic Operators

```js
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
```

### Increment & Decrement Operators

```js
//increment & decrement operators
console.log("a++ = "+(a++));
console.log("++a = "+(++a));
console.log("a-- = "+(a--));
console.log("--a = "+(--a));
```

### Assignment & Comparison Operators

```js
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
```

### Logical Operators

```js
//logical operator
console.log(a && b);
console.log(a || b);
console.log(!a);
console.log(!b);
```

---

## 4. Conditional Statements

```js
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
```

### Ternary Operator

```js
//ternary operator
let aged = 21;
aged >= 18 ? console.log("you are eligible for voting"):console.log("you are not eligible for voting");
```

### Practice Questions

```js
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
```

---

## 5. Functions

```js
// ============================================================
//                        FUNCTIONS
// ============================================================
// function = a reusable block of code. write once, use many times.
```

### 5.1 Function declaration (no parameters)

```js
//1. function declaration (no parameters)
function greet(){
    console.log("hello, welcome to javascript");
}
greet();   // calling the function
greet();   // can call it as many times as we want
```

### 5.2 Function with parameters

```js
//2. function with parameters
// parameters = variables in the definition, arguments = real values we pass
function sayHello(name){
    console.log("hello, " + name);
}
sayHello("kamlakant");
sayHello("kavya");
```

### 5.3 Function with return value

```js
//3. function with return value
// return sends a value back and stops the function
function addNumbers(x, y){
    return x + y;
}
let sumResult = addNumbers(10, 20);
console.log("sum = " + sumResult);
```

### 5.4 Function expression

```js
//4. function expression (function stored in a variable)
const multiply = function(x, y){
    return x * y;
};
console.log("multiply = " + multiply(4, 5));
```

### 5.5 Arrow function

```js
//5. arrow function (short syntax, came in ES6)
const subtract = (x, y) => x - y;   // single line = automatic return
const square = n => n * n;          // one parameter = no brackets needed
console.log("subtract = " + subtract(10, 4));
console.log("square = " + square(6));
```

### 5.6 Default parameters

```js
//6. default parameters
function welcomeUser(user = "guest"){
    console.log("welcome, " + user);
}
welcomeUser("kamlakant");
welcomeUser();   // uses default value "guest"
```

### 5.7 Callback function

```js
//7. callback function (passing a function as an argument)
function calculate(x, y, operation){
    return operation(x, y);
}
console.log(calculate(10, 5, addNumbers));   // 15
console.log(calculate(10, 5, subtract));     // 5
```

### 5.8 Scope

```js
//8. scope (where a variable can be used)
let globalMsg = "I am global";       // available everywhere
function scopeDemo(){
    let localMsg = "I am local";     // available only inside this function
    console.log(globalMsg);
    console.log(localMsg);
}
scopeDemo();
// console.log(localMsg);  // error: localMsg is not defined outside the function
```

### Practice Questions

```js
//q.no.1: write a function to check whether a number is a multiple of 5 or not
function isMultipleOf5(n){
    return n % 5 == 0;
}
console.log(isMultipleOf5(25));   // true
console.log(isMultipleOf5(12));   // false

//q.no.2: write a function which takes a score and returns the grade
function getGrade(marks){
    if(marks >= 80 && marks <= 100){
        return "A";
    }else if(marks >= 60 && marks < 80){
        return "C";
    }else if(marks >= 50 && marks < 60){
        return "D";
    }else if(marks >= 0 && marks < 50){
        return "F";
    }else{
        return "invalid score";
    }
}
console.log("Grade: " + getGrade(85));
console.log("Grade: " + getGrade(55));

//q.no.3: write an arrow function to find the bigger number out of two numbers
const findMax = (x, y) => x > y ? x : y;
console.log("max = " + findMax(12, 30));
```

---

# Part 2: Browser (DOM and Events)

## 6. DOM (Document Object Model)

```js
// ============================================================
//                    DOM (Document Object Model)
// ============================================================
// DOM = the browser turns our HTML page into a tree of objects.
// javascript can read and change this tree using the "document" object.
//
//   document
//     └── html
//          ├── head
//          └── body
//               ├── h1
//               ├── p
//               └── ...
//
// (the matching HTML elements are in index.html)
```

### Selecting Elements

```js
//selecting elements
let heading = document.getElementById("heading");        // by id (returns one element)
let para = document.querySelector(".para");              // first match of css selector
let allItems = document.querySelectorAll("#list li");    // all matches (NodeList)
let boxes = document.getElementsByClassName("box");      // by class name (HTMLCollection)
let paras = document.getElementsByTagName("p");          // by tag name

console.log(heading);
console.log(para);
console.log(allItems);
console.log(allItems.length);
console.log(allItems[0]);
```

### Exploring the Tree

```js
//useful properties to explore the tree
console.log(heading.parentElement);          // parent node
console.log(para.nextElementSibling);        // next element
console.log(document.body.children);         // all children of body
console.log(document.title);                 // page title
```

---

## 7. DOM Manipulation

```js
// ============================================================
//                     DOM MANIPULATION
// ============================================================
// manipulation = changing content, style, attributes, or structure of the page
```

### 7.1 Changing text content

```js
//1. changing text content
heading.textContent = "Hello from JavaScript";      // plain text only
para.innerHTML = "This is <b>bold</b> text";        // can contain html tags
```

### 7.2 Changing styles

```js
//2. changing styles (css properties are written in camelCase)
para.style.color = "blue";
para.style.fontSize = "20px";
para.style.backgroundColor = "lightyellow";
```

### 7.3 classList

```js
//3. classList (add / remove / toggle css classes)
let firstBox = document.querySelector(".box");
firstBox.classList.add("active");
firstBox.classList.remove("active");
firstBox.classList.toggle("active");      // adds if missing, removes if present
console.log(firstBox.classList.contains("active"));   // true or false
```

### 7.4 Attributes

```js
//4. attributes
let link = document.getElementById("myLink");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://github.com/kamlakantkumar51");
link.setAttribute("target", "_blank");
link.removeAttribute("target");
```

### 7.5 Creating and adding new elements

```js
//5. creating and adding new elements
let list = document.getElementById("list");
let newItem = document.createElement("li");   // create
newItem.textContent = "Node.js";              // add content
list.appendChild(newItem);                    // add to the end of the list

let firstItem = document.createElement("li");
firstItem.textContent = "HTML";
list.prepend(firstItem);                      // add at the start of the list
```

### 7.6 Removing elements

```js
//6. removing elements
// list.removeChild(newItem);
// firstItem.remove();
```

### textContent vs innerHTML vs innerText

```js
//textContent vs innerHTML vs innerText
// textContent : gives all text, ignores css, safest
// innerText   : gives only visible text
// innerHTML   : gives text + html tags (avoid with user input, it is not safe)
```

### Practice Questions

```js
//q.no.1: change the heading text to your name and colour it red
heading.textContent = "Kamlakant Kumar";
heading.style.color = "red";

//q.no.2: add 3 skills from the profile object to the list using a loop
for(let i = 0; i < profile.skills.length; i++){
    let li = document.createElement("li");
    li.textContent = profile.skills[i];
    list.appendChild(li);
}
```

---

## 8. Events

```js
// ============================================================
//                          EVENTS
// ============================================================
// event = something that happens on the page (click, typing, hover, key press...)
// we "listen" for the event and run a function (event handler) when it happens.
```

### 8.1 Inline handler property

```js
//1. inline handler property (only one handler per event)
let changeBtn = document.getElementById("changeBtn");
changeBtn.onclick = function(){
    heading.textContent = "Button was clicked";
};
```

### 8.2 addEventListener

```js
//2. addEventListener (best way, we can add many handlers for same event)
let themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark");
});
```

### 8.3 Event object

```js
//3. event object (browser gives us details about the event)
let colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", (event) => {
    console.log(event.type);      // "click"
    console.log(event.target);    // the element which was clicked
});
```

### 8.4 Input event

```js
//4. input event (runs on every key typed in the input)
let nameInput = document.getElementById("nameInput");
let output = document.getElementById("output");
nameInput.addEventListener("input", (e) => {
    output.textContent = "Hello, " + e.target.value;
});
```

### 8.5 Mouse events

```js
//5. mouse events
let hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.backgroundColor = "orange";
});
hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.backgroundColor = "lightgray";
});
```

### 8.6 Keyboard events

```js
//6. keyboard events
document.addEventListener("keydown", (e) => {
    console.log("key pressed: " + e.key);
});
```

### 8.7 Form submit

```js
//7. form submit (preventDefault stops the page from reloading)
let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form submitted with: " + nameInput.value);
});
```

### Common Events

```js
//common events: click, dblclick, mouseover, mouseout, input, change,
//               keydown, keyup, submit, focus, blur, load, scroll
```

### Practice Questions

```js
//q.no.1: make a counter, button click should increase the number by 1
let count = 0;
let counterText = document.getElementById("counter");
let countBtn = document.getElementById("countBtn");
countBtn.addEventListener("click", () => {
    count++;
    counterText.textContent = count;
});

//q.no.2: take a number in the input box and on button click show if it is even or odd
let evenOddInput = document.getElementById("evenOddInput");
let evenOddBtn = document.getElementById("evenOddBtn");
let evenOddResult = document.getElementById("evenOddResult");
evenOddBtn.addEventListener("click", () => {
    let n = Number(evenOddInput.value);
    evenOddResult.textContent = n % 2 == 0 ? n + " is even" : n + " is odd";
});
```

---

# Part 3: Object-Oriented JavaScript

## 9. Class and Object

```js
// ============================================================
//                     CLASS AND OBJECT
// ============================================================
// object = a collection of key:value pairs (properties) and functions (methods).
// class  = a blueprint/template used to create many objects of the same type.
```

### 9.1 Object with a method

```js
//1. object with a method (this = the object itself)
const student1 = {
    name: "kamlakant",
    age: 21,
    marks: [80, 90, 75],
    introduce: function(){
        console.log("hi, I am " + this.name + " and I am " + this.age + " years old");
    }
};
student1.introduce();
console.log(student1.name);        // dot notation
console.log(student1["age"]);      // bracket notation
student1.city = "gaya";            // add new property
student1.age = 22;                 // update property
delete student1.city;              // delete property
```

### 9.2 Looping through an object

```js
//2. looping through an object
for(let key in student1){
    console.log(key + " : " + student1[key]);
}

//problem: if we need 100 students we cannot write 100 objects by hand. use a class.
```

### 9.3 Class, constructor and methods

```js
//3. class, constructor and methods
class Student{
    // constructor runs automatically when we create a new object with "new"
    constructor(name, age, course){
        this.name = name;
        this.age = age;
        this.course = course;
    }

    // methods
    introduce(){
        console.log("hi, I am " + this.name + ", studying " + this.course);
    }

    birthday(){
        this.age++;
        console.log(this.name + " is now " + this.age);
    }
}

let s1 = new Student("kamlakant", 21, "computer science");   // object (instance)
let s2 = new Student("kavya", 20, "design");
s1.introduce();
s2.introduce();
s1.birthday();
console.log(s1 instanceof Student);   // true
```

### 9.4 Static method

```js
//4. static method (belongs to the class, not to the objects)
class MathHelper{
    static double(n){
        return n * 2;
    }
}
console.log(MathHelper.double(8));    // called on the class directly
```

### 9.5 Inheritance

```js
//5. inheritance (extends and super)
class Person{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(this.name + " is speaking");
    }
}

class Developer extends Person{
    constructor(name, language){
        super(name);                  // calls the parent constructor
        this.language = language;
    }
    code(){
        console.log(this.name + " writes code in " + this.language);
    }
}

let dev = new Developer("kamlakant", "javascript");
dev.speak();    // inherited from Person
dev.code();     // own method
```

### 9.6 Getters and setters

```js
//6. getters and setters
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get area(){
        return (pi * this.radius * this.radius).toFixed(2);   // uses our const pi
    }
    set newRadius(value){
        if(value > 0){
            this.radius = value;
        }
    }
}
let circle1 = new Circle(5);
console.log(circle1.area);      // used like a property, no brackets
circle1.newRadius = 10;
console.log(circle1.area);
```

### Practice Questions

```js
//q.no.1: create a class "Product" with title, price and offer. add a method to show the final price after offer (in %)
class Product{
    constructor(title, price, offer){
        this.title = title;
        this.price = price;
        this.offer = offer;
    }
    finalPrice(){
        return this.price - (this.price * this.offer / 100);
    }
}
let laptop = new Product("laptop", 100000, 5);
console.log(laptop.title + " final price = " + laptop.finalPrice());

//q.no.2: create a class "BankAccount" with deposit and withdraw methods
class BankAccount{
    constructor(owner, balance = 0){
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
        console.log("deposited " + amount + ", balance = " + this.balance);
    }
    withdraw(amount){
        if(amount > this.balance){
            console.log("insufficient balance");
        }else{
            this.balance -= amount;
            console.log("withdrawn " + amount + ", balance = " + this.balance);
        }
    }
}
let account = new BankAccount("kamlakant", 5000);
account.deposit(2000);
account.withdraw(1000);
account.withdraw(10000);
```

---

# Part 4: Asynchronous JavaScript

## 10. Sync in JS

### Synchronous

Synchronous means the code runs in a particular sequence of instructions given in the program.Each instruction wait for the previous instruction to complete it

**eg:-**

```js
console.log("Task 1");

console.log("Task 2");

console.log("Task 3");

console.log("Task 4");
```

---

### Asynchronous

Asynchronous JavaScript is a programming model in which long-running or potentially blocking operations are initiated without stopping the execution of the main JavaScript thread. Once the operation completes, its result is handled through mechanisms such as callbacks, Promises, or async/await, allowing other JavaScript code to execute while waiting.

**eg:-**

```js
console.log("Task 1");

setTimeout(() => {
    console.log("Task 2");
}, 3000);

console.log("Task 3");

console.log("Task 4");
```

---

### Callback

It is a function passed as an argument to another function

**eg :-**

```js
function greet(name, callback) {
    console.log("Hello " + name);

    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Kamlakant", sayBye);
```

---

### Callback Hell

Callback Hell is a situation in JavaScript where multiple nested callback functions are used to handle dependent asynchronous operations, making the code deeply nested, difficult to read, maintain, and debug.

**eg:-**

```js
getUser(function(user) {

    getPosts(user, function(posts) {

        getComments(posts, function(comments) {

            getLikes(comments, function(likes) {

                console.log("All data received");

            });

        });

    });

});
```

---

### Promise

A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

- it is a solution of callback hell
- function with two handler resolve and reject

#### Promise states

promise has 3 states :- pending,resolve & rejected

**eg :-**

```js
const promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Data received successfully");
    } else {
        reject("Something went wrong");
    }

});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

#### Important promise methods

```js
//important promise methods 
Promise.all()
Promise.allSettled()
Promise.race()
Promise.any()
```

---

### async / await

async/await is JavaScript syntax for working with Promises, where async declares a function that returns a Promise, and await pauses the execution of that async function until the awaited Promise settles, without blocking the JavaScript event loop.

```js
//code
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function fetchData() {

    console.log("Start");

    const data = await getData();

    console.log(data);

    console.log("End");
}

fetchData();
```

---

### IIFE (Immediately Invoked Function Expression)

An IIFE (Immediately Invoked Function Expression) is a JavaScript function expression that is defined and executed immediately after it is created.

```js
function greet() {
    console.log("Hello");
}

greet();
```
