console.log(document);
console.log('Type of document is:', typeof document, );
console.log("The URL is", document.URL);
console.log("The Domain is", document.domain);


/**
 * Multi line selector  
 * 1. by tag name
 * */

// by tag
const myTags = document.getElementsByTagName('p');
console.log(myTags[0]);

for( let i = 0; i < myTags.length; i++){
    console.log(myTags[i]);

    const element = myTags[i];
    element.style.backgroundColor = "pink";
}

const callByClassName = document.getElementsByClassName('para-in-container');
console.log(callByClassName);

for (const element of callByClassName){
    element.style.border = "5px solid red";
    console.log( 'I am using for of loop to see the output', element)
}


// Query Selector: How to call a ID using query selector.
// Note: when we work with ID we use "querySelector()" but not "querySelectorAll()
const callByQuerySelector = document.querySelector("#para-in-cont-id")
console.log('Calling an ID using Query Selector', callByQuerySelector);

const callClassByQuerySelector = document.querySelectorAll(".para-in-container");
console.log('Calling class using Query selector all', callClassByQuerySelector);
 