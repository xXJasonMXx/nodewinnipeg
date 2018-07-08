const mutants = ['Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit'];

const heartMutants = mutants.map(function (){
return mutants[0] = '<3 Professor X', mutants[7] = '<3' + mutants[7], mutants[8] = '<3' +mutants[8]
});

console.log(mutants);
console.log(heartMutants);