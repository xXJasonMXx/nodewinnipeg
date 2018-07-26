//almost complete
window.onload = function() {

    const namesArray = [];

    //prompt function
    function input () {
        let names = prompt('Please input some names');
        if (names.length >= 1) {
            namesArray.push(names);
            input();
        }
    }
    input(0);

   

    //ul adder
    const newUl = document.createElement('ul');
    const newLi = document.createElement('li');

    document.body.appendChild(newUl);
    

            for (i = 1; i <=100; i++) {
                if (namesArray.length-i >= 0){
                    newUl.appendChild(newLi);
                    newLi.textContent = namesArray[namesArray.length-i]
                }
            }
            
    
    //text color
        const list = document.querySelector('li')

        if (namesArray.length % 2 == 0) {
            list.style.color = 'blue'
        }
        if (namesArray.length % 2 == 1) {
            list.style.color = 'green'
        }
}