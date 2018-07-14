let sec = 0

const time = function() {
    sec++
    console.log(sec)
    alert('you\'ve been on for '+sec+' seconds')
}

setInterval(time, 1000);