// Comment
/*
Comment
*/

// Log to console
console.log("Hello world");
console.log(123);
console.log(true);
var greeting = "Hello, user!"
console.log(greeting);
console.log([1,2,3]);
console.log({a:1, b:2});
console.table({a:1, b:2});
console.error('This is some error');
console.clear();
console.warn('This is a warning');
console.time('Hello');
  console.log("Hello world");
  console.log("Hello world");
  console.log("Hello world");
  console.log("Hello world");
console.timeEnd('Hello');

// // var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // Only things that can be in variables:
// // letters, numbers, _, $
// // Cannot start with a number

// // Multi-word vars
// Naming Variables
// var firstName = 'John' // Camel case
// var first_name = 'Sarah' // Underscore
// var FirstName = 'Tom'; // Pascal case


//////////////////
// TYPES OF VARIABLES
//////////////////


// LET
// let nombre;
// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST
const name = 'John Doe';
console.log(name);
// Can not reassign a const
// name = 'Steve Smith'; <-- Does not work
// Also have to assign a value
// const greeting; <-- Does not work

// BUT, you can change something inside of a const, just not a const itself, like so:
const person = {
  name: 'John',
  age: 30
}
person.name = 'Sara';
console.log(person);

// Same thing with arrays & consts
const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);


//////////////////
// TYPES OF DATA TYPES
//////////////////


// Primitive data types:
// Strings
// Numbers = Integers, decimals, floats, all of those are numbers in JS
// Booleans
// Null = Intentionally empty value
// Undefined
// Symbols

// Reference data types / Objects:
// Arrays
// Object Literals
// Functions
// Dates
// Anything Else

// String
const name1 = 'John Doe';
console.log(typeof name1);

// Number
const age = 45;
console.log(typeof age);

// Boolean
const hasKids = true;
console.log(typeof hasKids);

// Null
const car = null;
console.log(typeof car); // Shows up as an object, a bug in JS

// Undefined
let test; // const can't be used with an undefined variable
console.log(typeof test);

// Symbol
const sym = Symbol();
console.log(typeof sym);

// Array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

// Object literal
const address = {
  city: 'Sioux Falls',
  state: 'SD'
}
console.log(typeof address);

// Date
const today = new Date();
console.log(typeof today);


//////////////////
// TYPE CONVERSIONS
//////////////////


let val;

// Number to string
val = String(555);
val = String(4+4);

// Boolean to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1,2,3,4]);

// toString()  ---  Alternative to String()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');

// Boolean to number
val = Number(true); // 1
val = Number(false); // 0

// Null to number
val = Number(null); // Null gives 0

// String to number
val = Number('hello'); // NaN, an actual value that means "Not a Number"

// String to array
val = Number([1,2,3]); // NaN

val = parseInt('100'); // Parses as an integer
val = parseFloat('100.31') // Parses based on the number of decimals toFixed() has in the parenthesis (this would give us 100.3 currently)

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length); // Length of character, for strings
console.log(val.toFixed()); // Length of decimals, for numbers


//////////////////
// TYPE COERCIONS (when JS converts for you)
//////////////////


// This example changes val2 to a string & then concatenates it to the end of val1
const val1 = '5';
const val2 = 6;
const sum = val1 + val2; // If this were Number(val1 + val2) it would end up being a number
console.log(sum);
console.log(typeof sum);


//////////////////
// MATH IN JS
//////////////////


const num1 = 100;
const num2 = 50;
let val0;

// Simple math with numbers
val = num1 + num2; // Addition
val = num1 - num2; // Subtraction
val = num1 * num2; // Multiplication
val = num1 / num2; // Division
val = num1 % num2; // Modulus, gives remainer

console.log(val0);


//////////////////
// MATH OBJECT IN JS
//////////////////


let VAL;
VAL = Math.PI; // pi
VAL = Math.E; // Euler's number
VAL = Math.round(2.4); // 2
VAL = Math.ceil(2.4); // 3
VAL = Math.floor(2.8); // 2
VAL = Math.sqrt(64); // 8
VAL = Math.abs(-3); // 3, absolute value of -3
VAL = Math.pow(8, 2) // 64, 8 to the power of 2
VAL = Math.min(1322, 22, 1, 56, 999, 1000, -4); // -4, finds the min value
VAL = Math.max(2, 99, 142, 73, 81, 299, 3045); // 3045, finds the max value
VAL = Math.random(); // Gives a random decimal
VAL = Math.random() * 20; // Gives a random number with a decimal between 0 & 19
VAL = Math.random() * 20 + 1; // Gives a random number with a decimal between 1 & 20
VAL = Math.floor(Math.random() * 20 + 1); // Gives a random integer between 1 & 20

console.log(VAL);


//////////////////
// STRINGS METHODS & CONCATENATION
//////////////////


const firstName = 'William';
const lastName = 'Johnson';
const str = 'Hello there my name is Levi'
const tags = 'web development,web design,programming'
let Val;

Val = firstName + lastName;

// Concatenation
Val = firstName + ' ' + lastName;
Val = 'Hello, my name is ' + firstName + ' & I am ' + age + '.';

// Append
Val = 'Brad'; // Normal
Val += 'Traversy'; // Appending

// Escaping
Val = 'That\'s awesome, I can\'t wait!';

// Length
Val = firstName.length;

// Concat
Val = firstName.concat(' ', lastName); // same result as concatenation but as a method

// Change case
Val = firstName.toUpperCase();
Val = firstName.toLowerCase();

// Get certain character of a string
Val = firstName[2];

// Index of
Val = firstName.indexOf('l'); // Finds the first time the thing in parenthesis shows up & gives the index of it
Val = firstName.lastIndexOf('l'); // Finds the last time the thing in parenthesis shows up & gives the index of it
// If it doesn't find the character at all it will give back a value of -1

// charAt()
Val = firstName.charAt('2'); // Opposite of indexOf()

// Get last char
Val = firstName.charAt(firstName.length - 1);

// substring()
Val = firstName.substring(0, 4); // Returns 'Will', because it takes the first 4 letters of the string

// slice(), mostly used with arrays, but you can also use it with strings
Val = firstName.slice(0, 4); // Just like substring
Val = firstName.slice(-3); // Unlike substring, you can start from the back

// split()
Val = str.split(' '); // Splits at the space
Val = tags.split(','); // Creates array of each tag

// replace()
Val = str.replace('Levi', 'Jerry'); // Replace the first part with the last in the string

// includes()
Val = str.includes('foo'); // Returns boolean to tell you if it is included in the string or not

console.log(Val);


//////////////////
// TEMPLATE LITERALS (aka template strings, part of ES6, compatable with all web browsers though)
//////////////////


const name2 = 'John';
const age2 = 31;
const job2 = 'Entrepreneur';
const city2 = 'Mazatlan';

// Without template strings (es5 way)
html = '<ul><li>Name: ' + name2 + '</li><li>Age: ' + age2 + ' </li><li>Job: ' + job2 + ' </li><li>City: ' + city2 + ' </li></ul>';
// OR
html = '<ul>' +
        '<li>Name: ' + name2 + '</li>' +
        '<li>Age: ' + age2 + '</li>' +
        '<li>Job: ' + job2 + '</li>' +
        '<li>City: ' + city2 + '</li>';

function hello(){
  return 'hello';
}

// With template strings (es6 way)
html = `
  <ul>
    <li>Name: ${name2}</li>
    <li>Age: ${age2}</li>
    <li>Job: ${job2}</li>
    <li>City: ${city2}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age2 > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`


document.body.innerHTML = html;


//////////////////
// ARRAYS & ARRAY METHODS
//////////////////


// Create some arrays
const numbers1 = [1,2,3,4,5,6,7,8,9,10];
const numbers2 = new Array(22, 45, 33, 76, 534);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let valerie;

// Get array length
valerie = numbers1.length; // returns 10

// Check if is array
valerie = Array.isArray(numbers1); // boolean result

// Get single value
valerie = numbers1[3]; // returns 4

// Insert into array
numbers1[2] = 100;

// Finx index of value
valerie = numbers2.indexOf(33); // returns 2

// Add onto end of the array
numbers1.push(250); // puts 250 on the end

// Add onto front of the array
numbers1.unshift(120); // 120 at beginning

// Take off from end
numbers1.pop();

// Take off from front
numbers1.shift();

// Splice values
numbers.splice(1, 1); // Takes out 2
numbers.splice(1, 4) // Takes out 2 through 5

// Reverse array
numbers.reverse();

// Concatenate array
valerie = numbers1.concat(numbers2);

// Sorting arrays
valerie = fruit.sort();
valerie = numbers.sort(); // basically numbers each position in the array

// Use the "compare function"
valerie = numbers1.sort(function(x, y){
  return x - y;
})

// Reverse sort
valerie = numbers1.sort(function(x, y){
  return y - x;
})

// Find
function under50(num){
  return num < 50;
}
valerie = numbers.find(under50); // finds first number under 50

console.log(numbers1);
console.log(valerie);


//////////////////
// OBJECT LITERALS
//////////////////


const person1 = { // One thing to note here is I was testing naming variables inside of an object, very cool functionality that they are unique just by being inside of a unique object
  firstName: 'Steve',
  lastName: 'Smith',
  age: 22,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2018 - this.age;
  }
}

let valkyrie;

valkyrie = person1;

// Get specific value
valkyrie = person1.firstName; // Recommended way
valkyrie = person1['firstName']; // Not recommended way
valkyrie = person1.age;
valkyrie = person1.hobbies[1];
valkyrie = person1.address.state;
valkyrie = person1.address['city'];
valkyrie = person1.getBirthYear();

console.log(valkyrie);

// Array of objects
const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23}
];

// Looping through array of objects
for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}


//////////////////
// DATES & TIMES
//////////////////


let vel;

// Working with date object
const tuhday = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

vel = tuhday;
vel = tuhday.getMonth(); // O-based result
vel = tuhday.getDate(); // Gets the date of the month, i.e 9 if it is the 9th
vel = tuhday.getDay(); // Get a numerical representation starting from Sunday
vel = tuhday.getFullYear(); // Returns year, like 2018
vel = tuhday.getHours(); // Returns military time hour
vel = tuhday.getMinutes(); // Returns minutes of the hour we're on
vel = tuhday.getSeconds(); // Returns seconds of the minute we're on
vel = tuhday.getMilliseconds(); // Returns milliseconds of the second we're on
vel = tuhday.getTime(); // Returns timestamp, amount of seconds that have passed since 1/1/1970

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(vel);
console.log(birthday);


//////////////////
// IF STATEMENTS & COMPARISON OPERATORS
//////////////////


const id = 100;

// EQUAL TO
if(id == 100){
  console.log('The value is 100.');
} else if (id == 10){
  console.log('The value is 10.');
} else {
  console.log('Fine, the value is ' + id + '.');
}

// NOT EQUAL TO
if (id != 101){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE
if (id === 101){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO VALUE & TYPE
if (id !== 101){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// TEST IF UNDEFINED
if (typeof id !== 'undefined'){
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// GREATER, LESS THAN, GREATER OR EQUAL TO, LESS THAN OR EQUAL TO
if (id > 100 || id < 100 || id >= 100 || id <= 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// IF ELSE
const color = 'red';

if (color === 'red'){
  console.log('Color is red');
} else if (color === 'blue'){
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

// LOGICAL OPERTAORS

const name240 = 'Steve';
const age240 = 20;

// & &&
if (age > 0 && age < 12){
  console.log(`${name240} is a child.`);
} else if (age >= 13 && age <= 19){
  console.log(`${name240} is a teenager.`);
} else {
  console.log(`${name240} is an adult.`);
}

// OR ||
if (age < 16 || age > 65){
  console.log(`${name240} can not run in the race.`);
} else {
  console.log(`${name240} is registered for the race.`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'Correct' : 'Incorrect');

// WITHOUT BRACES
if (id === 100)
  console.log('correct');
else
  console.log('incorrect');


//////////////////
// SWITCHES (Better than if statements in the event there are a lot of different cases to put in)
//////////////////
  
  
const color1 = 'blue';

switch(color1){
  case 'red':
    console.log('Color is red.');
    break;
  case 'blue':
    console.log('Color is blue.');
    break;
  default:
    console.log('Color is not red or blue.');
    break;
}

let day;

switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
  default:
    day = 'Sunday';
    break;
}

console.log(`Today is ${day}.`);


//////////////////
// FUNCTION DECLARATIONS & EXPRESSIONS
//////////////////
  

// Ideally you want to return something from a function
function greet(firstName = 'John', lastName = 'Doe'){ // Define the defaults in the parameters with ES6
  return `Hello, ${firstName} ${lastName}!`;
}

console.log(greet('Levi', 'Blodgett'));

// Function Expressions
const square = function(x=1){
  return x*x;
}

console.log(square(4));

// Immediately invocable function expressions - IIFEs
(function(name){
  console.log('Hello ' + name + '.');
})('Levi');

// Property Methods (When a function is put inside of an object it is called a method)
const todo = {
  add: function(){
    console.log('Add todo...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();


//////////////////
// GENERAL LOOPS (For, while, do while)
//////////////////
  

// // For loop, can't use const inside of a for loop because it'll keep changing
// for(let i = 1; i < 11; i++){
//   if (i === 2){
//     console.log('2 is my favorite number!');
//     continue; // Completes this loop, and goes to the next iteration
//   }
//   if (i === 5){
//     console.log('I hate the number 5!');
//     break; // Stops the loop
//   }
//   console.log('Number: ' + i);
// }

// // While loop
// let i = 0;

// while (i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// // Do while loop
// let x = 0;

// do {
//   console.log('Number ' + x);
//   i++;
// } while(i < 10);

// // Loop through arrays
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// // Suggested way to achieve looping through arrays, forEachs look cleaner and are more logical
// // For each loops
// cars.forEach(function(car, index){
//   console.log(`${index} : ${car}`);
// });

// // MAP
// const users = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Jacob'},
//   {id: 3, name: 'Joe'},
// ]

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);

// // For in loop, often used with objects
// const userr = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 40
// }

// for(let x in userr){
//   console.log(`${x} : ${userr[x]}`);
// }


//////////////////
// WINDOWS METHODS, OBJECTS, & PROPERTIES
//////////////////
  

window.console.log('Hello!'); // Same thing as: console.log('Hello!');

// Alert
// alert('Hello World');

// Prompt
// const input = prompt();
// console.log(input);

// Confirm
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let vol;

// Outter height and width, from the outer edges, whole browser
vol = window.outerHeight;
vol = window.outerWidth;

// Inner height and width, inside of scrollbar and basically just the webpage vs whole browser
vol = window.innerHeight;
vol = window.innerWidth;

// Scroll points, figure out where you are in terms of scrolling, when to have animations show
vol = window.scrollY;
vol = window.scrollX;

// Location object, shows information about the client accessing the site
vol = window.location;
vol = window.location.hostname;
vol = window.location.port;
vol = window.location.href;
vol = window.location.search;

// Redirect, redirects to google.com
// window.location.href = 'http://google.com'

// Reload page, would be used in some kind of function
// window.location.reload()

// History object, goes to somewhere in your history based on the number passed in, in this case one back
// window.history.go(-1)

// History length
vol = window.history.length;

// Navigator object, named after old navigator netscape browser
vol = window.navigator; // Gives language, app name, platform, version
vol = window.navigator.appName;
vol = window.navigator.appVersion;
vol = window.navigator.userAgent;
vol = window.navigator.platform;
vol = window.navigator.vendor;
vol = window.navigator.language;

console.log(vol);


//////////////////
// BLOCK SCOPE WITH LET & CONST
//////////////////
  

// Global scope
var a = 1;
let b = 2;
const c = 3;
console.log('Global scope: ', a, b, c);

// Function Scope
function test1() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a, b, c);
}
test1();

// Block scope
if(true) {
  var a = 7;
  let b = 8;
  const c = 9;
  console.log('If Scope: ', a, b, c);
}
console.log('Global scope: ', a, b, c);

// Example of var being bad in block level scope
for(var a = 0; a < 10; a++){
  console.log(`Loop: ${a}`);
}
console.log('Global scope: ', a, b, c);

// This is the reason not to use var, it is bad with scopes AND with security
// Let & const have a block level scope while var has a function level scope