window.onload = function() {

    const firstButton = document.getElementById('firstButton');
    const secondButton = document.getElementById('secondButton');
    const link = document.querySelector('a');
    const html = document.querySelector('html');
    const message = function() {
        alert('you clicked me')
    }

    firstButton.addEventListener('click', message)

    secondButton.addEventListener('click', function() {
        firstButton.removeEventListener('click', message);
    })

    link.addEventListener('click', function(link) {
        link.preventDefault();
        alert('We prevented the link');
    })

    html.addEventListener('mouseout', function(event) {
        console.log('Click position: x='+event.clientX+' y='+event.clientY)
    })
}