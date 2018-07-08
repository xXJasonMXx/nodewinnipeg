const getUserID = function() {
    return 50
}

const isUserValid = function() {
    return getUserID() >= 30
}

if (isUserValid()) {
    console.log('User Valid')
} else {
    console.log('User not valid')
}

console.log(getUserID())