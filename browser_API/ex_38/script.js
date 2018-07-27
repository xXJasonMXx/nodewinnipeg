window.onload = function() {
    const par = document.createElement('par');
    const body = document.querySelector('body');
    const div = document.querySelector('div');

    div.appendChild(par);

    body.addEventListener('keypress', function(keypress) {
        let keyNum = keypress.charCode;
        let keyChar = String.fromCharCode(keyNum);

        par.innerText = par.innerText+keyChar; 
        par.style.border = '1px solid black';

    })

    par.style.color = 'pink';
   
}