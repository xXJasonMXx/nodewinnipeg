const numbers = [];

for (num = 1; num <= 10; num++) {
    numbers.push(num);
}

const newNumbers = numbers.map(function(n){
    return n+10;
})

console.log('index:', numbers);
console.log('original #\'s:', numbers)
console.log('incremented #\'s', newNumbers)