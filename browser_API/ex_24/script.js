window.onload = function() {

let par = document.querySelector('p');
let header = document.querySelector('h1');
let all = document.querySelector('*');

header.style.color = 'red'
header.style.fontWeight = 'normal'
header.style.textDecoration = 'underline'
header.style.justifyContent = 'center'

par.style.color = 'green'
par.style.fontWeight = 'bold'
par.style.border = '1px solid black'
par.style.justifyContent = 'center'

all.style.display = 'flex'
all.style.flexFlow = 'row wrap'
all.style.justifyContent = 'center'

}