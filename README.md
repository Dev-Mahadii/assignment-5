### Question 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementByID() returns a specific element that matches with the given id. getElementsByClassName() returns an HTML collection that matches the given class. querySelector() return the first element that matches. querySelectorAll() return a nodelist when matches.

### Question 2: How do you create and insert a new element into the DOM?

Answer:  First create an element using createElement(). Then add html elements inside previously created element. Then append the element. 
For example : 

const containerToAppend = document.getElementByID("append-container");

let newElement = document.createElement("div");
newElement.textContent = "Hello Mahadi";

containerToAppend.appendChild(newElement);

### Question 3: What is Event Bubbling and how does it work?

Answer: Event Bubbling means when an event occurs in an element, first it performs its action and then goes to its parent element to perform action.

### Question 4: What is Event Delegation in JavaScript? Why is it useful?

Answer: When there is multiple child eventhabdler, instead of this, using single event handler to its parent element and then catch the event from child using event bubbling. This is called Event Delegation. It is useful because it reduces the number of event handlers.

### Question 5: What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault() stops the default behaviour of an element but doesn't stop event bubbling or delegation. On the other hand, stopPropagation() stops the event bubbling or delegation but continues the element default behaviour.
