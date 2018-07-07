const num = [];
let sum = 0;

for ( let n = 1; n <= 1000; n++) {
    if (n % 3 == 0) {num.push(n)};
    sum +=n
}

if (sum == 500500) {
    console.log(num);
    console.log('Good job')
} else {
    console.log('Try again')
}