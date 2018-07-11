const numbers = [];

for (i = 1; i <= 1000; i++) {
    numbers.push(i)
}

let even = numbers.filter(function(n){
    return n % 2 == 0;
})

let odd = numbers.filter(function(n){
    return n % 2 == 1;
})

console.log(odd)
console.log(even)