const mutants = ['Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit'];

const newMutants = mutants.map(function (n) {
    if (n == 'Professor X' || n == 'Logan' || n== 'Phoenix' || n==  'Gambit') {
        return '<3 ' + n 
    } else {
        return n
    }
})

console.log(mutants);
console.log(newMutants);