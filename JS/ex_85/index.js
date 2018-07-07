let f = 0, f1 = -1, f2 = 1;

do {
    f=f1+f2;
    f1=f2;
    f2=f; 
}

while (f <=500) {
    console.log(f);
}