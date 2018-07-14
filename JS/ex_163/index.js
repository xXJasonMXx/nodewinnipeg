//not complete!!!
function add () {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return Array.from(arguments).reduce(reducer);
}

console.log(add(3,8,4));