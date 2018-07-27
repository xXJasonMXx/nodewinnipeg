window.onload =  function() {
    const body = document.querySelector('body');

    body.addEventListener('keypress', function(event) {
        console.log('key number: '+event.charCode+
        ' key pressed: '+String.fromCharCode(event.charCode))
    })
}