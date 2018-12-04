

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
  // console.log('Clicked');
  let vil;

  vil = e;

  // Event target element
  vil = e.target;
  vil = e.target.id;
  vil = e.target.className;
  vil = e.target.classList; // If you want the same thing as above but as a collection

  // Event type
  vil = e.type;

  // Timestamp
  vil = e.timeStamp;

  // Coords event relative to the window
  vil = e.clientY; // Returns the number of pixels from the top of the window they clicked it from
  vil = e.clientX; // Returns the number of pixels from the left of the window they clicked it from

  // Coords event relative to the element
  vil = e.offsetY; // Returns the number of pixels from the top of the element they clicked it from
  vil = e.offsetX; // Returns the number of pixels from the left of the element they clicked it from

  console.log(vil);
}


//////////////////
// MOUSE EVENTS
//////////////////


const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h2');

// click, upon clicking there will be an event
// clearBtn.addEventListener('click', runEvent);

// dblclick, upon double-clicking there will be an event
// clearBtn.addEventListener('dblclick', runEvent);

// mousedown, immediately when the user starts holding the click there will be an event
// clearBtn.addEventListener('mousedown', runEvent);

// mouseup, immediately when the user stops holding the click there will be an event
// clearBtn.addEventListener('mouseup', runEvent);

// mouseenter, upon user's cursor entering the element there will be an event
// card.addEventListener('mouseenter', runEvent);

// mouseleave, upon user's cursor exiting the element there will be an event
// card.addEventListener('mouseleave', runEvent);

// mouseover, upon user's cursor entering the element and any inside of it there will be an event
// card.addEventListener('mouseover', runEvent);

// mouseout, upon user's cursor exiting the element and any inside of it there will be an event
// card.addEventListener('mouseout', runEvent);

// mousemove, any movement from the user's cursor inside of the element triggers the event
// Super cool for games
// card.addEventListener('mousemove', runEvent);

// Event Handler
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
// }


//////////////////
// KEYBOARD AND INPUT EVENTS
//////////////////


// Usually these would be named better, but we only have one
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading1 = document.querySelector('h2');
const select = document.querySelector('select');

/// Clear out form, you often run this after you submit a form to clear it out
taskInput.value = '';

// submit, when submitting the form it fires off an event
// taskInput.addEventListener('submit', runEvent);

// keydown, whenever the user presses down on a key it runs an event
// taskInput.addEventListener('keydown', runEvent);

// keyup, whenever the user stops pressing down on a key it runs an event
// taskInput.addEventListener('keyup', runEvent);

// keypress, whenever the user presses the key in any way it runs an event
// taskInput.addEventListener('keypress', runEvent);

// focus, whenever the user clicks inside of an input mode and set it to focus mode
// taskInput.addEventListener('focus', runEvent);

// blur, whenever the user clicks outside of an input mode and set it to blur mode
// taskInput.addEventListener('blur', runEvent);

// cut, whenever the user uses the cut command on something from the element
// taskInput.addEventListener('cut', runEvent);

// paste, whenever the user uses the paste command into the element
// taskInput.addEventListener('paste', runEvent);

// copy, whenever the user uses the copy command from the element
// taskInput.addEventListener('copy', runEvent);

// input, whenever the user does any kind of input keypresses, pastes, whatever does something to it.
// taskInput.addEventListener('input', runEvent);

// change, whenever the value changes it runs an event
select.addEventListener('change', runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value);

  // Tie the heading to whatever the user types in the field
  heading1.innerText = e.target.value;
  
  // Get input value
  // console.log(taskInput.value);

  // e.preventDefault(); // Stops the default action of the form
}


//////////////////
// EVENT BUBBLING AND DELEGATION
//////////////////


// Event bubbling, puts the event listener on the child and then traveling up to the parents
// Calls all of the below if you click on just the card title, because it bubbles up the DOM
// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// Event delegation, puts the event listener on the parent and then going down to the children

// Without event delegation
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// With event delegation
document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  // if (e.target.parentElement.className === 'delete-item secondary-content'){ // className looks at the ENTIRE string inside of the class attribute, so make sure it matches exactly
  //   console.log('delete item');
  // }

  // Best way to target links
  if (e.target.parentElement.classList.contains('delete-item')){ // .contains method, even if we were to put in another class now it would be able to grab it
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}