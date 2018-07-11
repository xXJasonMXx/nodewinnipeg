const arithmetic = {
    add: function(a1, a2) { 
        
        if (typeof a1 === 'number' && typeof a2 === 'number') {
        console.log (a1 + a2);
        } else {
            console.log('please input numbers')
        }
    },

    subtract: function(s1, s2) {

        if (typeof s1 === 'number' && typeof s2 === 'number') {
            console.log (s1 - s2);
            } else {
                console.log('please input numbers')
            }
        
    }, 

    multiply: function(m1, m2) {

        if (typeof m1 === 'number' && typeof m2 === 'number') {
        console.log (m1 * m2);
        } else {
            console.log('please input numbers')
        }
    }

}

arithmetic.add(5,5);
arithmetic.subtract(10,8);
arithmetic.multiply(8,7);