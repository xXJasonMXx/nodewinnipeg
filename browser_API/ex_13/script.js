let time = prompt('How many seconds would you like to stay on this site?');

let timer = function() {

    alert('you\'re session time has run out')
    location = 'https:\\\\google.com'

}

setTimeout(timer, time*1000);