

//////////////////
// REMOVING AND REPLACING ELEMENTS
//////////////////


// Create Element
const newHeading = document.createElement('h2');

// Add ID
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Parent, for the replaceChild method to be able to grab onto the old heading and replace it
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove element
const liss = document.querySelectorAll('li');
const lisst = document.querySelector('ul');

// Remove list item
liss[0].remove();

// Remove child element
lisst.removeChild(liss[3]);

// console.log(newHeading);

// Classes & attributes
const firstLi = document.querySelector('li:first-child');
const lenk = firstLi.children[0];
let vol;

// Classes
vol = lenk.className;
vol = lenk.classList;
vol = lenk.classList[0];
lenk.classList.add('test');
lenk.classList.remove('test');
vol = lenk;

// Attributes
vol = lenk.getAttribute('href');
vol = lenk.setAttribute('href', 'http://google.com');
lenk.setAttribute('title', 'Google');
vol = lenk.hasAttribute('title');
lenk.removeAttribute('title');
lenk.setAttribute('style', 'visibility: hidden;');
vol = lenk;


console.log(vol);

//////////////////
// EVENT LISTENERS AND THE EVENT OBJECT
//////////////////


// Grabs the item with the "clear-tasks" class (in this case), and adds an event listener
// The event listener takes in an action first, and then what it will do when that action happens
document.querySelector('.clear-tasks').addEventListener('click', function(e){
  console.log("Hello World");

  e.preventDefault(); // Passing in the e as the event object, and preventing it from doing the default purpose of the button
})

// Adding a "#" will make it so the page doesn't refresh upon clicking the link button

// This is the preferred way, as it is cleaner always to have a named function to put in
document.querySelector('.clear-tasks2').addEventListener('click', onClick);

function onClick(e){
  console.log('Clicked');
}