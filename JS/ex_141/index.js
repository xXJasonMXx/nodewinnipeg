const tripExpenses = [130, 90, 65];

let buget = tripExpenses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
})

console.log('Buget: $'+buget)