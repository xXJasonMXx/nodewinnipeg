const validateUser = function(username, password) {
    if (username == 'nacho' && password == 'Nerd1979' || username == 'pedro' && password == '1' || username == 'n' && password == 'N' ){
        console.log('Welcome', username, 'nice to see you again')
    } else {
        console.log('please put in credentials')
    }
}

validateUser('nacho', 'Nerd1979');
validateUser('pedro', '1');
validateUser('i', 'i');