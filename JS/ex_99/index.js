for (n = 0, m = 0, x = 0; n <= 1000; n++, m += n) {

    if (m % 2 == 0) {
        x++;
    }

    if (x == 20) {
        console.log(m);
        break;
    }
}