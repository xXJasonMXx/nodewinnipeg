window.onload = function() {

let colorChoice = prompt('please input one of the following colors: red green or blue');
let link = document.querySelector('a');

if (colorChoice == 'blue'){
    link.classList.add('blue')
}
if (colorChoice == 'red'){
    link.classList.add('red')
}
if (colorChoice == 'green'){
    link.classList.add('green')
}
if (colorChoice != 'blue' && colorChoice != 'red' && colorChoice != 'green') {
    alert('please input a valid color')
}

console.log(typeof colorChoice)
}