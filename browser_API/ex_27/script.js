//can't get strings into list items + can't input desired amout of list items into unordered list
window.onload = function() {

    let body = document.querySelector('body');
    let num = [];
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let liArray = []

    for (i=1; i <=100; i++) {
        num.push(i.toString());
        liArray.push(li);    

        ul.appendChild(li);
        li.innerHTML = num[i+1];
        console.log(ul.appendChild(li));
    }

    
  
    document.body.appendChild(ul);

    
}