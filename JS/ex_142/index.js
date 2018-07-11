const firstPerson = ['Jason', 'Monette', '603 Cowley Rd', 15];
const secondPerson = ['Vicky', 'Tamayo', '155 Cowley Rd', 58];

let first = firstPerson.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
})

let second = secondPerson.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
})

console.log(first);
console.log(second);