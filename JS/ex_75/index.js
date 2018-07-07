let f = 0, f1 = -1, f2 = 1;

while (f <= 500) {
    f=f1+f2;
    f1=f2;
    f2=f;
    console.log(f);
}