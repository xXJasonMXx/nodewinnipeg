window.onload = function() {
let linkFirst = document.querySelector('a');

if (linkFirst.hasAttribute('class')){
    linkFirst.classList.add('blue');
} else {
    linkFirst.classList.add('red');
}

}