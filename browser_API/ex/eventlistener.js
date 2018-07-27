function clickHandler() {
	console.log(this);
}

let button = document.querySelector('button');

button.addEventListener('click', clickHandler);     // We add the click event listener 

button.removeEventListener('click', clickHandler);  //