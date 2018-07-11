const mutants = ['Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit']

    let newMutants = mutants.filter(function(n){
        return n !== 'Magneto' && n !== 'Iceman' && n !== 'Gambit'
    })

    console.log(newMutants);