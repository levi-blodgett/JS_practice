

//////////////////
// THE DOM OBJECT
//////////////////


let val;

val = document; // Gives the entire doc type, everything included
val = document.all; // Gives an HTML collection, kind of like an array
val = document.all[2]; // 0-based, access whichever element is in the HTML collection
val = document.all.length; // Can use properties on collections
val = document.head; // Gives just the head
val = document.body; // Just the body
val = document.doctype; // Shows the HTML document type
val = document.domain; // Gives the domain (in this case the loopback address, 127.0.0.1)
val = document.URL; // Returns the entire URL, "http://127.0.0.1:5500/index.html"
val = document.characterSet; // Returns the character set used for the HTML file, UTF-8
val = document.contentType; // text/html

// Can use selectors, not recommended but it is possible
val = document.forms; // Returns all the forms
val = document.forms[0]; // Gives access to the first form
val = document.forms[0].id; // Get the first forms ID
val = document.forms[0].method; // Get the method from the first form, get and post, this one is get
val = document.forms[0].action; // gets the action link, in this case the link to the php file

val = document.links; // Same thing as forms
val = document.links[0]; // Same
val = document.links[0].id; // Same
val = document.links[0].className; // Gives a string of all the classes
val = document.links[0].classList[0]; // Get a collection of classes

val = document.images; // If we had any images, they'd be put here

val = document.scripts; // All scripts that are linked
val = document.scripts[2].getAttribute('src'); // Can get an attribute from a script

let scripts = document.scripts; // defining variable for the next line
let scriptsArr = Array.from(scripts); // If you want to turn a collection into an array

// forEach() is for arrays only, so this can only work after the collection has been turned into an array
scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);


//////////////////
// DOM SELECTORS FOR SINGLE ELEMENTS (allows you to grab one element by ID and stores one thing)
//////////////////


// document.getElementById()
console.log(document.getElementById('task-title'));

const taskTitle = document.getElementById('task-title');

// Get things from the element
console.log(taskTitle.id);
console.log(taskTitle.className);

// Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';

// Change content
taskTitle.textContent = 'Task List - NEW';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>'

// document.querySelector(), newer and more powerful than document.getElementById()

console.log(document.querySelector('#task-title')); // ID
console.log(document.querySelector('.card-title')); // Class
console.log(document.querySelector('h5')); // Element itself, it just gets the first one

document.querySelector('li').style.color = 'red'; // Turns just the first one red
document.querySelector('ul li').style.color = 'red'; // You can also select nested elements

document.querySelector('li:last-child').style.color = 'red'; // Use CSS sudo classes to select the last element
document.querySelector('li:nth-child(3)').style.color = 'red'; // Use CSS sudo classes to select the 3rd element
document.querySelector('li:nth-child(4)').textContent = 'Hello World'; // Use CSS sudo classes to select the 4th element
document.querySelector('li:nth-child(odd)').style.background = 'blue'; // Use CSS sudo classes to select the first odd element
document.querySelector('li:nth-child(even)').style.background = 'lightblue'; // Use CSS sudo classes to select the first even element


//////////////////
// DOM SELECTORS FOR MULTIPLE ELEMENTS (lets you grab multiple elements by their IDs and store a collection)
//////////////////


// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'black';
items[3].textContent = 'Hello';

// Instead of doing global scope we narrow it down by selecting only uls with the class of "collection-item"
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems); // prints the list items out

// document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hey, I\'m here';

// lis.reverse(); // Would return that it is not a function, it is still a collection not an array yet

// Convert HTML Collection into an array
lis = Array.from(lis);

lis.reverse(); // Now this can work

lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index} : Hello`
})

console.log(lis);


// document.querySelectorAll()
const newItems = document.querySelectorAll('ul.collection li.collection-item');

newItems.forEach(function(newItems, index){
  console.log(newItems.className);
  newItems.textContent = `${index} : Hello`
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
})

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = 'f4f4f4';
}

console.log(items);


//////////////////
// TRAVERSING THE DOM (move up and down, parents and children, nodes)
//////////////////


let valhalla;

const lisp = document.querySelector('ul.collection');
const lispItem = document.querySelector('li.collection-item:first-child');

valhalla = lispItem;
valhalla = lisp;

// Get child nodes
valhalla = lisp.childNodes; // Gives a node list of child nodes for lisp, if it is on a different line it counts as a text node, which is why lis will count after the lisp
valhalla = lisp.childNodes[0];
valhalla = lisp.childNodes[0].nodeName;
valhalla = lisp.childNodes[1].nodeType;

// These are the values returned from nodeType
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children elements nodes, preffered to child nodes
valhalla = lisp.children; // Gives an HTML collection back, returns only elements as well, not anything like .childNodes
valhalla = lisp.children[1];
lisp.children[1].textContent = 'Hello';

// Children of children
valhalla = lisp.children[3].children[0];

// First child
valhalla = lisp.firstChild;
valhalla = lisp.firstElementChild;

// Last child
valhalla = lisp.lastChild;
valhalla = lisp.lastElementChild;

// Count child elements
valhalla = lisp.childElementCount;

// Get parent node
valhalla = lispItem.parentNode;
valhalla = lispItem.parentElement;
valhalla = lispItem.parentElement.parentElement;

// Get next sibling
valhalla = lispItem.nextSibling;
valhalla = lispItem.nextElementSibling;
valhalla = lispItem.nextElementSibling.nextElementSibling;

// Get previous sibling
valhalla = lispItem.previousSibling;
valhalla = lispItem.previousElementSibling;
// valhalla = lispItem.previousElementSibling.previousElementSibling;

console.log(valhalla);


//////////////////
// CREATING ELEMENTS
//////////////////


// Create element

const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
const nodeCreator = document.createTextNode('Hello World');
li.appendChild(nodeCreator);

// Create a new link element
const lunk = document.createElement('a');

// Add classes
lunk.className = 'delete-item secondary-content';

// Add icon HTML
lunk.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(lunk)

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);


console.log(li);