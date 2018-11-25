

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

// Parent
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
vol = lenk;


console.log(vol);
