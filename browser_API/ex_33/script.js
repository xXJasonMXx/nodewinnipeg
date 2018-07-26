window.onload = function() {
    const firstButton = document.querySelector('button');
    const secondButton = document.getElementById('secondButton');
    let message = 'pooooopdi shloop D:'
    let secondMessage = 'shoooooopdi pooooooop';

    const ul = document.querySelector('ul');
    const li = document.createElement('li');

    firstButton.addEventListener('click', function() {
        alert(message);
        ul.innerHTML = '';
    })

    secondButton.addEventListener('click', function() {

        ul.appendChild(li);
        li.innerHTML = secondMessage;
    })

}