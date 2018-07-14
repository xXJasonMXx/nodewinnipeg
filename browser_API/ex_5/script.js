let number = prompt('please input a number');

    if ( number  % 2 === 0) {
         alert('your number is even');
    }

    if ( number  % 2 === 1) {
        alert('your number is odd');
   }
   
    if ( number % 2 !== 0 && number % 2 !== 1) {
       alert('you didn\'t put in a number')
    }