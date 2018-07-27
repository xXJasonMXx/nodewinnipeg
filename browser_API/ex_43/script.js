window.onload = function() {
    const form = document.querySelector('form');
    const firstForm = form.elements[0];
    const secondForm = form.elements[1];
    const thirdForm = form.elements[2];
    const div = document.querySelector('div');
    
    form.action = 'index.html';

    const formAction = form.action;
    const formMethod = form.method;
    const formEnc = form.enctype;
    const formName = form.name;

    
    div.innerText = formAction+' '+ formMethod+' '+ formEnc+' '+ formName;
}