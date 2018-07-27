window.onload = function() {
    const form = document.querySelector('form');
    const username = form.elements[0];
    const password = form.elements[1];
    const button = form.elements[2];

    username.value = 'Jason';
    password.value = 'pepe';

    form.addEventListener('submit', function(event) {
        event.preventDefault;
    }) 

    button.addEventListener('click', function() {
        alert('username: '+username.value+' password: '+password.value);
    }) 
  
} 

  
