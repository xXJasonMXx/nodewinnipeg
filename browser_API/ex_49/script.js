//not completed
window.onload = function() {
    const form = document.querySelector('form');
    const div = document.querySelector('div')
    const username = form.elements[0];
    const password = form.elements[1];

    username.value = 'Jason';
    password.value = 'Pepe';

    form.addEventListener('submit', function(event) {
        event.preventDefault;
    })

    if (username.value === '' || password.value === '') {
        div.innerText = 'Please input usename and password';
    } else {
        alert('Welcome: '+username.value)
    }

}