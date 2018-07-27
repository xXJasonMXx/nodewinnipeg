window.onload = function() {

    const firstButton = document.getElementById('firstButton');
    const secondButton = document.getElementById('secondButton');
    const message = function() {
        alert('you clicked me')
    }

    firstButton.addEventListener('click', message)

    secondButton.addEventListener('click', function() {
        firstButton.removeEventListener('click', message);
    })
}