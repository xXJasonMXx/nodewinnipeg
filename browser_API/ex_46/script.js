window.onload = function () {
    const form = document.querySelector('form');
    const select = document.querySelector('select');
    const index = select.selectedIndex;
    
    form.addEventListener('submit', function() {
        alert('Country: '+select.options[index].value+'\n Index: '+index);
    })
}