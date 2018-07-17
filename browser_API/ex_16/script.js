window.onload = function() {

let element = document.querySelector('a');
let classValue = element.getAttribute('class');
let linkValue = element.getAttribute('href');
let otherElement = document.querySelectorAll('a:first-child')

let linkValue2 = element.attributes[1].value;
let classValue2 = element.attributes[0].value;

console.log(linkValue);
console.log(classValue);

console.log(linkValue2);
console.log(classValue2);

console.log(element.attributes);

console.log(document.querySelectorAll('a:first-child'));
console.log()
}