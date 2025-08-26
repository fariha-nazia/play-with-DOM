console.log('Node VS element is connected');
const motherContainerTwo = document.querySelector(".mother-container-2");
console.log(motherContainerTwo);

/** 
 * Node VS Element:
 ** Node: In case of Node - if we write childNode then everything will be counted
 *** Example: the dive, space, class name, text inside everything
 *** In this case, when you console log you will see the length is 7

 ** Element: In case of Element - its simple, will just catch the children
 *** Example: P tag inside the div
 *** In this case, when you console log you will see the length is 2
 * 
*/
console.log(motherContainerTwo.childNodes);
console.log(motherContainerTwo.children);


/**
 * Container 3: 
 * How can you find the parent element using the Node?
 * 
 *  */

const itemC3 = document.getElementById("item2-c3");
console.log(itemC3);
// In case of using element
const parentElementOfC3 = itemC3.parentElement;
console.log(parentElementOfC3);

// to find next sibling
const siblingOfC3 = itemC3.nextElementSibling;
console.log('This is the next sibling element', siblingOfC3);


/**
 * Container 4:
 * 
 *  */ 
const motherContainer4 = document.querySelector(".mother-container-4");
console.log(motherContainer4.innerText);
console.log(motherContainer4.textContent);
console.log(motherContainer4.innerHTML);


/**
 * Container 5: 
 * 
 */

const container5Btn = document.getElementById('container-5-btn');
// Set a class in the btn using JS
container5Btn.setAttribute("class", "btn btn-primary");

// adding the disable thingi in the btn
container5Btn.setAttribute("disabled", true);
console.log(container5Btn);


